<template>
  <section>
    <h2>Calendar</h2>

    <div class="row">
      <div class="col-6">
        <article>
          <MenuDay />
        </article>
      </div>
    </div>
  </section>
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
