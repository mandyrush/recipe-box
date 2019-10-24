import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/my-menu",
    name: "my-menu",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "my-menu" */ "../views/MyMenu.vue")
  },
  {
    path: "/grocery-list",
    name: "grocery-list",
    component: () =>
      import(/* webpackChunkName: "grocery-list" */ "../views/GroceryList.vue")
  },
  {
    path: "/calendar",
    name: "calendar",
    component: () =>
      import(/* webpackChunkName: "calendar" */ "../views/Calendar.vue")
  },
  {
    path: "/my-recipes",
    name: "my-recipes",
    component: () =>
      import(/* webpackChunkName: "my-recipes" */ "../views/MyRecipes.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
