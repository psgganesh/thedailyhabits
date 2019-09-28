<template>
  <v-app-bar
    :clipped-left="$vuetify.breakpoint.lgAndUp"
    color="transparent"
    elevation="1"
    :light="theme.light"
    :dark="theme.dark"
    app
  >
    <v-toolbar-title style="width: 270px" @click.stop="toggleDrawer">
      <v-btn class="gradient-radial" icon>
        <!-- <v-icon>mdi-atom</v-icon> -->
        <img src="/logo.png" width="36px" />
      </v-btn>
      <span class="ga-pacifico logo-title">atomichabits</span>
    </v-toolbar-title>
    <div class="flex-grow-1"></div>
    <v-btn icon>
      <v-icon :light="theme.light" :dark="theme.dark">mdi-bell</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon :light="theme.light" :dark="theme.dark">mdi-settings</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "AppBar",
  computed: {
    ...mapState(["drawer", "theme"])
  },
  methods: {
    toggleDrawer() {
      this.$store.commit("SET_DRAWER_STATE", !this.drawer);
    }
  }
};
</script>

<style>
.logo-title {
  font-size: 22px;
}
</style>