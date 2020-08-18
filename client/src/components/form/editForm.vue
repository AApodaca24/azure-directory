<template>
  <div>
    <div class="form">
      <div class="header">
        <p>Please Edit your entry</p>
        <vs-avatar size="70px" :src="active.img" />
      </div>
      <div class="form-body">
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
  name: "editForm",
  props: ["faculty", "active"],
  data() {
    return {
      form: {
        name: this.active.name,
        dept: this.active.dept,
        loc: this.active.loc,
        rank: this.active.rank,
        bio: this.active.bio,
        img: this.active.img,
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
    async onSubmit() {
      this.loading = true;
      const id = this.active._id;
      axios
        .put(`http://localhost:5000/api/v1/faculty/${id}`, this.form)
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

<style scoped></style>
