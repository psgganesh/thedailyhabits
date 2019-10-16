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
          class="v-list v-sheet v-sheet--tile theme--light v-list--subheader v-list--two-line"
        >
          <template v-for="(item, index) in habits">
            <v-list-item :key="'mobile__'+item.id" :class="computedCardClass(item)">
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
            <v-divider v-if="index + 1 < habits.length" :key="'mobile__divider__'+item.id"></v-divider>
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
          class="v-list v-sheet v-sheet--tile theme--light v-list--subheader v-list--two-line"
        >
          <template v-for="(item, index) in morningHabits">
            <v-list-item :key="'mobile__'+item.id" :class="computedCardClass(item)">
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
            <v-divider v-if="index + 1 < morningHabits.length" :key="'mobile__divider__'+item.id"></v-divider>
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
          class="v-list v-sheet v-sheet--tile theme--light v-list--subheader v-list--two-line"
        >
          <template v-for="(item, index) in afternoonHabits">
            <v-list-item :key="'mobile__'+item.id" :class="computedCardClass(item)">
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
            <v-divider v-if="index + 1 < afternoonHabits.length" :key="'mobile__divider__'+item.id"></v-divider>
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
          :options="{group:'thedailyhabits'}"
          ghostClass="ghost"
          animation="150"
          easing="cubic-bezier(1, 0, 0, 1)"
          class="v-list v-sheet v-sheet--tile theme--light v-list--subheader v-list--two-line"
        >
          <template v-for="(item, index) in eveningHabits">
            <v-list-item :key="'mobile__'+item.id" :class="computedCardClass(item)">
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
            <v-divider v-if="index + 1 < eveningHabits.length" :key="'mobile__divider__'+item.id"></v-divider>
          </template>
        </draggable>
      </v-col>
    </v-row>

    <AddNewHabitButton />
  </div>
</template>

<script>
import moment from "moment";
import AddNewHabitButton from "~/components/devices/sm-down/AddNewHabitButton";
import { mapGetters } from "vuex";

export default {
  name: "MobileView",
  components: {
    AddNewHabitButton
  },
  data: () => ({
    today: moment()
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
      }
    }
  },
  methods: {
    completeTodo(habit) {
      this.$store.dispatch("completeTodo", habit);
    },
    skipTodo(habit) {
      this.$store.dispatch("skipTodo", habit);
    },
    cardState(habit) {
      let status = "hidden";
      let isSkipped = false;
      let isCompleted = false;
      let currentSelectedDate = moment(this.$store.state.selectedDate);

      // If it is same or before expiry date
      if (moment(currentSelectedDate).isSameOrBefore(habit.endsOn, "day")) {
        // If it is today
        status = this.today.isSame(currentSelectedDate, "day")
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
        return "hidden";
      } else if (isSkipped) {
        return "crumble";
      }

      return status;
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
    computedCardClass(item) {
      return "card-border-color card-border-color-" + item.category;
    }
  }
};
</script>