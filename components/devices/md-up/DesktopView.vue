<template>
  <v-container fluid>
    <ActionBar />
    <PanelHeader />
    <Panels />
  </v-container>
</template>

<script>
import ActionBar from "~/components/devices/md-up/ActionBar";
import PanelHeader from "~/components/devices/md-up/PanelHeader";
import Panels from "~/components/devices/md-up/Panels";
export default {
  name: "DesktopView",
  components: {
    PanelHeader,
    ActionBar,
    Panels
  }
};
</script>
