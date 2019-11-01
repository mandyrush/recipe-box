<template>
  <main class="container-fluid">
    <h2>Add a New Recipe</h2>

    <div class="row justify-content-center">
      <form class="col-md-8">
        <div class="form-group row">
          <label for="title" class="col-sm-2 col-form-label">Title</label>
          <div class="col-sm">
            <input type="text" class="form-control" id="title" />
          </div>
        </div>

        <div>
          <label for="avatar">Upload an image</label>

          <input
            type="file"
            id="avatar"
            name="avatar"
            accept="image/png, image/jpeg"
          />
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

          <div class="form-group col-md-4">
            <label for="ingredient" class="col-form-label">Ingredient</label>
            <input type="text" class="form-control" id="ingredient" />
          </div>
        </div>

        <div class="form-group row">
          <label for="instructions" class="col-sm-2 col-form-label"
            >Instructions</label
          >
          <div class="col-sm">
            <textarea
              class="form-control"
              id="instructions"
              rows="5"
            ></textarea>
          </div>
        </div>

        <div class="form-row justify-content-end">
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  </main>
</template>

<script>
export default {
  name: "my-recipes-add"
};
</script>

<style lang="scss"></style>
