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
            <!-- <v-img
              src="https://images.unsplash.com/photo-1542276867-c7f5032e1835?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3338&q=80"
              height="100px"
            >-->
            <v-card-title class="fill-height align-end black--text white" v-text="item.activity"></v-card-title>
            <!-- </v-img> -->
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
          <v-card class="mx-auto ma-3" :key="index">
            <!-- <v-img
              src="https://images.unsplash.com/photo-1542276867-c7f5032e1835?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3338&q=80"
              height="100px"
            >-->
            <v-card-title class="fill-height align-end black--text white" v-text="item.activity"></v-card-title>
            <!-- </v-img> -->
            <v-list-item :key="index">
              <v-list-item-content>
                <v-list-item-title class="black--text">{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <v-btn color="green accent-4 white--text" @click="completeTodo(item)">DONE</v-btn>
              <v-btn text outlined @click="skipTodo(item)">SKIP</v-btn>
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
          <v-card class="mx-auto ma-3" :key="index">
            <!-- <v-img
              src="https://images.unsplash.com/photo-1542276867-c7f5032e1835?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3338&q=80"
              height="100px"
            >-->
            <v-card-title class="fill-height align-end black--text white" v-text="item.activity"></v-card-title>
            <!-- </v-img> -->
            <v-list-item :key="index">
              <v-list-item-content>
                <v-list-item-title class="black--text">{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <v-btn color="green accent-4 white--text" @click="completeTodo(item)">DONE</v-btn>
              <v-btn text outlined @click="skipTodo(item)">SKIP</v-btn>
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
          <v-card class="mx-auto ma-3" :key="index">
            <!-- <v-img
              src="https://images.unsplash.com/photo-1542276867-c7f5032e1835?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3338&q=80"
              height="100px"
            >-->
            <v-card-title class="fill-height align-end black--text white" v-text="item.activity"></v-card-title>
            <!-- </v-img> -->
            <v-list-item :key="index">
              <v-list-item-content>
                <v-list-item-title class="black--text">{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <v-btn color="green accent-4 white--text" @click="completeTodo(item)">DONE</v-btn>
              <v-btn text outlined @click="skipTodo(item)">SKIP</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </draggable>
      <!-- EVENING HABITS DRAGGABLE LIST ENDS HERE -->
    </v-col>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Panels",
  data: () => ({}),
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
    }
  }
};
</script>

<style>
.v-text-field input {
  font-family: "Nunito", sans-serif;
}
.wrapper {
  display: flex;
  height: 75vh;
}
#board > .column {
  display: flex;
  flex-direction: column;
  padding-left: 0px;
  padding-bottom: 0px;
  padding-right: 0px;
  padding-top: 0px;
  border-right: 1px solid #0000001f;
  border-top: 1px solid #0000001f;
}
#board > .column > .v-toolbar {
  flex: none;
}
#board > .column > .v-list {
  overflow-y: scroll;
  flex: 1;
}
.theme--light.v-list,
.theme--light.v-sheet {
  background: #ffffff57;
}
#board > .column > .v-list .v-list-item.theme--light {
  background: #ffffffd6;
  border-bottom: 1px solid #0000001f;
}

#board .v-card__actions {
  background: #ffffffd6;
}

.v-list-item.v-list-item--link.theme--light {
  background: #ffffffd6;
}
.v-list::-webkit-scrollbar {
  width: 0.1em;
  height: 0.5em;
}
.v-list::-webkit-scrollbar-button {
  background: #cccccc;
}
.v-list::-webkit-scrollbar-thumb {
  background: #dedede;
}
​.v-list::-webkit-scrollbar-track-piece {
  background: #ffffff;
}

.v-list-item__title,
.v-list-item__subtitle {
  white-space: inherit;
}
</style>