<template>
  <div>
    <template v-for="(item, index) in habits">
      <v-list-item :key="'mobile__'+item.id" :class="computedCardClass(item)">
        <v-list-item-icon>
          <v-icon>mdi-drag</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="item.activity"></v-list-item-title>
          <v-list-item-subtitle class="text--primary" v-text="item.title"></v-list-item-subtitle>
          <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-list-item-action-text v-text="computedDays(item)"></v-list-item-action-text>
          <!-- <v-icon v-if="!active" color="grey lighten-1">star_border</v-icon>
          <v-icon v-else color="yellow">star</v-icon>-->
        </v-list-item-action>
      </v-list-item>
      <v-divider v-if="index + 1 < habits.length" :key="'mobile__divider__'+item.id"></v-divider>
    </template>
    <BottomNavigation />
  </div>
</template>

<script>
import moment from "moment";
import Panels from "~/components/devices/md-up/Panels";
import BottomNavigation from "~/components/devices/sm-down/BottomNavigation";

export default {
  name: "MobileView",
  components: {
    Panels,
    BottomNavigation
  },
  computed: {
    habits: {
      get() {
        return this.$store.state.habits;
      },
      set(value) {
        const data = {
          zone: "habits",
          habit: value
        };
        this.$store.dispatch("moveHabit", data);
      }
    }
  },
  methods: {
    computedDays(item) {
      return moment(item.endsOn).diff(item.startsFrom, "days") + " days";
    },
    computedCardClass(item) {
      return "card-border-color card-border-color-" + item.category;
    }
  }
};
</script>