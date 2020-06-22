import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/index";
import TransactionsCreate from "../views/create";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/transactions/create",
    name: "About",
    component: TransactionsCreate,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
