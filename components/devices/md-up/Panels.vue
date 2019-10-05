<template>
  <div id="board" class="wrapper">
    <v-col class="column" id="habits" cols="3">
      <!-- HABITS DRAGGABLE LIST STARTS HERE -->
      <draggable
        v-model="habits"
        :options="{group:'atomichabits', put: false}"
        ghostClass="ghost"
        animation="150"
        easing="cubic-bezier(1, 0, 0, 1)"
        class="v-list v-sheet v-sheet--tile theme--light v-list--subheader v-list--two-line px-2"
      >
        <template v-for="(item, index) in habits">
          <v-card class="mx-auto ma-3" :key="index">
            <v-card-title
              class="fill-height align-end black--text white ga-nunito"
              v-text="item.activity"
            ></v-card-title>
            <v-list-item :key="index">
              <v-list-item-content>
                <v-list-item-title class="black--text">{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </template>
      </draggable>
      <!-- HABITS DRAGGABLE LIST ENDS HERE -->
    </v-col>

    <v-col class="column" id="morning" cols="3">
      <!-- MORNING HABITS DRAGGABLE LIST STARTS HERE -->
      <draggable
        v-model="morningHabits"
        :options="{group:'atomichabits'}"
        ghostClass="ghost"
        animation="150"
        easing="cubic-bezier(1, 0, 0, 1)"
        class="v-list v-sheet v-sheet--tile theme--light v-list--subheader v-list--two-line px-2"
      >
        <template v-for="(item, index) in morningHabits">
          <v-card class="mx-auto ma-3" :key="index" :class="todoActionButtonsState(item)">
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
      <!-- MORNING HABITS DRAGGABLE LIST ENDS HERE -->
    </v-col>
    <v-col class="column" id="afternoon" cols="3">
      <!-- AFTERNOON HABITS DRAGGABLE LIST STARTS HERE -->
      <draggable
        v-model="afternoonHabits"
        :options="{group:'atomichabits'}"
        ghostClass="ghost"
        animation="150"
        easing="cubic-bezier(1, 0, 0, 1)"
        class="v-list v-sheet v-sheet--tile theme--light v-list--subheader v-list--two-line px-2"
      >
        <template v-for="(item, index) in afternoonHabits">
          <v-card class="mx-auto ma-3" :key="index" :class="todoActionButtonsState(item)">
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
        :options="{group:'atomichabits'}"
        ghostClass="ghost"
        animation="150"
        easing="cubic-bezier(1, 0, 0, 1)"
        class="v-list v-sheet v-sheet--tile theme--light v-list--subheader v-list--two-line px-2"
      >
        <template v-for="(item, index) in eveningHabits">
          <v-card class="mx-auto ma-3" :key="index" :class="todoActionButtonsState(item)">
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
              >
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
    todoActionButtonsState(habit) {
      var status = "hidden";
      habit.scores.map(score => {
        if (moment(score.dated).isSame(this.$store.state.selectedDate, "day")) {
          status = score.completed
            ? "completed"
            : score.skipped
            ? "skipped"
            : "";
        }
      });
      return status === "completed"
        ? "hidden"
        : status === "skipped"
        ? "crumble"
        : status === "hidden"
        ? "hidden"
        : "";
    },
    skipTaskClass(habit) {
      var status = "";
      habit.scores.map(score => {
        if (moment(score.dated).isSame(this.$store.state.selectedDate, "day")) {
          status = score.skipped;
        }
      });
      return status ? "hidden" : "";
    },
    actionClassStatus() {}
  }
};
</script>
