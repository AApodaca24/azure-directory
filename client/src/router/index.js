import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Directory from "../views/Directory.vue";
import Table from "../components/Table.vue";
import newForm from "../components/form/newForm.vue";
import editForm from "../components/form/editForm.vue";
import Card from "../components/layout/Card.vue";
import User from "../components/layout/User.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/directory",
    component: Directory,
    children: [
      { path: '', name: "Directory", component: Table },
      { path: ':dept', name: "department", component: Card},
      { path: 'new', name: "newForm", component: newForm },
      { path: 'edit', name: "editForm", component: editForm},
      { path: ':id', name: "User", component: User }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
