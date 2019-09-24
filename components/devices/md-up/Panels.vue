<template>
  <div class="wrapper">
    <v-col class="column" cols="3">
      <v-list two-line subheader>
        <v-list-item v-for="item in items" :key="item.title" @click>
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

        <v-list-item v-for="item in items2" :key="item.title" @click>
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
        icon: "folder",
        iconClass: "grey lighten-1 white--text",
        title: "Recipes",
        subtitle: "Jan 17, 2014"
      },
      {
        icon: "folder",
        iconClass: "grey lighten-1 white--text",
        title: "Work",
        subtitle: "Jan 28, 2014"
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
  })
};
</script>

<style >
.wrapper {
  display: flex;
  height: 83vh;
}
.column {
  display: flex;
  flex-direction: column;
}
.v-list {
  flex: 1;
}
</style>