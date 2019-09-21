<template>
  <div id="atomic-canvas" :class="backdropColor">
    <SpeedDialFab />
    <SelectedTask :taskSelected="taskSelected" />
    <v-row no-gutters>
      <v-col cols="4" class="px-15">
        <TaskList :items="items" />
      </v-col>
      <v-col cols="8" class="full-height px-15"></v-col>
    </v-row>
  </div>
</template>

<script>
import TaskList from "~/components/TaskList";
import SpeedDialFab from "~/components/SpeedDialFab";
import SelectedTask from "~/components/SelectedTask";
import moment from "moment";

export default {
  name: "home-page",
  components: {
    TaskList,
    SpeedDialFab,
    SelectedTask
  },
  data: () => ({
    power: 78,
    selected: [],
    today: moment().format("DD  MMM Y"),
    taskSelected: false,
    items: [
      {
        title: "I will have breakfast everyday on time",
        subtitle: "Last updated 12 Sep 2019 @ 3:00 AM",
        dayCount: {
          completedDays: 2,
          totalDays: 66
        }
      },
      {
        title: "Drink 2 bottles of water",
        subtitle: "Last updated 12 Sep 2019 @ 3:00 AM",
        dayCount: {
          completedDays: 60,
          totalDays: 66
        }
      },
      {
        title: "I will have breakfast everyday on time",
        subtitle: "Last updated 12 Sep 2019 @ 3:00 AM",
        dayCount: {
          completedDays: 2,
          totalDays: 66
        }
      },
      {
        title: "Drink 2 bottles of water",
        subtitle: "Last updated 12 Sep 2019 @ 3:00 AM",
        dayCount: {
          completedDays: 60,
          totalDays: 66
        }
      },
      {
        title: "I will have breakfast everyday on time",
        subtitle: "Last updated 12 Sep 2019 @ 3:00 AM",
        dayCount: {
          completedDays: 2,
          totalDays: 66
        }
      },
      {
        title: "Drink 2 bottles of water",
        subtitle: "Last updated 12 Sep 2019 @ 3:00 AM",
        dayCount: {
          completedDays: 60,
          totalDays: 66
        }
      },
      {
        title: "I will have breakfast everyday on time",
        subtitle: "Last updated 12 Sep 2019 @ 3:00 AM",
        dayCount: {
          completedDays: 2,
          totalDays: 66
        }
      },
      {
        title: "Drink 2 bottles of water",
        subtitle: "Last updated 12 Sep 2019 @ 3:00 AM",
        dayCount: {
          completedDays: 60,
          totalDays: 66
        }
      },
      {
        title: "I will have breakfast everyday on time",
        subtitle: "Last updated 12 Sep 2019 @ 3:00 AM",
        dayCount: {
          completedDays: 2,
          totalDays: 66
        }
      },
      {
        title: "Drink 2 bottles of water",
        subtitle: "Last updated 12 Sep 2019 @ 3:00 AM",
        dayCount: {
          completedDays: 60,
          totalDays: 66
        }
      },
      {
        title: "I will have breakfast everyday on time",
        subtitle: "Last updated 12 Sep 2019 @ 3:00 AM",
        dayCount: {
          completedDays: 2,
          totalDays: 66
        }
      },
      {
        title: "Drink 2 bottles of water",
        subtitle: "Last updated 12 Sep 2019 @ 3:00 AM",
        dayCount: {
          completedDays: 60,
          totalDays: 66
        }
      },
      {
        title: "I will have breakfast everyday on time",
        subtitle: "Last updated 12 Sep 2019 @ 3:00 AM",
        dayCount: {
          completedDays: 2,
          totalDays: 66
        }
      },
      {
        title: "Drink 2 bottles of water",
        subtitle: "Last updated 12 Sep 2019 @ 3:00 AM",
        dayCount: {
          completedDays: 60,
          totalDays: 66
        }
      }
    ]
  }),
  computed: {
    dashColor() {
      return this.$device.isMobile ? "primary" : "white";
    },
    backdropColor() {
      return this.$device.isMobile ? "bg-mobile" : "bg-default";
    }
  }
};
</script>
