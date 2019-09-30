<template>
  <v-app light>
    <v-dialog
      v-model="newHabitModalState"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
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
        <nuxt />
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "wizard",
  data: () => {
    return {
      newHabitModalState: true
    };
  },
  computed: {
    ...mapGetters(["theme"])
  },
  methods: {
    closeCreateHabit() {
      this.$router.push({ name: "home" });
    },
    navigateBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style>
.v-dialog--fullscreen > .v-card {
  background: #ffffff !important;
}
</style>