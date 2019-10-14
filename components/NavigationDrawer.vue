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
          <img :src="user.avatarUrl()" />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{ username }}</v-list-item-title>
          <v-list-item-subtitle>Logged In</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </template>

    <template>
      <v-divider></v-divider>

      <div class="ma-2">
        <v-btn nuxt to="/habit/create" color="deep-orange darken-4" block rounded large>
          <v-icon>mdi-plus</v-icon>&nbsp;Add new habit
        </v-btn>
      </div>
    </template>
    <v-divider></v-divider>

    <v-list id="categoryList" rounded>
      <v-list-item-group color="white">
        <v-list-item
          v-for="(category, i) in habitCategories"
          :key="i"
          @click="tappedLabelLink(category, i)"
          disabled
        >
          <v-list-item-icon>
            <v-icon :color="category.color" v-text="category.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="category.text"></v-list-item-title>
          </v-list-item-content>
          <v-list-item-action>{{ habitCount(category) }}</v-list-item-action>
        </v-list-item>
      </v-list-item-group>
    </v-list>

    <!-- FOOTER OPTIONS START HERE -->
    <template v-slot:append>
      <v-divider></v-divider>
      <v-list rounded>
        <v-list-item-group color="white">
          <v-list-item v-for="(item, i) in options" :key="i" @click="signOut()">
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
import moment from "moment";
import { Person } from "blockstack";
import { mapGetters } from "vuex";
const arrSum = arr => arr.reduce((a, b) => a + b, 0);

export default {
  name: "NavigationDrawer",
  data() {
    return {
      user: null,
      username: null,
      options: [{ icon: "mdi-logout", text: "Logout" }]
    };
  },
  beforeMount() {
    if (!this.loggedUser.isUserSignedIn()) {
      this.redirectUserToLandingPage();
    }
    this.userData = this.loggedUser.loadUserData();
    this.user = new Person(this.userData.profile);
    this.username = this.userData.username;
    if (this.$store.state.habits.length === 0) {
      this.$store.dispatch("fetchWorkspaceRecords");
    }
  },
  computed: {
    ...mapGetters(["theme", "isAuthenticated", "loggedUser"]),
    currentCategory: {
      get() {
        return this.$store.state.selectedListitem;
      },
      set(value) {
        this.$store.commit("SELECT_CATEGORY", value);
      }
    },
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
    signOut() {
      this.$store.dispatch("saveWorkspaceAndSignout", this.currentDate);
    },

    redirectUserToLandingPage() {
      window.location = `/`;
    },

    collapseNavbar() {
      if (this.$device.isMobile) {
        this.$store.commit("SET_DRAWER_STATE", null);
      }
    },

    habitCount(category) {
      var totalCount = [];
      if (this.$store.state.atomicHabitsData.length > 0) {
        this.$store.state.atomicHabitsData.map(obj => {
          obj.scores.map(score => {
            if (
              moment(score.dated).isSame(this.$store.state.selectedDate, "day")
            ) {
              if (obj.category === category.text.toLocaleLowerCase()) {
                totalCount.push(1);
              } else if (category.text.toLocaleLowerCase() === "all habits") {
                totalCount.push(1);
              }
            }
          });
        });
      }
      return totalCount.length > 0 ? arrSum(totalCount) : "";
    },

    // DISABLED THIS FEATURE FOR NOW
    tappedLabelLink(category, index) {
      // this.$store.dispatch("filterHabitsList", category, index);
      // this.collapseNavbar();
    }
  }
};
</script>

<style>
.v-navigation-drawer.v-navigation-drawer--fixed.v-navigation-drawer--is-mobile.v-navigation-drawer--open.theme--dark {
  background: #000000cc !important;
}
#categoryList .v-list-item--disabled {
  color: #ffffff !important;
  caret-color: #ffffff !important;
}
</style>