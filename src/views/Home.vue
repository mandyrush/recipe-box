<template>
  <main class="container-fluid">
    <h2>Thursday, October 24, 2019</h2>

    <div class="row justify-content-center">
      <article class="col-lg-5">
        <MenuDay />
      </article>

      <aside class="col-lg-3">
        <GroceryList />
      </aside>
    </div>
  </main>
</template>

<script>
import MenuDay from "@/components/MenuDay.vue";
import GroceryList from "@/components/GroceryList.vue";

export default {
  name: "home",
  components: {
    MenuDay,
    GroceryList
  }
};
</script>

<style lang="scss"></style>
