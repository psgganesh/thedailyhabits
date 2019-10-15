<template>
  <div id="board" class="wrapper">
    <v-col class="column" id="habits" cols="3">
      <!-- HABITS DRAGGABLE LIST STARTS HERE -->
      <draggable
        v-model="habits"
        :options="{group:'thedailyhabits', put: false}"
        ghostClass="ghost"
        animation="150"
        easing="cubic-bezier(1, 0, 0, 1)"
        class="v-list v-sheet v-sheet--tile theme--light v-list--subheader v-list--two-line"
      >
        <template v-for="(item, index) in habits">
          <v-list-item :key="'desktop__'+item.id" :class="computedCardClass(item)">
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
          <v-divider v-if="index + 1 < habits.length" :key="'desktop__divider__'+item.id"></v-divider>
        </template>
      </draggable>
      <!-- HABITS DRAGGABLE LIST ENDS HERE -->
    </v-col>

    <v-col class="column" id="morning" cols="3">
      <!-- MORNING HABITS DRAGGABLE LIST STARTS HERE -->
      <draggable
        v-model="morningHabits"
        :options="{group:'thedailyhabits'}"
        ghostClass="ghost"
        animation="150"
        easing="cubic-bezier(1, 0, 0, 1)"
        class="v-list v-sheet v-sheet--tile theme--light v-list--subheader v-list--three-line px-2"
      >
        <template v-for="(item, index) in morningHabits">
          <v-card class="mx-auto ma-3" :key="index" :class="cardState(item)">
            <v-card-title
              class="fill-height align-end black--text white ga-nunito"
              v-text="item.activity"
            ></v-card-title>
            <v-list-item :key="index">
              <v-list-item-content>
                <v-list-item-title class="black--text ga-nunito">{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <v-btn color="green accent-4 white--text ga-nunito" @click="completeTodo(item)">DONE</v-btn>
              <v-btn text outlined :class="skipTaskClass(item)" @click="skipTodo(item)">SKIP</v-btn>
            </v-card-actions>
          </v-card>
        </template>

        <!-- <template v-for="(item, index) in morningHabits">
          <v-list-item :key="index" :class="computedCardClass(item)">
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
          <v-divider v-if="index + 1 < morningHabits.length" :key="index"></v-divider>
        </template>-->
      </draggable>
      <!-- MORNING HABITS DRAGGABLE LIST ENDS HERE -->
    </v-col>

    <v-col class="column" id="afternoon" cols="3">
      <!-- AFTERNOON HABITS DRAGGABLE LIST STARTS HERE -->
      <draggable
        v-model="afternoonHabits"
        :options="{group:'thedailyhabits'}"
        ghostClass="ghost"
        animation="150"
        easing="cubic-bezier(1, 0, 0, 1)"
        class="v-list v-sheet v-sheet--tile theme--light v-list--subheader v-list--two-line px-2"
      >
        <template v-for="(item, index) in afternoonHabits">
          <v-card class="mx-auto ma-3" :key="index" :class="cardState(item)">
            <v-card-title
              class="fill-height align-end black--text white ga-nunito"
              v-text="item.activity"
            ></v-card-title>
            <v-list-item :key="index">
              <v-list-item-content>
                <v-list-item-title class="black--text ga-nunito">{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <v-btn color="green accent-4 white--text ga-nunito" @click="completeTodo(item)">DONE</v-btn>
              <v-btn text outlined :class="skipTaskClass(item)" @click="skipTodo(item)">SKIP</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </draggable>
      <!-- AFTERNOON HABITS DRAGGABLE LIST ENDS HERE -->
    </v-col>

    <v-col class="column" id="evening" cols="3">
      <!-- EVENING HABITS DRAGGABLE LIST STARTS HERE -->
      <draggable
        v-model="eveningHabits"
        :options="{group:'thedailyhabits'}"
        ghostClass="ghost"
        animation="150"
        easing="cubic-bezier(1, 0, 0, 1)"
        class="v-list v-sheet v-sheet--tile theme--light v-list--subheader v-list--two-line px-2"
      >
        <template v-for="(item, index) in eveningHabits">
          <v-card class="mx-auto ma-3" :key="index" :class="cardState(item)">
            <v-card-title
              class="fill-height align-end black--text white ga-nunito"
              v-text="item.activity"
            ></v-card-title>
            <v-list-item :key="index">
              <v-list-item-content>
                <v-list-item-title class="black--text ga-nunito">{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <v-btn color="green accent-4 white--text ga-nunito" @click="completeTodo(item)">DONE</v-btn>
              <v-btn text outlined :class="skipTaskClass(item)" @click="skipTodo(item)">SKIP</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </draggable>
      <!-- EVENING HABITS DRAGGABLE LIST ENDS HERE -->
    </v-col>
  </div>
</template>

<script>
import moment from "moment";
import { mapGetters } from "vuex";
export default {
  name: "Panels",
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

<style>
.v-application--is-ltr .v-list-item__icon:first-child {
  margin-right: 10px;
}
.card-border-color {
  border-left: 10px solid;
}
.card-border-color:hover {
  cursor: grab;
}
.card-border-color-health_nutrition {
  border-color: #1b5e20;
}
.card-border-color-sports_fitness {
  border-color: #bf360c;
}
.card-border-color-quit_a_bad_habit {
  border-color: #263238;
}
.card-border-color-skills {
  border-color: #004d40;
}
.card-border-color-work_study {
  border-color: #039be5;
}
.card-border-color-household {
  border-color: #f50057;
}
.card-border-color-me_time {
  border-color: #37474f;
}
.card-border-color-general {
  border-color: #1e88e5;
}
</style>
