<template>
  <div id="board" class="wrapper">
    <v-col class="column" id="habits" cols="3">
      <!-- HABITS TOOLBAR STARTS HERE -->
      <v-toolbar dense :light="theme.light" :dark="theme.dark" color="blue-grey darken-3">
        <template v-if="$vuetify.breakpoint.mdAndUp">
          <v-btn nuxt to="/habit/create" icon>
            <v-icon>mdi-plus-circle</v-icon>
          </v-btn>
        </template>
      </v-toolbar>
      <!-- HABITS TOOLBAR ENDS HERE -->

      <!-- HABITS DRAGGABLE LIST STARTS HERE -->
      <draggable
        v-model="habits"
        :options="{group:'people'}"
        class="v-list v-sheet v-sheet--tile theme--light v-list--subheader v-list--two-line"
      >
        <template v-for="(item, index) in habits">
          <v-list-item :key="index">
            <v-list-item-avatar>
              <v-icon :class="[item.iconClass]" v-text="item.icon"></v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
              <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>
      </draggable>
      <!-- HABITS DRAGGABLE LIST ENDS HERE -->
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
  data: () => ({}),
  computed: {
    ...mapGetters(["theme"]),
    habits: {
      get() {
        return this.$store.state.habitsList;
      },
      set(value) {
        const data = {
          zone: "habits",
          habit: value
        };
        this.$store.dispatch("moveHabit", data);
      }
    }
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
#board > .column > .v-list .v-list-item.theme--light {
  background: #ffffffd6;
  border-bottom: 1px solid #0000001f;
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

.v-list-item__title {
  white-space: inherit;
}
</style>