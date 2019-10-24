<template>  
<div>
    <nav class="navbar navbar-expand-lg navbar-light">
      <router-link to="/" class="navbar-brand">The Recipe Box</router-link>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-item nav-link" :to="{ name: 'my-menu'}">My Menu</router-link>
          <router-link class="nav-item nav-link" :to="{ name: 'grocery-list'}">Grocery List</router-link>
          <router-link class="nav-item nav-link" :to="{ name: 'calendar'}">Calendar</router-link>
          <router-link class="nav-item nav-link" :to="{ name: 'my-recipes'}">My Recipes</router-link>
        </div>
      </div>
    </nav>
</div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style scoped lang="scss">

</style>
