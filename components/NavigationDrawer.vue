<template>
  <v-navigation-drawer
    v-model="drawerState"
    width="280"
    clipped
    transition="slide-x-transition"
    :light="theme.light"
    :dark="theme.dark"
    fixed
    app
  >
    <template v-slot:prepend>
      <v-list-item two-line>
        <v-list-item-avatar>
          <img :src="avatarUrl" />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{ username }}</v-list-item-title>
          <v-list-item-subtitle>Logged In</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </template>

    <template>
      <div class="ma-2">
        <v-btn @click="addNewHabit" color="deep-orange darken-4" block rounded large>
          <v-icon>mdi-plus</v-icon>&nbsp;Add new habit
        </v-btn>
      </div>
    </template>



    <v-list id="categoryList" dense rounded>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="overline">Overview</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
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
      <v-list rounded>
        <v-list-item-group color="white">
          <v-list-item v-for="(item, i) in options" :key="i" @click="signOut()">
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ item.text }} </v-list-item-title>
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
      today: moment(),
      options: [{ icon: "mdi-logout", text: "Logout" }]
    };
  },
  beforeMount() {

    if (!this.$userSession.isUserSignedIn()) {
      this.redirectUserToLandingPage();
    } else {
      this.userData = this.$userSession.loadUserData();
      this.username = this.userData.username;
      this.user = new Person(this.userData.profile);
      this.$store.commit("SET_USERSESSION", this.$userSession);
      // console.log(this.user);
    }

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
    },
    avatarUrl() {
      // if( (this.user !== null) && (this.user._profile !== null)) {
      //   if(this.user._profile.image.length > 0) {
      //     return this.user._profile.image[0].contentUrl;
      //   }
      // }
      return "/images/blockstack.png";
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
      let totalCount = [];
      let currentSelectedDate = moment(this.$store.state.selectedDate);

      if (this.$store.state.atomicHabitsData.length > 0) {
        this.$store.state.atomicHabitsData.map(obj => {
          if (
              obj.category === category.slug.toLocaleLowerCase()
              ||
              category.text.toLocaleLowerCase() === "all habits"
          ) {
            obj.scores.map((score) => {
              if(this.today.isSame(currentSelectedDate, "day")) {
                if( (!score.completed) && (!score.skipped)) {
                  totalCount.push(1);
                } else {
                  totalCount.push(0);
                }  
              }
            });
          }
        });
      }
      let total = 0;
      if(totalCount.length > 0) {
        total = arrSum(totalCount);
      }
      return  (total === 0 )? "":total;
    },

    // DISABLED THIS FEATURE FOR NOW
    tappedLabelLink(category, index) {
      // this.$store.dispatch("filterHabitsList", category, index);
      // this.collapseNavbar();
    },

    addNewHabit() {
      this.$store.dispatch("saveWorkspace");
      this.$router.push({ name: 'habit-create' });
    },
    
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