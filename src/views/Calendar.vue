<template>
  <main class="container-fluid">
    <h2>Calendar</h2>

    <div class="row justify-content-center">
      <article class="col-md-8">
        <MenuDay />
      </article>
    </div>
  </main>
</template>

<script>
import MenuDay from "@/components/MenuDay.vue";

export default {
  name: "calendar",
  components: {
    MenuDay
  }
};
</script>

<style lang="scss"></style>
