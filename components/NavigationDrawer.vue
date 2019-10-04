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

    <template v-if="$vuetify.breakpoint.mdAndUp">
      <v-divider></v-divider>

      <div class="ma-2">
        <v-btn nuxt to="/habit/create" color="deep-orange darken-4" block rounded large>
          <v-icon>mdi-plus</v-icon>&nbsp;Add new habit
        </v-btn>
      </div>
    </template>
    <v-divider></v-divider>

    <v-list rounded>
      <v-list-item-group color="white" v-model="currentCategory">
        <v-list-item
          v-for="(category, i) in habitCategories"
          :key="i"
          @click="tappedLabelLink(category, i)"
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
          <v-list-item v-for="(item, i) in options" :key="i">
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
import { mapGetters } from "vuex";
const arrSum = arr => arr.reduce((a, b) => a + b, 0);

export default {
  name: "NavigationDrawer",
  data() {
    return {
      options: [{ icon: "mdi-logout", text: "Logout" }]
    };
  },
  create() {
    this.$store.dispatch(
      "filterHabitsList",
      this.$store.state.selectedListitem
    );
  },
  computed: {
    ...mapGetters(["theme"]),
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
    tappedLabelLink(category, index) {
      this.$store.dispatch("filterHabitsList", category, index);
      this.collapseNavbar();
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
      return totalCount.length > 0 ? arrSum(totalCount) : 0;
    }
  }
};
</script>