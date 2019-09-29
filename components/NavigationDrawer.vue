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

    <v-list rounded>
      <v-list-item-group color="white" v-model="selectedListitem">
        <v-list-item v-for="(item, i) in habitCategories" :key="i" @click="tappedLabelLink">
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
      selectedListitem: 1,
      selectedFooterItem: null,
      options: [{ icon: "mdi-logout", text: "Logout" }]
    };
  },
  computed: {
    ...mapGetters(["theme"]),
    habitCategories: {
      get() {
        return this.$store.state.categories;
      },
      set(value) {}
    },
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