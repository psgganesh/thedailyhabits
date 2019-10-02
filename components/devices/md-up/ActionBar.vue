<template>
  <v-row no-gutters>
    <v-col cols="3" class="selectDate">
      <v-menu v-model="datepickerMenu" :close-on-content-click="false" max-width="290">
        <template v-slot:activator="{ on }">
          <v-text-field
            solo-inverted
            flat
            :value="selectedDate"
            v-on="on"
            prepend-icon="event"
            :light="theme.light"
            :dark="theme.dark"
          ></v-text-field>
        </template>
        <v-date-picker v-model="selectedDate" @change="datepickerMenu = false"></v-date-picker>
      </v-menu>
    </v-col>
    <v-col cols="6"></v-col>
    <v-col cols="3" class="text-right">
      <v-text-field
        solo-inverted
        flat
        hide-details
        label="Search"
        prepend-inner-icon="search"
        :light="theme.light"
        :dark="theme.dark"
      ></v-text-field>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "ActionBar",
  data: () => {
    return {
      datepickerMenu: false
    };
  },
  computed: {
    ...mapState(["selectedDate"]),
    ...mapGetters(["theme"])
  }
};
</script>