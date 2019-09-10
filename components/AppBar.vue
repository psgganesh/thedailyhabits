<template>
  <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" color="primary" elevation="0" light app>
    
    <v-toolbar-title style="width: 280px" class="hidden-sm-and-down">
      <v-app-bar-nav-icon @click.stop="toggleDrawer"></v-app-bar-nav-icon>
      Home
    </v-toolbar-title>

    <v-toolbar-title style="width: 280px" class="hidden-md-and-up">
      <v-app-bar-nav-icon @click.stop="toggleDrawer"></v-app-bar-nav-icon> Home
    </v-toolbar-title>

    <v-text-field
      flat
      solo-inverted
      hide-details
      prepend-inner-icon="search"
      label="Search"
      class="hidden-sm-and-down ml-2"
    ></v-text-field>

    <div class="flex-grow-1"></div>
    <v-btn icon><v-icon>mdi-dots-vertical</v-icon></v-btn>
  </v-app-bar>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'AppBar',
  computed: {
    ...mapState(['drawer'])
  },
  methods: {
    toggleDrawer() {
      this.$store.commit('SET_DRAWER_STATE', !this.drawer)
    }
  }
}
</script>