<template>
  <section>
    <h2>My Recipes</h2>

    <router-link :to="{ name: 'my-recipes-add' }">Add Recipe</router-link>

    <div class="row">
      <div class="col-8">
        <RecipeList />
      </div>
    </div>
  </section>
</template>

<script>
import RecipeList from "@/components/RecipeList.vue";
export default {
  name: "my-recipes",
  components: {
    RecipeList
  }
};
</script>

<style lang="scss"></style>
