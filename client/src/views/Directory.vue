<template>
  <div class="center">
    <main>
      <router-view
        :faculty="faculty"
        v-on:set-active="setActiveRecord"
        v-on:delete-item="deleteActiveRecord"
        v-on:navigate-to="navigateToUser"
        :active="activeRecord ? activeRecord[0] : ''"
      />
    </main>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Directory",
  props: {
    isAuth: Boolean,
    User: Object,
    token: String
  },
  data() {
    return {
      loading: false,
      error: false,
      errorText: "",
      faculty: [],
      activeRecord: null,
      myFiles: []
    };
  },
  beforeRouteUpdate(to, from, next) {
    console.log(to, from);
    this.getData();
    next();
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
          "https://dfdirectory.azurewebsites.net/api/v1/faculty"
        );
        this.faculty = data;
      } catch (error) {
        this.error = true;
        this.errorText = error;
        console.log(error);
      }
    },
    setActiveRecord(id) {
      const filtered = this.faculty.filter(f => id === f._id);
      this.activeRecord = filtered;
      this.$router.push({ name: "editForm" });
    },
    deleteActiveRecord(id) {
      axios
        .delete(`https://dfdirectory.azurewebsites.net/api/v1/faculty/${id}`)
        .then(res => {
          console.log(res);
          this.$router.push();
        })
        .catch(err => console.log(err));
      this.getData();
    },
    navigateToUser(id) {
      this.$router.push({ name: "User", params: { id } });
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style scoped></style>
