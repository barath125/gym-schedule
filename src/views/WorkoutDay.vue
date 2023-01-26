<template>
  <div class="about">
    <h1>View your Workouts in {{ name }}!</h1>
    <v-data-table
      :headers="headers"
      :items="getWorkoutName"
      class="elevation-1"
    >
      <template v-slot:[`item.image`]="{ item }">
        <v-img :src="item.image" alt="workout image" max-width="100px"></v-img>
      </template>
      <template v-slot:[`item.weight`]="{ item }">
        <v-chip v-for="weight in item.weight" :key="weight" class="ma-2">
          {{ weight }}
        </v-chip>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "SchedulesView",
  data: () => ({
    headers: [
      {
        text: "Workout Image",
        sortable: false,
        value: "image",
      },
      {
        text: "Workout name",
        sortable: false,
        value: "name",
      },
      {
        text: "Sets",
        sortable: false,
        value: "set",
      },
      {
        text: "Reps",
        sortable: false,
        value: "rep",
      },
      {
        text: "Weights",
        sortable: false,
        value: "weight",
      },
    ],
  }),
  computed: {
    ...mapState({
      schedule: (state) => state.schedule,
    }),
    getWorkoutName() {
      if (String(this.name).toLowerCase() === "chest exercise") {
        return this.$store.state.chest;
      } else {
        return [];
      }
    },
  },
  props: {
    name: String,
  },
};
</script>
