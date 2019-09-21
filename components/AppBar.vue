<template>
  <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" color="primary" elevation="0" dark app>
    <v-toolbar-title style="width: 260px" @click.stop="toggleDrawer">
      <v-btn icon>
        <v-icon>mdi-atom</v-icon>
      </v-btn>
      <span class="ga-pacifico">atomichabits</span>
    </v-toolbar-title>

    <div class="flex-grow-1"></div>
    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "AppBar",
  computed: {
    ...mapState(["drawer"])
  },
  methods: {
    toggleDrawer() {
      this.$store.commit("SET_DRAWER_STATE", !this.drawer);
    }
  }
};
</script>