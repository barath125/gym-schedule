import Vue from "vue";
import VueRouter from "vue-router";
import SchedulesView from "../views/SchedulesView.vue";
import ExerciseDetails from "../views/ExerciseDetails.vue";
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
  {
    path: "/exercise/:type/:name",
    name: "exercise-details",
    component: ExerciseDetails,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
