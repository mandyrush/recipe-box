<template>
  <section>
    <h2>Thursday, October 24, 2019</h2>

    <div class="row">
      <div class="col-6">
        <article>
          <MenuDay />
        </article>
      </div>

      <div class="col-3">
        <article>
          <GroceryList />
        </article>
      </div>
    </div>
  </section>
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
