<template>
  <div id="upload">
    <file-pond
      name="image"
      ref="pond"
      label-idle="Drop files here..."
      allow-multiple="false"
      server="https://directoryappdf.azurewebsites.net/api/v1/azure-repo"
      v-bind:files="myFiles"
      v-on:init="handleFilePondInit"
      v-on:addfile="handleSuccess"
    />
  </div>
</template>

<script>
import vueFilePond from "vue-filepond";

import "filepond/dist/filepond.min.css";
const FilePond = vueFilePond();

export default {
  name: "Upload",
  data() {
    return {
      myFiles: []
    };
  },
  methods: {
    handleFilePondInit: function() {
      console.log("FilePond Initialized");
    },
    handleSuccess(error, file) {
      if (!error) {
        console.log(file);
        this.$emit("set-imgURI", file);
      } else {
        console.log(error);
      }
    }
  },
  components: {
    FilePond
  }
};
</script>

<style scoped></style>
