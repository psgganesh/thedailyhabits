<template>
  <div>
    <div id="atomic-body" />
    <v-app light>
      <NavigationDrawer />
      <AppBar />
      <v-content>
        <v-container fluid class="pa-0">
          <nuxt />
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import { mapState } from "vuex";
import AppBar from "~/components/AppBar";
import NavigationDrawer from "~/components/NavigationDrawer";

export default {
  name: "default",
  components: {
    AppBar,
    NavigationDrawer
  }
};
</script>
