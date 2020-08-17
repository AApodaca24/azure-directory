import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Directory from "../views/Directory.vue";
import Table from "../components/Table.vue";
import newForm from "../components/form/newForm.vue";
import editForm from "../components/form/editForm.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/directory",
    name: "Directory",
    component: Directory,
    children: [
      { path: '', name: "Table", component: Table },
      { path: 'new', name: "newForm", component: newForm },
      { path: 'edit', name: "editForm", component: editForm}
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
