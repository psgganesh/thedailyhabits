<template>
  <v-row no-gutters>
    <v-col cols="3">
      <v-menu v-model="datepickerMenu" :close-on-content-click="false" max-width="290">
        <template v-slot:activator="{ on }">
          <v-text-field
            :value="computedDateFormattedMomentjs"
            v-on="on"
            prepend-icon="event"
            :light="theme.light"
            :dark="theme.dark"
          ></v-text-field>
        </template>
        <v-date-picker v-model="date" @change="datepickerMenu = false"></v-date-picker>
      </v-menu>
    </v-col>
    <v-col cols="6"></v-col>
    <v-col cols="3" class="text-right">
      <v-btn class="ma-2" outlined :light="theme.light" :dark="theme.dark">
        <v-icon :light="theme.light" :dark="theme.dark">mdi-plus</v-icon>Add new habit
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
import moment from "moment";
import { mapState, mapGetters } from "vuex";
export default {
  name: "ActionBar",
  data: () => {
    return {
      date: new Date().toISOString().substr(0, 10),
      datepickerMenu: false,
      modal: false
    };
  },
  computed: {
    ...mapGetters(["theme"]),
    ...mapState(["today"]),
    computedDateFormattedMomentjs() {
      return this.date ? moment(this.date).format("dddd, MMMM Do YYYY") : "";
    }
  }
};
</script>