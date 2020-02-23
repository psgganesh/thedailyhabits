<template>
  <div id="board" class="wrapper">
    <v-col class="column" id="habits" cols="3">
      <!-- HABITS DRAGGABLE LIST STARTS HERE -->
      <draggable
        v-model="habits"
        v-bind="getOptions()"
        ghostClass="ghost"
        animation="150"
        easing="cubic-bezier(1, 0, 0, 1)"
        class="v-list v-sheet v-sheet--tile theme--light v-list--subheader v-list--two-line px-1"
      >
        <template v-for="(item, index) in habits">
          <v-list-item :key="'desktop__'+item.id+'_'+index" :class="computedCardClass(item)">
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
          <!-- <v-divider v-if="index + 1 < habits.length" :key="'desktop__divider__'+item.id"></v-divider> -->
        </template>
      </draggable>
      <!-- HABITS DRAGGABLE LIST ENDS HERE -->
    </v-col>

    <v-col class="column" id="morning" cols="3">
      <!-- MORNING HABITS DRAGGABLE LIST STARTS HERE -->
      <draggable
        v-model="morningHabits"
        v-bind="getOptions()"
        ghostClass="ghost"
        animation="150"
        easing="cubic-bezier(1, 0, 0, 1)"
        class="v-list v-sheet v-sheet--tile theme--light v-list--subheader v-list--three-line px-1"
      >
        <template v-for="(item, index) in morningHabits">
          <v-card :key="index" :class="computedCardClass(item)">
            <v-card-text class="white black--text">
              <v-container fluid>
                <v-row>
                  <v-col cols="10">
                    <h3 class="subtitle-1">{{ item.activity }}</h3>
                    <p class="body-1">{{ item.title }}</p>
                  </v-col>
                  <v-col cols="2" class="text-right">
                    <p class="grey--text">{{ computedDays(item) }}</p>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions :class="cardActionTaskClass">
              <v-btn small color="green darken-1 white--text ga-nunito mr-2" @click="completeTodo(item)" >DONE</v-btn>
              <skip-dialog :item="item"></skip-dialog>
              <v-spacer></v-spacer>
              <v-btn icon>
                <edit-dialog :item="item"></edit-dialog>
              </v-btn>
              <v-btn icon>
                <delete-dialog :item="item"></delete-dialog>
              </v-btn>
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
        v-bind="getOptions()"
        ghostClass="ghost"
        animation="150"
        easing="cubic-bezier(1, 0, 0, 1)"
        class="v-list v-sheet v-sheet--tile theme--light v-list--subheader v-list--three-line px-1"
      >
        <template v-for="(item, index) in afternoonHabits">
          <v-card :key="index" :class="computedCardClass(item)">
            <v-card-text class="white black--text">
              <v-container fluid>
                <v-row>
                  <v-col cols="10">
                    <h3 class="subtitle-1">{{ item.activity }}</h3>
                    <p class="body-1">{{ item.title }}</p>
                  </v-col>
                  <v-col cols="2" class="text-right">
                    <p class="grey--text">{{ computedDays(item) }}</p>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions :class="cardActionTaskClass">
              <v-btn small color="green darken-1 white--text ga-nunito mr-2" @click="completeTodo(item)" >DONE</v-btn>
              <skip-dialog :item="item"></skip-dialog>
              <v-spacer></v-spacer>
              <v-btn icon>
                <edit-dialog :item="item"></edit-dialog>
              </v-btn>
              <v-btn icon>
                <delete-dialog :item="item"></delete-dialog>
              </v-btn>
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
        v-bind="getOptions()"
        ghostClass="ghost"
        animation="150"
        easing="cubic-bezier(1, 0, 0, 1)"
        class="v-list v-sheet v-sheet--tile theme--light v-list--subheader v-list--three-line px-1"
      >
        <template v-for="(item, index) in eveningHabits">
          <v-card :key="index" :class="computedCardClass(item)">
            <v-card-text class="white black--text">
              <v-container fluid>
                <v-row>
                  <v-col cols="10">
                    <h3 class="subtitle-1">{{ item.activity }}</h3>
                    <p class="body-1">{{ item.title }}</p>
                  </v-col>
                  <v-col cols="2" class="text-right">
                    <p class="grey--text">{{ computedDays(item) }}</p>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions :class="cardActionTaskClass">
              <v-btn small color="green darken-1 white--text ga-nunito mr-2" @click="completeTodo(item)" >DONE</v-btn>
              <skip-dialog :item="item"></skip-dialog>
              <v-spacer></v-spacer>
              <v-btn icon>
                <edit-dialog :item="item"></edit-dialog>
              </v-btn>
              <v-btn icon>
                <delete-dialog :item="item"></delete-dialog>
              </v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </draggable>
      <!-- EVENING HABITS DRAGGABLE LIST ENDS HERE -->
    </v-col>

    <v-snackbar v-model="snackbar" :timeout="timeout">
      Click save icon on to save changes
      <v-btn color="blue" text @click="snackbar = false">Close</v-btn>
    </v-snackbar>
  </div>
</template>

<script>
import SkipDialog from "~/components/SkipDialog";
import DeleteDialog from "~/components/DeleteDialog";
import EditDialog from "~/components/EditDialog";
import moment from "moment";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Panels",
  components: {
    SkipDialog,
    DeleteDialog,
    EditDialog
  },
  data: () => ({
    dialog: false,
    today: moment(),
    snackbar: false,
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
    },
    cardActionTaskClass(habit) {
      let currentSelectedDate = moment(this.$store.state.selectedDate);
      return (this.today.isSame(currentSelectedDate, "day")) ? '' : 'd-none';
    }
  },
  methods: {
    ...mapActions(['saveWorkspace']),
    completeTodo(habit) {
      console.log('DESKTOP: ',habit);
      this.$store.dispatch("completeTodo", habit).then(() => {
        this.$store.dispatch("saveWorkspace");
      });
      // // this.snackbar = true;
    },

    skipTodo(habit) {
      this.dialog = false;
      this.$store.dispatch("skipTodo", habit).then(() => {
        this.$store.dispatch("saveWorkspace");
      });
      // // this.snackbar = true;
    },
    getOptions() {
      return { group:'thedailyhabits' };
    },
    skipTaskClass(habit) {
      //var todaysSkippedState = false;
      var todaysSkippedState = true;
      let currentSelectedDate = moment(this.$store.state.selectedDate);
      console.log(habit);
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
      let statusClasses = [
        'my-2',
        'card-border-color',
        'mx-auto'
      ];
      statusClasses.push('card-border-color-' + habit.category);

      let cardStateClasses= [];
      
      let isSkipped = false;
      let isCompleted = false;
      let currentSelectedDate = moment(this.$store.state.selectedDate);

      // If it is same or before expiry date
      cardStateClasses = (this.today.isSame(currentSelectedDate, "day")) ? ['visible', 'no-select'] : ['no-interaction', 'no-select'];
      
      habit.scores.map(score => {
        if((this.today.isSame(score.dated, "day"))) {
          let compiledClass = (score.completed)? "hidden":(score.skipped)? "hidden":"visible";
          cardStateClasses.push(compiledClass);
        }
      });

      let computedCardClass = statusClasses.concat(cardStateClasses);
      
      return computedCardClass.join(' ');
    }
  }
};
</script>

<style>
.container{
  padding: 2px;
}
.v-list-item {
  padding: 0 6px;
}
.theme--light.v-sheet {
  border-color: unset;
}
.v-list-item__title {
  align-self: center;
  font-size: 0.9rem;
}

.v-application--is-ltr .v-list-item__icon:first-child {
  margin-right: 10px;
}
.card-border-color {
  border-left: 10px solid;
}
.card-border-color:hover {
  cursor: -webkit-grab;
}
.sortable-chosen,
.sortable-chosen.ghost {
  cursor: -webkit-grabbing !important;
}
.card-border-color-health_nutrition {
  background: rgba(255, 255, 255, 0.83922);
  border-color: #1b5e20 !important;
}
.card-border-color-sports_fitness {
  background: rgba(255, 255, 255, 0.83922);
  border-color: #bf360c !important;
}
.card-border-color-quit_a_bad_habit {
  background: rgba(255, 255, 255, 0.83922);
  border-color: #263238 !important;
}
.card-border-color-skills {
  background: rgba(255, 255, 255, 0.83922);
  border-color: #004d40 !important;
}
.card-border-color-work_study {
  background: rgba(255, 255, 255, 0.83922);
  border-color: #039be5 !important;
}
.card-border-color-household {
  background: rgba(255, 255, 255, 0.83922);
  border-color: #f50057 !important;
}
.card-border-color-me_time {
  background: rgba(255, 255, 255, 0.83922);
  border-color: #37474f !important;
}
.card-border-color-general {
  background: rgba(255, 255, 255, 0.83922);
  border-color: #1e88e5 !important;
}
</style>
