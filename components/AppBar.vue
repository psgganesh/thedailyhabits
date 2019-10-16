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
      <span class="ga-pacifico logo-title">thedailyhabits</span>
    </v-toolbar-title>
    <div class="flex-grow-1"></div>

    <v-btn icon @click.stop="saveWorkspaceData()">
      <v-icon :light="theme.light" :dark="theme.dark">mdi-content-save</v-icon>
    </v-btn>
    <v-btn icon @click.stop="dialog = true" class="hidden-sm-and-down">
      <v-icon :light="theme.light" :dark="theme.dark">mdi-restart</v-icon>
    </v-btn>
    <v-menu bottom left>
      <template v-slot:activator="{ on }" class="hidden-md-and-up">
        <v-btn dark icon v-on="on" class="hidden-md-and-up">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item>
          <v-list-item-title @click.stop="dialog = true">
            <v-icon>mdi-restart</v-icon>Restart
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

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
    },
    saveWorkspaceData() {
      this.$store.dispatch("saveWorkspace");
    }
  }
};
</script>

<style>
.logo-title {
  font-size: 22px;
}

@media (min-width: 320px) and (max-width: 480px) {
  /* .v-menu__content.theme--light.v-menu__content--fixed.menuable__content__active {
    top: 45px !important;
    left: 245px !important;
  } */
  .v-toolbar__content {
    padding: 4px !important;
    padding-left: 10px !important;
    padding-right: 0px !important;
    padding-bottom: 4px !important;
  }
  .theme--light.v-sheet {
    opacity: 1;
  }
  .v-list--two-line .v-list-item {
    background: #ffffff !important;
  }
}

.v-dialog__content.v-dialog__content--active .v-card.v-sheet.theme--light {
  background: #ffffff;
}
</style>