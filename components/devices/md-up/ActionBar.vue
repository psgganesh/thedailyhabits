<template>
  <v-row no-gutters>
    <v-col cols="3" class="selectDate">
      <v-menu
        id="selectCurrentDate"
        v-model="datepickerMenu"
        :close-on-content-click="false"
        max-width="290"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            solo-inverted
            flat
            :value="computedDateFormattedMomentjs"
            v-on="on"
            :light="theme.light"
            :dark="theme.dark"
            disabled
          ></v-text-field>
        </template>
        <v-date-picker v-model="currentDate" @change="chooseDate()"></v-date-picker>
      </v-menu>
    </v-col>
    <v-col cols="6"></v-col>
    <v-col cols="3" class="text-right">
      <!-- <v-text-field
        solo-inverted
        flat
        hide-details
        label="Search"
        prepend-inner-icon="search"
        :light="theme.light"
        :dark="theme.dark"
      ></v-text-field>-->
    </v-col>
  </v-row>
</template>

<script>
import moment from "moment";
import { mapGetters, mapState } from "vuex";
export default {
  name: "ActionBar",
  data: () => {
    return {
      datepickerMenu: false,
      currentDate: new Date(moment()).toString().substr(0, 15)
    };
  },
  methods: {
    chooseDate() {
      this.datepickerMenu = false;
      this.$store.commit("SET_CURRENT_DATE", this.currentDate);
      this.$store.dispatch("fetchWorkspaceRecords");
    }
  },
  computed: {
    ...mapGetters(["theme"]),
    computedDateFormattedMomentjs() {
      return this.currentDate
        ? moment(this.currentDate).format("dddd, MMMM Do YYYY")
        : "";
    }
  }
};
</script>

<style>
.selectDate .v-icon--disabled {
  opacity: 1 !important;
  color: #ffffff !important;
}
.selectDate .theme--dark.v-input--is-disabled input {
  color: #ffffff !important;
}
</style>