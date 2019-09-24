<template>
  <v-container fluid>
    <v-row justify="space-around" no-gutters>
      <v-col cols="6">
        <v-btn outlined :light="theme.light" :dark="theme.dark">TODAY</v-btn>
      </v-col>
      <v-col cols="5"></v-col>
      <v-col cols="1"></v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "DesktopView",
  computed: {
    ...mapGetters(["theme"]),
    ...mapState(["today"])
  },
  data: () => {
    return {};
  }
};
</script>