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
      <v-btn icon>
        <v-icon>mdi-atom</v-icon>
      </v-btn>
      <span class="ga-pacifico">atomichabits</span>
    </v-toolbar-title>
    <div class="flex-grow-1"></div>
    <v-btn icon>
      <v-icon>mdi-bell</v-icon>
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