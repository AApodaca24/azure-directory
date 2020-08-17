<template>
  <div class="center">
    <h1>Directory</h1>
    <main>
      <router-view :faculty="faculty" />
  </main>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "Directory",
  data() {
    return {
      loading: false,
      error: false,
      errorText: '',
      faculty: []
    };
  },
  methods: {
    async getData() {
      this.loading = true
      try {
        const { data } = await axios.get('http://localhost:5000/api/v1/faculty')
        this.faculty = data
      } catch (error) {
        this.error = true
        this.errorText = error
        console.log(error)
      }
    }
  },
  mounted() {
    this.getData()
  }
};
</script>

<style scoped></style>
