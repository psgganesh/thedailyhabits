<template>
  <v-container fluid>
    <ActionBar />

    <v-row no-gutters>
      <v-col cols="3" class="list-header text-center">
        <v-container fluid>
          <v-row no-gutters>
            <v-col cols="6" class="text-right">
              <img src="/icons/appointment.png" width="36px" />
            </v-col>
            <v-col cols="6" class="text-left">
              <span class="font-weight-bold textinfo" :class="computedTextColor">Habits</span>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
      <v-col cols="3" class="list-header text-center">
        <v-container fluid>
          <v-row no-gutters>
            <v-col cols="6" class="text-right">
              <img src="/icons/dawn.png" width="36px" />
            </v-col>
            <v-col cols="6" class="text-left">
              <span class="font-weight-bold textinfo" :class="computedTextColor">Morning</span>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
      <v-col cols="3" class="list-header text-center">
        <v-container fluid>
          <v-row no-gutters>
            <v-col cols="6" class="text-right">
              <img src="/icons/cloud.png" width="36px" />
            </v-col>
            <v-col cols="6" class="text-left">
              <span class="font-weight-bold textinfo" :class="computedTextColor">Afternoon</span>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
      <v-col cols="3" class="list-header text-center">
        <v-container fluid>
          <v-row no-gutters>
            <v-col cols="6" class="text-right">
              <img src="/icons/cloudy-night.png" width="36px" />
            </v-col>
            <v-col cols="6" class="text-left">
              <span class="font-weight-bold textinfo" :class="computedTextColor">Evening</span>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>

    <Panels />
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import ActionBar from "~/components/devices/md-up/ActionBar";
import Panels from "~/components/devices/md-up/Panels";
export default {
  name: "DesktopView",
  components: {
    ActionBar,
    Panels
  },
  computed: {
    ...mapGetters(["theme"]),
    computedTextColor() {
      return this.theme.dark ? "white--text" : "black--text";
    }
  }
};
</script>

<style>
.list-header {
  background: #00000057;
}
</style>