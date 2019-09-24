<template>
  <v-navigation-drawer
    v-model="drawerState"
    width="280"
    :clipped="$vuetify.breakpoint.lgAndUp"
    transition="slide-x-transition"
    :light="theme.light"
    :dark="theme.dark"
    app
  >
    <template v-slot:prepend>
      <v-list-item two-line>
        <v-list-item-avatar>
          <img src="https://randomuser.me/api/portraits/women/81.jpg" />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Jane Smith</v-list-item-title>
          <v-list-item-subtitle>Logged In</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </template>

    <v-divider></v-divider>

    <!-- HEADER OPTIONS START HERE -->
    <v-list rounded>
      <v-list-item-group color="white" v-model="selectedHeaderItem">
        <v-list-item v-for="(item, i) in tabs" :key="i" @click="tappedHeaderLinks">
          <v-list-item-action>
            <v-icon :color="item.color">{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <!-- HEADER OPTIONS END HERE -->

    <v-divider></v-divider>

    <v-list rounded>
      <v-list-item-group color="white" v-model="selectedListitem">
        <v-list-item v-for="(item, i) in items" :key="i" @click="tappedLabelLink">
          <v-list-item-icon>
            <v-icon :color="item.color" v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
          <v-list-item-action>{{ item.count }}</v-list-item-action>
        </v-list-item>
      </v-list-item-group>
    </v-list>

    <!-- FOOTER OPTIONS START HERE -->
    <template v-slot:append>
      <v-divider></v-divider>
      <v-list rounded>
        <v-list-item-group color="white" v-model="selectedFooterItem">
          <v-list-item v-for="(item, i) in options" :key="i" @click="tappedFooterLinks">
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </template>
    <!-- FOOTER OPTIONS END HERE -->
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "NavigationDrawer",
  data() {
    return {
      selectedHeaderItem: null,
      selectedListitem: 0,
      selectedFooterItem: null,
      tabs: [{ icon: "poll", text: "Dashboard", color: "yellow accent-4" }],
      items: [
        {
          icon: "mdi-infinity",
          text: "All habits",
          color: "yellow accent-4",
          count: Math.floor(Math.random() * (+20 - +0)) + +0
        },
        {
          icon: "mdi-heart-pulse",
          text: "Health",
          color: "red accent-4",
          count: Math.floor(Math.random() * (+20 - +0)) + +0
        },
        {
          icon: "mdi-basketball",
          text: "Sports",
          color: "purple darken-4",
          count: Math.floor(Math.random() * (+20 - +0)) + +0
        },
        {
          icon: "mdi-food-fork-drink",
          text: "Nutrition",
          color: "purple accent-4",
          count: Math.floor(Math.random() * (+20 - +0)) + +0
        },
        {
          icon: "mdi-timer",
          text: "Quit a bad habit",
          color: "deep-purple accent-4",
          count: Math.floor(Math.random() * (+20 - +0)) + +0
        },
        { icon: "mdi-book", text: "Study", color: "cyan darken-4", count: 2 },
        {
          icon: "mdi-briefcase",
          text: "Work",
          color: "blue accent-4",
          count: Math.floor(Math.random() * (+20 - +0)) + +0
        },
        {
          icon: "mdi-music",
          text: "Entertainment",
          color: "teal darken-4",
          count: Math.floor(Math.random() * (+20 - +0)) + +0
        },
        {
          icon: "mdi-circle-expand",
          text: "Me time",
          color: "pink darken-4",
          count: Math.floor(Math.random() * (+20 - +0)) + +0
        },
        {
          icon: "mdi-octagram",
          text: "General",
          color: "brown darken-4",
          count: Math.floor(Math.random() * (+20 - +0)) + +0
        }
      ],
      options: [{ icon: "mdi-logout", text: "Logout" }]
    };
  },
  computed: {
    ...mapGetters(["theme"]),
    drawerState: {
      get() {
        return this.$store.state.drawer;
      },
      set(value) {
        this.$store.commit("SET_DRAWER_STATE", value);
      }
    }
  },
  methods: {
    tappedHeaderLinks() {
      this.selectedListitem = null;
      this.selectedFooterItem = null;
      this.collapseNavbar();
    },
    tappedLabelLink() {
      this.selectedHeaderItem = null;
      this.selectedFooterItem = null;
      this.collapseNavbar();
    },
    tappedFooterLinks() {
      this.selectedHeaderItem = null;
      this.selectedListitem = null;
      this.collapseNavbar();
    },
    collapseNavbar() {
      if (this.$device.isMobile) {
        this.$store.commit("SET_DRAWER_STATE", null);
      }
    }
  }
};
</script>