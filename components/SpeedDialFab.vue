<template>
  <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
    <template v-slot:activator="{ on }">
      <v-btn fab class="v-action-button" color="secondary" dark v-on="on">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-toolbar dark color="secondary">
        <v-btn icon dark @click="navigateBack">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>

        <v-toolbar-title>New Task / Goal</v-toolbar-title>
        <div class="flex-grow-1"></div>
        <v-btn icon dark @click="closeCreateHabit">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>

      <v-container class="mb-0 pa-0">
        <nuxt-child />
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "SpeedDialFab",
  data: () => {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false
    };
  },
  methods: {
    closeCreateHabit() {
      this.$router.push({ name: "home" });
      this.dialog = false;
    },
    navigateBack() {
      if (this.$route.name === "home") {
        this.dialog = false;
      } else {
        this.$router.go(-1);
      }
    }
  }
};
</script>