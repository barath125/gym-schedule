import Vue from "vue";
import VueRouter from "vue-router";
import SchedulesView from "../views/SchedulesView.vue";
import WorkoutDay from "../views/WorkoutDay.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "schedules",
    component: SchedulesView,
  },
  {
    path: "/workout/:name",
    name: "workout",
    component: WorkoutDay,
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
