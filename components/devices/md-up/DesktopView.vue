<template>
  <v-container fluid>
    <ActionBar />
    <Panels />
  </v-container>
</template>

<script>
import ActionBar from "~/components/devices/md-up/ActionBar";
import Panels from "~/components/devices/md-up/Panels";
export default {
  name: "DesktopView",
  components: {
    ActionBar,
    Panels
  }
};
</script>