<template>
  <div id="app">
    <header>
      <NavBar />
    </header>

    <router-view />

    <footer>
      Footer
    </footer>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  components: {
    NavBar
  }
};
</script>

<style lang="scss">
@import "@/assets/css/colors.scss";
</style>
