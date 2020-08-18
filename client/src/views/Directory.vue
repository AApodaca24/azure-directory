<template>
  <div class="center">
    <h1>Directory</h1>
    <main>
      <router-view
        :faculty="faculty"
        v-on:set-active="setActiveRecord"
        v-on:delete-item="deleteActiveRecord"
        :active="activeRecord ? activeRecord[0] : ''"
      />
    </main>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Directory",
  data() {
    return {
      loading: false,
      error: false,
      errorText: "",
      faculty: [],
      activeRecord: null,
      myFiles: [],
    };
  },
  beforeRouteUpdate(to, from, next) {
    console.log(to, from)
    this.getData()
    next()
  },
  methods: {
    successUpload(event) {
      this.$vs.notify({ color: "success", title: "Upload Success" });
      console.log(event);
    },
    async getData() {
      this.loading = true;
      try {
        const { data } = await axios.get(
          "http://localhost:5000/api/v1/faculty"
        );
        this.faculty = data;
      } catch (error) {
        this.error = true;
        this.errorText = error;
        console.log(error);
      }
    },
    setActiveRecord(id) {
      const filtered = this.faculty.filter((f) => id === f._id);
      this.activeRecord = filtered;
      this.$router.push({ name: "editForm" });
    },
    deleteActiveRecord(id) {
      axios
        .delete(`http://localhost:5000/api/v1/faculty/${id}`)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
        this.getData()
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style scoped></style>
