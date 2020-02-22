<template>
  <v-app light>
    <NavigationDrawer />
    <AppBar />
    <v-content>
      <v-container fluid class="pa-0">
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { mapState } from "vuex";
import AppBar from "~/components/AppBar";
import NavigationDrawer from "~/components/NavigationDrawer";

export default {
  name: "default",
  components: {
    AppBar,
    NavigationDrawer
  }
};
</script>


<style>
.v-text-field input {
  font-family: "Nunito", sans-serif;
}
.wrapper {
  display: flex;
  height: 79vh;
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
  overflow-x: hidden;
  flex: 1;
  border-radius: 0px;
}
.theme--light.v-list,
.theme--light.v-sheet {
  background: #ffffff57;
}
#board > .column > .v-list .v-list-item.theme--light {
  background: #ffffffd6;
  border-bottom: 1px solid #0000001f;
}

#board .v-card__actions {
  background: #ffffffd6;
}

.v-list-item.v-list-item--link.theme--light {
  background: #ffffffd6;
}
.v-list::-webkit-scrollbar {
  width: 0.1em;
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

.v-list-item__title,
.v-list-item__subtitle {
  white-space: inherit;
}
</style>