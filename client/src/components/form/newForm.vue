<template>
  <div>
    <h1>newForm</h1>
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
          <input
            type="file"
            ref="file"
            @change="onFileSelected($event.target.files)"
          />
        </div>
        <vs-button @click="onSubmit" color="rgb(0, 43, 92)" type="filled"
          >Submit</vs-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "newForm",
  data() {
    return {
      form: {
        name: "",
        dept: null,
        loc: "",
        rank: null,
        bio: "",
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
    onFileSelected(file) {
        console.log(file)
      this.loading = true;
      if (!(file.length > 1)) {
        this.selectedFile = file[0];
        this.loading = false;
      } else {
        this.loading = false;
        this.error = true;
        this.errorText = "You can only upload one file.";
      }
    },
    async onSubmit() {
      this.loading = true;
      const endpoint = this.scope.toLowerCase();
      const userRecord = JSON.stringify(this.form);
      const fd = new FormData();
      fd.append("image", this.selectedFile, this.selectedFile.name);
      fd.append("user", userRecord);
      axios
        .post(`http://localhost:5000/api/v1/${endpoint}`, fd)
        .then((res) => console.log(res))
        .catch((err) => {
          this.loading = false;
          this.error = true;
          this.errorText = err;
        });
      this.loading = false;
    },
  },
};
</script>

<style scoped></style>
