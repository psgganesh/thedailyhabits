<template>
  <div>
    <v-row no-gutters>
      <v-col class="column" id="habits" cols="12">
        <v-row no-gutters class="text-left pt-2">
          <v-col cols="2" class="text-center">
            <img src="/icons/appointment.png" width="30px" />
          </v-col>
          <v-col cols="10">
            <span class="font-weight-bold textinfo pl-3 ga-nunito">Habits</span>
          </v-col>
        </v-row>
        <draggable
          v-model="habits"
          :options="{group:'thedailyhabits'}"
          ghostClass="ghost"
          animation="150"
          easing="cubic-bezier(1, 0, 0, 1)"
          class="v-list v-sheet v-sheet--tile theme--light v-list--subheader v-list--two-line mobile-dotted-margin"
        >
          <template v-for="(item, index) in habits">
            <v-list-item :key="'mobile__'+item.id+'_'+index" :class="computedCardClass(item)">
              <v-list-item-icon>
                <v-icon>mdi-drag</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.activity"></v-list-item-title>
                <v-list-item-subtitle class="text--primary" v-text="item.title"></v-list-item-subtitle>
                <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-list-item-action-text v-text="computedDays(item)"></v-list-item-action-text>
              </v-list-item-action>
            </v-list-item>
            <!-- <v-divider v-if="index + 1 < habits.length" :key="'mobile__divider__'+item.id"></v-divider> -->
          </template>
        </draggable>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col class="column" id="morning" cols="12">
        <v-row no-gutters class="text-left pt-2">
          <v-col cols="2" class="text-center">
            <img src="/icons/dawn.png" width="30px" />
          </v-col>
          <v-col cols="10">
            <span class="font-weight-bold textinfo pl-3 ga-nunito">Morning</span>
          </v-col>
        </v-row>
        <draggable
          v-model="morningHabits"
          :options="{group:'thedailyhabits'}"
          ghostClass="ghost"
          animation="150"
          easing="cubic-bezier(1, 0, 0, 1)"
          class="v-list v-sheet v-sheet--tile theme--light v-list--subheader v-list--three-line"
          dragoverBubble=false
          dataIdAttr='data-id'
          delay=0
          touchMoveSensitivity=0
          touchStartThreshold=3
          forceFallback=false
          fallbackClass='sortable-fallback'
          fallbackOnBody=false
        >
          <template v-for="(item, index) in morningHabits">
            <v-container class="lighten-5" :key="'mobile__'+index" :class="computedCardClass(item)">
              <v-row no-gutters>
                <v-col cols="2" sm="2">
                  <v-icon>mdi-drag</v-icon>
                </v-col>
                <v-col cols="8" sm="8">
                  <v-list-item-content>
                    <v-list-item-title v-text="item.activity"></v-list-item-title>
                    <v-list-item-subtitle class="text--primary" v-text="item.title"></v-list-item-subtitle>
                    <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
                  </v-list-item-content>
                </v-col>
                <v-col cols="2" sm="2">
                  <v-list-item-action-text v-text="computedDays(item)"></v-list-item-action-text>
                </v-col>
              </v-row>
              <v-divider class="my-4 default"></v-divider>
              <v-row no-gutters class>
                <v-col cols="12" sm="6">
                  <v-btn
                    small
                    color="green accent-4 white--text ga-nunito"
                    @click="completeTodo(item)"
                  >DONE</v-btn>
                  <confirmation-dialog :item="item"></confirmation-dialog> 
                  <!-- <v-btn
                    small
                    color="green accent-4 white--text ga-nunito"
                    @click="completeTodo(item)"
                  >DONE</v-btn> -->
                </v-col>
              </v-row>
            </v-container>
            <!-- <v-divider v-if="index + 1 < morningHabits.length" :key="'mobile__divider__'+item.id"></v-divider> -->
          </template>
        </draggable>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col class="column" id="afternoon" cols="12">
        <v-row no-gutters class="text-left pt-2">
          <v-col cols="2" class="text-center">
            <img src="/icons/cloud.png" width="30px" />
          </v-col>
          <v-col cols="10">
            <span class="font-weight-bold textinfo pl-3 ga-nunito">Afternoon</span>
          </v-col>
        </v-row>
        <draggable
          v-model="afternoonHabits"
          :options="{group:'thedailyhabits'}"
          ghostClass="ghost"
          animation="150"
          easing="cubic-bezier(1, 0, 0, 1)"
          class="v-list v-sheet v-sheet--tile theme--light v-list--subheader v-list--three-line"
          dragoverBubble=false
          dataIdAttr='data-id'
          delay=0
          touchMoveSensitivity=0
          touchStartThreshold=3
          forceFallback=false
          fallbackClass='sortable-fallback'
          fallbackOnBody=false
        >
          <template v-for="(item, index) in afternoonHabits">
            <v-container class="lighten-5" :key="'mobile__'+index" :class="computedCardClass(item)">
              <v-row no-gutters>
                <v-col cols="2" sm="2">
                  <v-icon>mdi-drag</v-icon>
                </v-col>
                <v-col cols="8" sm="8">
                  <v-list-item-content>
                    <v-list-item-title v-text="item.activity"></v-list-item-title>
                    <v-list-item-subtitle class="text--primary" v-text="item.title"></v-list-item-subtitle>
                    <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
                  </v-list-item-content>
                </v-col>
                <v-col cols="2" sm="2">
                  <v-list-item-action-text v-text="computedDays(item)"></v-list-item-action-text>
                </v-col>
              </v-row>
              <v-divider class="my-4 default"></v-divider>
              <v-row no-gutters class>
                <v-col cols="12" sm="6" class="mb-4 ml-2">
                  <v-btn
                    small
                    color="green accent-4 white--text ga-nunito"
                    v-on:click.native.once="completeTodo(item)"
                  >DONE</v-btn>
                  <confirmation-dialog :item="item"></confirmation-dialog>
                </v-col>
              </v-row>
            </v-container>
            <!-- <v-divider v-if="index + 1 < afternoonHabits.length" :key="'mobile__divider__'+item.id"></v-divider> -->
          </template>
        </draggable>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col class="column" id="afternoon" cols="12">
        <v-row no-gutters class="text-left pt-2">
          <v-col cols="2" class="text-center">
            <img src="/icons/cloudy-night.png" width="30px" />
          </v-col>
          <v-col cols="10">
            <span class="font-weight-bold textinfo pl-3 ga-nunito">Evening</span>
          </v-col>
        </v-row>
        <draggable
          v-model="eveningHabits"
          :options="{group:'thedailyhabits', draggable:'.item'}"
          ghostClass="ghost"
          animation="150"
          easing="cubic-bezier(1, 0, 0, 1)"
          class="v-list v-sheet v-sheet--tile theme--light v-list--subheader v-list--three-line"
          dragoverBubble=false
          dataIdAttr='data-id'
          delay=0
          touchMoveSensitivity=0
          touchStartThreshold=3
          forceFallback=false
          fallbackClass='sortable-fallback'
          fallbackOnBody=false
        >
          <template v-for="(item, index) in eveningHabits">
            <v-container class="lighten-5" :key="'mobile__'+index" :class="computedCardClass(item)">
              <v-row no-gutters>
                <v-col cols="2" sm="2">
                  <v-icon>mdi-drag</v-icon>
                </v-col>
                <v-col cols="8" sm="8">
                  <v-list-item-content>
                    <v-list-item-title v-text="item.activity"></v-list-item-title>
                    <v-list-item-subtitle class="text--primary" v-text="item.title"></v-list-item-subtitle>
                    <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
                  </v-list-item-content>
                </v-col>
                <v-col cols="2" sm="2">
                  <v-list-item-action-text v-text="computedDays(item)"></v-list-item-action-text>
                </v-col>
              </v-row>
              <v-divider class="my-4 default"></v-divider>
              <v-row no-gutters class>
                <v-col cols="12" sm="6" class="mb-4 ml-2">
                  <v-btn
                    small
                    color="green accent-4 white--text ga-nunito"
                    v-on:click.native.once="completeTodo(item)"
                  >DONE</v-btn>
                  <confirmation-dialog :item="item"></confirmation-dialog>
                </v-col>
              </v-row>
            </v-container>
            <!-- <v-divider v-if="index + 1 < eveningHabits.length" :key="'mobile__divider__'+item.id"></v-divider> -->
          </template>
        </draggable>
      </v-col>
    </v-row>

    <AddNewHabitButton />
    <v-snackbar v-model="mobilesnackbar" :timeout="timeout">
      Click save icon on to save changes
      <v-btn color="blue" text @click="mobilesnackbar = false">Close</v-btn>
    </v-snackbar>

    <TermsModal />
  </div>
</template>

<script>
// import ConfirmationDialog from "~/components/Dialog";
import moment from "moment";
import AddNewHabitButton from "~/components/devices/sm-down/AddNewHabitButton";
import TermsModal from "~/components/devices/sm-down/TermsModal";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "MobileView",
  components: {
    // ConfirmationDialog,
    AddNewHabitButton,
    TermsModal
  },
  created() {},
  data: () => ({
    today: moment(),
    mobilesnackbar: false,
    timeout: 1500
  }),
  computed: {
    ...mapGetters(["theme"]),
    habits: {
      get() {
        return this.$store.state.habits;
      },
      set(value) {
        const data = {
          zone: "habits",
          habit: value
        };
        this.$store.dispatch("moveHabit", data);
        // this.snackbar = true;
      }
    },
    morningHabits: {
      get() {
        return this.$store.state.morningHabits;
      },
      set(value) {
        const data = {
          zone: "morningHabits",
          habit: value
        };
        this.$store.dispatch("moveHabit", data);
        // this.snackbar = true;
      }
    },
    afternoonHabits: {
      get() {
        return this.$store.state.afternoonHabits;
      },
      set(value) {
        const data = {
          zone: "afternoonHabits",
          habit: value
        };
        this.$store.dispatch("moveHabit", data);
        // this.snackbar = true;
      }
    },
    eveningHabits: {
      get() {
        return this.$store.state.eveningHabits;
      },
      set(value) {
        const data = {
          zone: "eveningHabits",
          habit: value
        };
        this.$store.dispatch("moveHabit", data);
        // this.snackbar = true;
      }
    }
  },
  methods: {
    ...mapActions(['saveWorkspace']),
    completeTodo(habit) {
      this.$store.dispatch("completeTodo", habit).then(() => {
        this.$store.dispatch("saveWorkspace");
      });
      // this.snackbar = true;
    },
    skipTodo(habit) {
      this.$store.dispatch("skipTodo", habit).then(() => {
        this.$store.dispatch("saveWorkspace");
      });
      // this.snackbar = true;
    },
    skipTaskClass(habit) {
      var todaysSkippedState = false;
      let currentSelectedDate = moment(this.$store.state.selectedDate);
      habit.scores.map(score => {
        habit.scores.map(score => {
          if (
            moment(score.dated).isSame(this.$store.state.selectedDate, "day")
          ) {
            todaysSkippedState = score.skipped;
          }
        });
      });
      return todaysSkippedState ? "skipped" : "";
    },
    computedDays(item) {
      return moment(item.endsOn).diff(item.startsFrom, "days") + " days";
    },
    computedCardClass(habit) {
      let status = "card-border-color card-border-color-" + habit.category;
      let cardState = "hidden";
      let isSkipped = false;
      let isCompleted = false;
      let currentSelectedDate = moment(this.$store.state.selectedDate);

      // If it is same or before expiry date
      if (moment(currentSelectedDate).isSameOrBefore(habit.endsOn, "day")) {
        // If it is today
        cardState = this.today.isSame(currentSelectedDate, "day")
          ? "visible"
          : "hidden";
      }
      habit.scores.map(score => {
        habit.scores.map(score => {
          if (
            moment(score.dated).isSame(this.$store.state.selectedDate, "day")
          ) {
            isCompleted = score.completed;
            isSkipped = score.skipped;
          }
        });
      });

      if (isCompleted) {
        cardState = "hidden";
      } else if (isSkipped) {
        //cardState = "crumble";
        cardState = "d-none";
      }

      return status + " " + cardState;
    }
  }
};
</script>

<style>
/* .container{
  padding: 2px;
} */

.v-list-item {
  padding: 0 6px;
}

.v-list-item__title {
  align-self: center;
  font-size: 0.9rem;
}

.v-list-item__subtitle {
  font-size: 0.7rem;
}

.v-list-item__subtitle {
  font-size: 0.7rem;
}

.mobile-dotted-margin {
  min-height: 25vh;
}
</style>