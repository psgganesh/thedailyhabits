<template>
  <v-container fluid>
    <ActionBar />
    <v-row no-gutters>
      <v-col cols="3">
        <v-container fluid>
          <v-row no-gutters>
            <v-col cols="1">
              <v-checkbox hide-details :light="theme.light" :dark="theme.dark"></v-checkbox>
            </v-col>
            <v-col cols="11" class="text-right">
              <span class="font-regular textinfo" :class="computedTextColor">Showing 12 habits</span>
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
.textinfo {
  margin-top: 10px;
}
</style>