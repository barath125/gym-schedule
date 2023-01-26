<template>
  <div class="about">
    <h1>View your schedules</h1>
    <v-data-table :headers="headers" :items="schedule" class="elevation-1">
      <template v-slot:[`item.exercise`]="{ item }">
        <router-link
          :to="{ name: 'workout', params: { name: item.exercise } }"
          >{{ item.exercise }}</router-link
        >
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
        text: "Day",
        sortable: false,
        value: "name",
      },
      {
        text: "Exercise name",
        sortable: false,
        value: "exercise",
      },
      {
        text: "Timing",
        sortable: false,
        value: "timing",
      },
    ],
  }),
  computed: {
    ...mapState({
      schedule: (state) => state.schedule,
    }),
  },
  mounted() {
    console.log(this.schedule);
  },
};
</script>
