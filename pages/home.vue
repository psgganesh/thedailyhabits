<template>
  <div id="atomic-canvas" :class="backdropColor">
    <SelectedTask :taskSelected="taskSelected" />

    <!-- md-up components -->
    <DesktopView class="hidden-sm-and-down" />

    <!-- sm-down components -->
    <MobileView class="hidden-md-and-up" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TaskList from "~/components/TaskList";
import SelectedTask from "~/components/SelectedTask";
import MobileView from "~/components/devices/sm-down/MobileView";
import DesktopView from "~/components/devices/md-up/DesktopView";

export default {
  name: "home-page",
  components: {
    MobileView,
    DesktopView,
    SelectedTask
  },
  data: () => ({
    power: 78,
    selected: [],
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
    ...mapGetters(["theme"]),
    dashColor() {
      return this.$device.isMobile ? "primary" : "white";
    },
    backdropColor() {
      return this.$device.isMobile ? "bg-mobile" : "bg-default";
    }
  }
};
</script>

<style>
body {
  background: #000000 url("/backgrounds/photo-1564359732441-c879d1a16c49.jpg");
  background-size: cover;
  overflow-y: hidden;
  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.6);
}
</style>
