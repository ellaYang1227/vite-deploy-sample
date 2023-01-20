<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{ data }}
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
<script>
export default {
  data() {
    return {
      data: [],
    };
  },
  mounted() {
    console.log(import.meta.env.VITE_TEXT);
    const API_URL = import.meta.env.VITE_API;
    this.$http.get(API_URL).then((res) => {
      this.data = res.data.results[0];
    });
  },
};
</script>
