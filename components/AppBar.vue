<template>
  <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" color="yellow darken-1" app elevation="0" light>
    <v-toolbar-title style="width: 300px">
      <v-list-item-avatar>
        <v-img src="/images/logo.png" @click.stop="toggleDrawer"></v-img>
      </v-list-item-avatar>
    </v-toolbar-title>
    <v-text-field
      flat
      solo-inverted
      hide-details
      prepend-inner-icon="search"
      label="Search"
      class="hidden-sm-and-down"
    ></v-text-field>
    <div class="flex-grow-1"></div>
    <v-btn icon><v-icon>mdi-settings</v-icon></v-btn>
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