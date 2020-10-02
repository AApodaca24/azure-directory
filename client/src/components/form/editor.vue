<template>
  <div>
  <vue-editor v-model="bio" @input="$emit('update:bio', bio)"></vue-editor>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
export default {
  name: 'editor',
  props: {
    bio: String,
  },
  components: {
      VueEditor
  },
  created() {
    console.log(this.$refs);
  },
};
</script>

<style scoped>
</style>
