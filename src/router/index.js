import Vue from "vue";
import VueRouter from "vue-router";
import EventList from "../views/EventList.vue";
import EventCreate from "../views/EventCreate.vue";
import EventShow from "../views/EventShow.vue";
import User from "../views/User.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    // CHANGE HOME ROUTE
    component: EventList,
  },
  {
    path: "/event-list",
    name: "event-list",
    component: EventList,
  },
  {
    path: "/create",
    name: "event-create",
    component: EventCreate,
  },
  {
    path: "/evnet/:id",
    name: "event-show",
    component: EventShow,
    props: true,
  },
  {
    path: "/users/:username",
    name: "user",
    component: User,
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
