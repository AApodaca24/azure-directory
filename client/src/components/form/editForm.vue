<template>
  <div>
    <v-row no-gutters>
      <v-col></v-col>
      <v-col cols="8">
        <v-layout class="mt-9">
          <v-container>
            <v-card>
              <v-row>
                <v-col cols="auto">
                  <v-flex v-if="editmode">
                    <v-container>
                      <v-avatar size="200" class="mx-8">
                        <img :src="active.img" :alt="active.name" />
                      </v-avatar>
                      <v-btn
                        class="mx-2"
                        fab
                        dark
                        small
                        absolute
                        top
                        left
                        color="rgb(0, 43, 92)"
                        @click="toggleEdit"
                      >
                        <v-icon dark>mdi-pencil</v-icon>
                      </v-btn>
                    </v-container>
                  </v-flex>
                  <v-flex v-else>
                    <v-btn
                      class="mx-2"
                      fab
                      dark
                      small
                      absolute
                      top
                      left
                      color="rgb(0, 43, 92)"
                      @click="toggleEdit"
                    >
                      <v-icon dark>cancel</v-icon>
                    </v-btn>
                    <v-container style="max-width:200px">
                      <Upload v-on:set-imgURI="setImageURI" />
                      <small
                        >Drag or drop your image over the window or click the
                        window to open up the file explorer</small
                      >
                    </v-container>
                  </v-flex>
                </v-col>
                <v-col>
                  <v-row>
                    <v-text-field
                      v-model="form.name"
                      filled
                      label="Enter Full Name"
                      required
                      class="pa-2"
                    ></v-text-field>
                    <v-select
                      v-model="form.rank"
                      :items="rankEnum"
                      filled
                      label="Rank/Grade"
                      class="pa-2 pr-6"
                    ></v-select>
                  </v-row>
                  <v-row>
                    <v-select
                      v-model="form.dept"
                      :items="deptsEnum"
                      filled
                      label="Select Department"
                      class="pa-2"
                    ></v-select>
                    <v-text-field
                      v-model="form.title"
                      label="Title"
                      filled
                      required
                      class="pa-2 pr-6"
                    ></v-text-field>
                  </v-row>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-flex class="pa-2 pl-4">
                    <v-text-field
                      v-model="form.email"
                      label="Enter Email"
                      filled
                      required
                    ></v-text-field>
                    <v-text-field
                      v-model="form.phone"
                      filled
                      label="Enter Phone"
                      placeholder="Enter 10 digits no dashes"
                      required
                    ></v-text-field>
                    <v-text-field
                      v-model="form.loc"
                      label="Office Location"
                      placeholder="e.g., 6J-109"
                      filled
                      required
                    ></v-text-field>
                    <v-combobox
                      v-model="form.hobbies"
                      :items="form.hobbies"
                      label="Hobbies"
                      hint="Please enter as many as you like"
                      filled
                      multiple
                      chips
                    ></v-combobox>
                  </v-flex>
                </v-col>
                <v-col>
                  <v-flex class="pa-2 pr-4">
                    <v-textarea
                      filled
                      v-model="form.bio"
                      name="input-7-4"
                      label="Personal Bio"
                      height="350px"
                    ></v-textarea>
                  </v-flex>
                </v-col>
              </v-row>
              <v-row v-if="!hasGallery">
                <v-flex xs12>
                  <v-container class="ma-4" row>
                    <v-flex
                      style="text-align:center;width:2rem;font-size:1rem;"
                      class="mt-5"
                    >
                      Do you want to add an image gallery to your profile?
                    </v-flex>
                    <v-flex>
                      <v-switch v-model="gallery"></v-switch>
                    </v-flex>
                  </v-container>
                </v-flex>
              </v-row>
              <v-row v-else>
                <v-flex xs12
                  ><v-container class="mx-5 my-1"
                    ><h1>
                      {{ `${active.name}'s Image Gallery` }}
                    </h1></v-container
                  ><v-container class="mx-5 my-1">
                    <v-flex>
                      <p>
                        Do you want to replace this image gallery to your
                        profile?
                      </p>
                      <v-switch
                        v-model="gallery"
                      ></v-switch> </v-flex></v-container
                ></v-flex>
                <v-flex xs12 class="pa-5">
                  <v-col
                    v-for="(img, index) in active.multiImg"
                    :key="index"
                    class="d-flex child-flex"
                    cols="4"
                  >
                    <v-card flat tile class="d-flex">
                      <v-img :src="img" aspect-ratio="1" class="grey lighten-2">
                        <template v-slot:placeholder>
                          <v-row
                            class="fill-height ma-0"
                            align="center"
                            justify="center"
                          >
                            <v-progress-circular
                              indeterminate
                              color="grey lighten-5"
                            ></v-progress-circular>
                          </v-row>
                        </template>
                      </v-img>
                    </v-card>
                  </v-col>
                </v-flex>
              </v-row>
              <v-row v-if="gallery">
                <v-flex>
                  <v-container class="mx-auto ma-2" style="width:80%">
                    <p>
                      Add images to the grey area below. Upload as many as you
                      like up to 10. These images will then display in your
                      profile page.
                    </p>
                  </v-container>
                  <v-container class="mx-auto ma-2" style="width:80%">
                    <multiUpload v-on:set-multiImgURI="setMultiImageURI" />
                  </v-container>
                </v-flex>
              </v-row>
              <v-row>
                <v-flex class="mx-5 mb-4">
                  <v-btn block color="success" @click="onSubmit" dark
                    >Submit</v-btn
                  >
                </v-flex>
              </v-row>
            </v-card>
          </v-container>
        </v-layout>
      </v-col>
      <v-col></v-col>
    </v-row>
  </div>
</template>

<script>
import axios from 'axios';
import Upload from '../Upload';
import multiUpload from '../multiUpload';

export default {
  name: 'editForm',
  props: ['faculty', 'active'],
  components: {
    Upload,
    multiUpload,
  },
  data() {
    return {
      editmode: true,
      gallery: false,
      form: {
        name: this.active.name,
        title: this.active.title,
        dept: this.active.dept,
        loc: this.active.loc,
        email: this.active.email,
        phone: this.active.phone,
        rank: this.active.rank,
        bio: this.active.bio,
        img: this.active.img,
        hobbies: this.active.hobbies,
        scope: this.active.scope,
        multiImg: [],
      },
      error: false,
      errorText: '',
      loading: false,
      selectedFile: null,
      deptsEnum: [
        'DF',
        'DFAN',
        'DFAS',
        'DFB',
        'DFBL',
        'DFC',
        'DFCE',
        'DFCS',
        'DFEC',
        'DFEG',
        'DFEI',
        'DFME',
        'DFENG',
        'DFF',
        'DFIP',
        'DFH',
        'DFK',
        'DFL',
        'DFLIB',
        'DFM',
        'DFMI',
        'DFMS',
        'DFP',
        'DFPS',
        'DFPY',
        'DFR',
        'DFS',
      ],
      classYear: ['2024', '2023', '2022', '2021'],
      rankEnum: [
        'Gen.',
        'Lt. Gen.',
        'Maj. Gen.',
        'Brig. Gen.',
        'Col.',
        'Lt. Col.',
        'Major',
        'Captain',
        '2d Lt',
        '1st. Lt.',
        'CMSAF',
        'CCMS',
        'First Sgt.',
        'CMSgt.',
        'SMSgt.',
        'MSgt.',
        'TSgt.',
        'SSgt.',
        'SrA.',
        'A1C',
        'Amn',
        'Prof.',
        'Assoc. Prof.',
        'Asst. Prof.',
        'Instr.',
        'Dr.',
        'Mr.',
        'Ms.',
        'Mrs.',
        'Civ',
        'Ctr',
      ],
      scope: ['Faculty', 'Major'],
    };
  },
  methods: {
    setMultiImageURI(file) {
      this.selectedFile = file.file;
      console.log(this.selectedFile.name);
      const img = `https://dfimages01.blob.core.windows.net/dfdirectory/${this.selectedFile.name}`;
      this.form.multiImg.push(img);
    },
    setImageURI(file) {
      this.selectedFile = file.file;
      console.log(this.selectedFile.name);
      this.form.img = `https://dfimages01.blob.core.windows.net/dfdirectory/${this.selectedFile.name}`;
    },
    toggleEdit() {
      switch (this.editmode) {
        case true:
          this.editmode = false;
          break;
        case false:
          this.editmode = true;
          break;
      }
    },
    async onSubmit() {
      this.loading = true;
      const id = this.active._id;
      axios
        .put(
          `https://dfdirectory.azurewebsites.net/api/v1/faculty/${id}`,
          this.form
        )
        .then(res => {
          console.log(res);
          this.loading = false;
          this.form.name = '';
          this.form.dept = null;
          this.form.loc = '';
          this.form.rank = null;
          this.form.bio = '';
          this.form.img = '';
          this.selectedFile = null;
          this.multiImg = [];
          this.$router.push({ name: 'Directory' });
        })
        .catch(err => {
          this.loading = false;
          this.error = true;
          this.errorText = err;
        });
    },
  },
  computed: {
    hasGallery() {
      if (this.active.multiImg.length > 0) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped>
.form {
  width: 100%;
}
</style>
