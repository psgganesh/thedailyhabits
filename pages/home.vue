<template>
  <div id="atomic-canvas" :class="backdropColor">
    <!-- <SpeedDialFab /> -->
    <SelectedTask :taskSelected="taskSelected" />
    <!-- md-up components -->
    <DesktopView class="hidden-sm-and-down" />
    <!-- sm-down components -->
    <MobileView class="hidden-md-and-up" />
  </div>
</template>

<script>
import TaskList from "~/components/TaskList";
import MobileView from "~/components/devices/sm-down/MobileView";
import DesktopView from "~/components/devices/md-up/DesktopView";
import SpeedDialFab from "~/components/SpeedDialFab";
import SelectedTask from "~/components/SelectedTask";
import moment from "moment";

export default {
  name: "home-page",
  components: {
    MobileView,
    DesktopView,
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
