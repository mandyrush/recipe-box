<template>
  <div id="app">
    <header>
      <NavBar />
    </header>
    
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
  import NavBar from "@/components/NavBar.vue";

  export default {
    components: {
      NavBar
    }
  }
</script>

<style lang="scss">
  @import '@/assets/css/colors.scss';
</style>
