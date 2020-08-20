<template>
  <div>
    <v-row no-gutter>
      <v-col></v-col>
      <v-col cols="8">
        <v-container>
          <v-flex xs12>
            <v-card style="padding:1.2rem">
              <h1>
                Add Member
              </h1>
              <p>Please see below for walking through adding a member</p>
            </v-card>
          </v-flex>
        </v-container>
        <v-container>
          <v-flex xs12>
            <v-form
              ref="form"
              v-model="valid"
              lazy-validation
              @submit.prevent="onSubmit"
            >
              <v-stepper v-model="e6" vertical>
                <v-stepper-step :complete="e6 > 1" step="1" editable>
                  Basic Information
                  <small style="margin-top:1rem;"
                    >Lets start out with some basic information</small
                  >
                </v-stepper-step>
                <v-stepper-content step="1">
                  <v-card
                    color="grey lighten-3"
                    style="margin-bottom:2rem;"
                    height="400px"
                  >
                    <v-select
                      v-model="form.scope"
                      :items="category"
                      filled
                      label="Faculty or Major"
                    ></v-select>
                    <v-text-field
                      v-model="form.name"
                      filled
                      label="Enter Full Name"
                      required
                    ></v-text-field>
                    <v-select
                      v-model="form.rank"
                      :items="rankEnum"
                      filled
                      label="Rank/Grade"
                    ></v-select>
                    <v-select
                      v-model="form.dept"
                      :items="deptsEnum"
                      filled
                      label="Select Department"
                    ></v-select>
                    <v-text-field
                      v-model="form.title"
                      label="Title"
                      filled
                      required
                    ></v-text-field>
                  </v-card>
                  <v-container>
                    <v-flex>
                      <v-btn color="rgb(0, 43, 92)" dark @click="e6 = 2"
                        >Continue</v-btn
                      >
                      <v-btn text>Cancel</v-btn>
                    </v-flex>
                  </v-container>
                </v-stepper-content>
                <v-stepper-step :complete="e6 > 2" step="2" editable
                  >Enter some contact Info</v-stepper-step
                >
                <v-stepper-content step="2">
                  <v-card
                    color="grey lighten-3"
                    style="margin-bottom:2rem;"
                    height="400px"
                  >
                    <v-text-field
                      v-model="form.email"
                      label="Enter Email"
                      :rules="emailRules"
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
                  </v-card>
                  <v-btn color="rgb(0, 43, 92)" dark @click="e6 = 3"
                    >Continue</v-btn
                  >
                  <v-btn text>Cancel</v-btn>
                </v-stepper-content>
                <v-stepper-step :complete="e6 > 3" step="3" editable
                  >Now for the good stuff.</v-stepper-step
                >
                <v-stepper-content step="3">
                  <v-card
                    color="grey lighten-3"
                    style="margin-bottom:2rem;"
                    height="380px"
                  >
                    <v-row>
                      <v-col xs6>
                        <v-combobox
                          v-model="form.hobbies"
                          :items="form.hobbies"
                          label="Hobbies"
                          hint="Please enter as many as you like"
                          multiple
                          chips
                        ></v-combobox>
                        <div class="upload">
                          <Upload v-on:set-imgURI="setImageURI" />
                        </div>
                      </v-col>
                      <v-col xs6>
                        <v-textarea
                          filled
                          v-model="form.bio"
                          name="input-7-4"
                          label="Personal Bio"
                          height="350px"
                        ></v-textarea>
                      </v-col>
                    </v-row>
                  </v-card>
                  <v-flex row justify-space-around class="ml-2">
                    <v-btn color="success" dark @click="onSubmit">Submit</v-btn>
                    <v-btn text>Cancel</v-btn>
                    <v-btn color="error" class="mr-4" @click="reset">
                      Reset Form
                    </v-btn>
                  </v-flex>
                </v-stepper-content>
              </v-stepper>
            </v-form>
          </v-flex>
        </v-container>
      </v-col>
      <v-col></v-col>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";
import Upload from "../Upload";

export default {
  name: "newForm",
  components: {
    Upload
  },
  data() {
    return {
      e6: 1,
      valid: true,
      form: {
        name: "",
        title: "",
        dept: null,
        loc: "",
        email: "",
        phone: "",
        rank: null,
        bio: "",
        img: "",
        hobbies: [],
        scope: null
      },
      error: false,
      errorText: "",
      loading: false,
      selectedFile: null,
      deptsEnum: [
        "DF",
        "DFAN",
        "DFAS",
        "DFB",
        "DFBL",
        "DFC",
        "DFCE",
        "DFCS",
        "DFEC",
        "DFEG",
        "DFEI",
        "DFME",
        "DFENG",
        "DFF",
        "DFIP",
        "DFH",
        "DFK",
        "DFL",
        "DFLIB",
        "DFM",
        "DFMI",
        "DFMS",
        "DFP",
        "DFPS",
        "DFPY",
        "DFS"
      ],
      classYear: ["2024", "2023", "2022", "2021"],
      rankEnum: [
        "Gen.",
        "Col.",
        "Lt. Col.",
        "Major",
        "Captain",
        "I Lt",
        "II Lt.",
        "CMSgt.",
        "SMSgt.",
        "MSgt.",
        "TSgt.",
        "SSgt.",
        "SrA.",
        "Civ",
        "Ctr"
      ],
      category: ["faculty", "major"],
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ]
    };
  },
  methods: {
    reset() {
      this.$refs.form.reset();
    },
    setImageURI(file) {
      this.selectedFile = file.file;
      console.log(this.selectedFile.name);
      this.form.img = `https://directoryimages.blob.core.windows.net/assets/${this.selectedFile.name}`;
    },
    async onSubmit() {
      this.loading = true;
      const endpoint = this.form.scope;
      axios
        .post(`http://localhost:5000/api/v1/${endpoint}`, this.form)
        .then(res => {
          console.log(res);
          this.loading = false;
          this.form.name = "";
          this.form.title = "";
          this.form.email = "";
          this.form.phone = "";
          this.form.hobbies = [];
          this.form.dept = null;
          this.form.loc = "";
          this.form.rank = null;
          this.form.bio = "";
          this.form.img = "";
          this.form.scope = null;
          this.selectedFile = null;
          this.$router.push({ name: "Directory" });
        })
        .catch(err => {
          this.loading = false;
          this.error = true;
          this.errorText = err;
        });
    }
  }
};
</script>

<style scoped>
.form {
  width: 100%;
}
</style>
