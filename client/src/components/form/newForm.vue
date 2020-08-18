<template>
  <div>
    <div class="row">
      <div class="col">
        <div class="form">
      <div class="header">
        <p>Please fill out form and attach one image.</p>
      </div>
      <div class="form-body" ref="form" @submit.prevent="onSubmit">
        <vs-select label="Faculty or Major" v-model="scope">
          <vs-select-item
            :key="index"
            :value="r"
            :text="r"
            v-for="(r, index) in scope"
          />
        </vs-select>
        <vs-input
          v-model="form.name"
          label="Full Name"
          placeholder="Please enter Full Name"
        />
        <vs-input
          v-model="form.loc"
          label="Location"
          placeholder="Office Location"
        />
        <vs-select label="Select Department" v-model="form.dept">
          <vs-select-item
            :key="index"
            :value="d"
            :text="d"
            v-for="(d, index) in deptsEnum"
          />
        </vs-select>
        <vs-select label="Select Rank" v-model="form.rank">
          <vs-select-item
            :key="index"
            :value="r"
            :text="r"
            v-for="(r, index) in rankEnum"
          />
        </vs-select>
        <div>
          <vs-textarea
            v-model="form.bio"
            label="Enter Bio here"
            height="200px"
          />
        </div>
        <div class="fileInput">
          <!-- <input
            type="file"
            ref="file"
            @change="onFileSelected($event.target.files)"
          /> -->
          <Upload v-on:set-imgURI="setImageURI" />
        </div>
        <vs-button @click="onSubmit" color="rgb(0, 43, 92)" type="filled"
          >Submit</vs-button
        >
      </div>
    </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import axios from "axios";
import Upload from "../Upload";

export default {
  name: "newForm",
  components: {
    Upload,
  },
  data() {
    return {
      form: {
        name: "",
        dept: null,
        loc: "",
        rank: null,
        bio: "",
        img: "",
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
        "DFS",
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
        "Ctr",
      ],
      scope: ["Faculty", "Major"],
    };
  },
  methods: {
    setImageURI(file) {
      this.selectedFile = file.file;
      console.log(this.selectedFile.name);
      this.form.img = `https://directoryimages.blob.core.windows.net/assets/${this.selectedFile.name}`;
    },
    async onSubmit() {
      this.loading = true;
      const endpoint = this.scope.toLowerCase();
      axios
        .post(`http://localhost:5000/api/v1/${endpoint}`, this.form)
        .then((res) => {
          console.log(res);
          this.loading = false;
          this.form.name = "";
          this.form.dept = null;
          this.form.loc = "";
          this.form.rank = null;
          this.form.bio = "";
          this.form.img = "";
          this.selectedFile = null;
          this.$router.push({ name: "Directory" });
        })
        .catch((err) => {
          this.loading = false;
          this.error = true;
          this.errorText = err;
        });
    },
  },
};
</script>

<style scoped>
.row {
  width: 100vw;
  height: 100%;
}
.col {
  display: flex;
  flex: column;
  width: 85%;
  max-height: 90vh;
  margin: auto;
  padding: 1.2em;
  justify-content: center;
  align-items: center;
}
.form {
  width: 100%;
}
</style>
