<template>
  <section>
    <h2>Add a New Recipe</h2>

    <form>
      <div class="form-group row">
        <label for="title" class="col-sm-2 col-form-label">Title</label>
        <div class="col-sm-6">
          <input type="text" class="form-control" id="title" />
        </div>
      </div>

      <h3>Ingredients</h3>

      <div class="form-row">
        <div class="form-group col-md-1">
          <label for="quantity" class="col-form-label">Quantity</label>
          <input type="text" class="form-control" id="quantity" />
        </div>

        <div class="form-group col-md-1">
          <label for="weight" class="col-form-label">Weight</label>
          <input type="text" class="form-control" id="weight" />
        </div>

        <div class="form-group col-md-3">
          <label for="ingredient" class="col-form-label">Ingredient</label>
          <input type="text" class="form-control" id="ingredient" />
        </div>
      </div>

      <h3>Add an Image</h3>

      <div class="form-group row">
        <label for="instructions" class="col-sm-2 col-form-label"
          >Instructions</label
        >
        <div class="col-sm-6">
          <textarea
            type="text"
            class="form-control"
            id="instructions"
            rows="5"
          ></textarea>
        </div>
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </section>
</template>

<script>
export default {
  name: "my-recipes-add"
};
</script>

<style lang="scss"></style>
