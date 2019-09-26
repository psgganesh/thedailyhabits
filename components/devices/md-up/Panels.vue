<template>
  <div id="board" class="wrapper">
    <v-col class="column" cols="3">
      <!-- <v-toolbar :light="theme.light" :dark="theme.dark">
        <v-checkbox hide-details :light="theme.light" :dark="theme.dark"></v-checkbox>
        <v-toolbar-title class="white--text">Habits</v-toolbar-title>
        <div class="flex-grow-1"></div>
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-view-module</v-icon>
        </v-btn>
      </v-toolbar>-->
      <v-list two-line subheader>
        <v-list-item v-for="(item, index) in items" :key="index" @click>
          <v-list-item-avatar>
            <v-icon :class="[item.iconClass]" v-text="item.icon"></v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
            <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-btn icon>
              <v-icon color="grey lighten-1">mdi-information</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-col>
    <v-col class="column" cols="3">
      <div>2</div>
    </v-col>
    <v-col class="column" cols="3">
      <div>3</div>
    </v-col>
    <v-col class="column" cols="3">
      <div>4</div>
    </v-col>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Panels",
  data: () => ({
    items: [
      {
        icon: "folder",
        iconClass: "grey lighten-1 white--text",
        title: "Photos",
        subtitle: "Jan 9, 2014"
      }
    ],
    items2: [
      {
        icon: "assignment",
        iconClass: "blue white--text",
        title: "Vacation itinerary",
        subtitle: "Jan 20, 2014"
      },
      {
        icon: "call_to_action",
        iconClass: "amber white--text",
        title: "Kitchen remodel",
        subtitle: "Jan 10, 2014"
      }
    ]
  }),
  computed: {
    ...mapGetters(["theme"])
  }
};
</script>

<style >
.wrapper {
  display: flex;
  height: 77vh;
}
#board > .column {
  display: flex;
  flex-direction: column;
  padding-left: 0px;
}
#board > .column > .v-toolbar {
  flex: none;
}
#board > .column > .v-list {
  overflow-y: scroll;
  flex: 1;
}
.v-list::-webkit-scrollbar {
  width: 0.8em;
  height: 0.5em;
}
.v-list::-webkit-scrollbar-button {
  background: #cccccc;
}
.v-list::-webkit-scrollbar-thumb {
  background: #dedede;
}
​.v-list::-webkit-scrollbar-track-piece {
  background: #ffffff;
}
</style>