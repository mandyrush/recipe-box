<template>
  <main class="container-fluid">
    <h2>My Recipes</h2>

    <router-link :to="{ name: 'my-recipes-add' }">Add Recipe</router-link>

    <div class="row justify-content-center">
      <article class="col-md-8">
        <RecipeList />
      </article>
    </div>
  </main>
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
