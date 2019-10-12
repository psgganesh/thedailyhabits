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
      <span class="ga-pacifico logo-title">getatomichabits</span>
    </v-toolbar-title>
    <div class="flex-grow-1"></div>
    <!-- <v-btn icon>
      <v-icon :light="theme.light" :dark="theme.dark">mdi-bell</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon :light="theme.light" :dark="theme.dark">mdi-settings</v-icon>
    </v-btn>-->
    <v-btn icon @click.stop="dialog = true">
      <v-icon :light="theme.light" :dark="theme.dark">mdi-restart</v-icon>
    </v-btn>

    <template>
      <v-dialog v-model="dialog" max-width="290">
        <v-card>
          <v-card-title class="headline">Reset all of your habit data?</v-card-title>
          <v-card-text>If you agree, all your habit lists will be cleared and you will have an empty canvas. This action is irreversable, are you sure you would want to conitnue?.</v-card-text>
          <v-card-actions>
            <div class="flex-grow-1"></div>
            <v-btn color="green darken-1" text @click="dialog = false">Disagree</v-btn>
            <v-btn color="green darken-1" text @click="resetHabitData">Agree</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </template>
  </v-app-bar>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "AppBar",
  data: () => {
    return {
      dialog: false
    };
  },
  computed: {
    ...mapState(["drawer", "theme"])
  },
  methods: {
    toggleDrawer() {
      this.$store.commit("SET_DRAWER_STATE", !this.drawer);
    },
    resetHabitData() {
      this.$store.dispatch("resetData");
      setTimeout(this.$router.push({ name: "home" }), 1500);
      this.dialog = false;
    }
  }
};
</script>

<style>
.logo-title {
  font-size: 22px;
}
.v-dialog__content.v-dialog__content--active .v-card.v-sheet.theme--light {
  background: #ffffff;
}
</style>