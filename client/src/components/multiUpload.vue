<template>
  <div id="multiUpload">
    <file-pond
      name="image"
      ref="pond"
      label-idle="Drop files here..."
      allow-multiple="true"
      server="http://localhost:5000/api/v1/azure-repo"
      v-bind:files="myFiles"
      v-on:init="handleFilePondInit"
      v-on:processfile="handleFile"
    />
  </div>
</template>

<script>
import vueFilePond from "vue-filepond";

import "filepond/dist/filepond.min.css";
const FilePond = vueFilePond();

export default {
  name: "multiUpload",
  data() {
    return {
      myFiles: []
    };
  },
  methods: {
    handleFilePondInit: function() {
      console.log("FilePond Initialized");
    },
    handleFile(error, file) {
      if (!error) {
        console.log(file);
        this.$emit("set-multiImgURI", file);
      } else {
          console.log(error, file)
      }
    }
  },
  components: {
    FilePond
  }
};
</script>

<style scoped></style>