<template>
  <div id="board" class="wrapper">
    <v-col class="column" id="habits" cols="3">
      <v-toolbar dense :light="theme.light" :dark="theme.dark">
        <template v-if="$vuetify.breakpoint.mdAndUp">
          <v-btn nuxt to="/habit/create" icon>
            <v-icon>mdi-plus-circle</v-icon>
          </v-btn>
        </template>
      </v-toolbar>
      <v-list two-line subheader>
        <!-- <v-list-item v-for="(item, index) in items" :key="index" @click>
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
        </v-list-item>-->
      </v-list>
    </v-col>
    <v-col class="column" id="morning" cols="3">
      <v-list two-line subheader></v-list>
    </v-col>
    <v-col class="column" id="afternoon" cols="3">
      <v-list two-line subheader></v-list>
    </v-col>
    <v-col class="column" id="evening" cols="3">
      <v-list two-line subheader></v-list>
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
      },
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

<style>
.v-text-field input {
  font-family: "Nunito", sans-serif;
}
.wrapper {
  display: flex;
  height: 75vh;
}
#board > .column {
  display: flex;
  flex-direction: column;
  padding-left: 0px;
  padding-bottom: 0px;
  padding-right: 0px;
  padding-top: 0px;
  border-right: 1px solid #0000001f;
  border-top: 1px solid #0000001f;
}
#board > .column > .v-toolbar {
  flex: none;
}
#board > .column > .v-list {
  overflow-y: scroll;
  flex: 1;
}
.theme--light.v-list,
.theme--light.v-sheet {
  background: #ffffff57;
}
.v-list-item.v-list-item--link.theme--light {
  background: #ffffffd6;
}
.v-list::-webkit-scrollbar {
  width: 0.3em;
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