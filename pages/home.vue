<template>
  <div id="atomic-canvas" :class="backdropColor">
    <!-- md-up components -->
    <DesktopView class="hidden-sm-and-down" />

    <!-- sm-down components -->
    <MobileView class="hidden-md-and-up" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import MobileView from "~/components/devices/sm-down/MobileView";
import DesktopView from "~/components/devices/md-up/DesktopView";

export default {
  name: "home-page",
  components: {
    MobileView,
    DesktopView
  },
  data: () => ({
    taskSelected: false
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
html {
  font-size: inherit;
}
body {
  background: #000000 url("/backgrounds/photo-1564359732441-c879d1a16c49.jpg");
  background-size: cover;
  overflow-y: hidden;
  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.3);
}
</style>
