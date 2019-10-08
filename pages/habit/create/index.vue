<template>
  <v-container class="mb-0 pa-0">
    <v-row>
      <v-col>
        <v-card color="info" dark>
          <v-card-text class="white--text">
            <div class="headline mb-2">Choose using template</div>Just pick a goal and choose your options and you will be all set with a your new goal to track.
          </v-card-text>
          <v-card-actions>
            <div class="flex-grow-1"></div>
            <v-btn nuxt to="/habit/create/template" text>Pick a template</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="text-center">
        <span class="headline">OR</span>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card color="accent" dark>
          <v-card-text class="white--text">
            <div class="headline mb-2">Set your own task / goal</div>Define your own goal, setup how you would want to measure them and get ready to track them.
          </v-card-text>
          <v-card-actions>
            <div class="flex-grow-1"></div>
            <v-btn nuxt to="/habit/create/custom" text>Define goal</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "CreateHabitPage",
  layout: "wizard"
};
</script>

<style>
.v-dialog--fullscreen > .v-card {
  background: #ffffff !important;
}
</style>