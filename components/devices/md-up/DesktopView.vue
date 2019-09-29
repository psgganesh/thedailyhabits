<template>
  <v-container fluid>
    <ActionBar />
    <PanelHeader />
    <Panels />
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import ActionBar from "~/components/devices/md-up/ActionBar";
import PanelHeader from "~/components/devices/md-up/PanelHeader";
import Panels from "~/components/devices/md-up/Panels";
export default {
  name: "DesktopView",
  components: {
    PanelHeader,
    ActionBar,
    Panels
  },
  computed: {
    ...mapGetters(["theme"]),
    computedTextColor() {
      return this.theme.dark ? "white--text" : "black--text";
    }
  }
};
</script>
