import moment from 'moment';
import { categories } from '~/utils/schema';
import { categoriesData, activityData, questionsData } from '~/utils/templateData';
import { strictEqual } from 'assert';

export const state = () => ({
  atomicHabitsData: [],
  drawer: null,
  selectedDate: moment(),
  theme: {
    dark: true,
    light: false
  },
  categories: categories(),
  template: {
    categories: categoriesData(),
    activities: activityData(),
    questions: questionsData()
  },
  habits: [],
  morningHabits: [],
  afternoonHabits: [],
  eveningHabits: []
})

export const mutations = {
  LOAD_WORKSPACE(state, blockstackData) {
    // let workspaceData = JSON.parse(blockstackData)

    // // SETTING USER DATA
    // state.userData = workspaceData.userData

    // // SETTING PREFERENCES DATA
    // state.preferences = workspaceData.preferences

    // // SETTING HABITS DATA
    // let habitsData = workspaceData.habitsData
    // habitsData.map((atom) => {
    state.atomicHabitsData.map((atom) => {
      if (
        moment(state.selectedDate).isSameOrAfter(atom.createdOn, 'day') &&
        moment(state.selectedDate).isBefore(atom.endsOn, 'day')
      ) {
        state[atom.parent].push(atom)
      }
    })
  },
  SAVE_WORKSPACE(state) {
    state.atomicHabitsData = [
      ...state.habits,
      ...state.morningHabits,
      ...state.afternoonHabits,
      ...state.eveningHabits
    ]
    // let data = {
    //   userData: state.userData,
    //   preferences: state.preferences,
    //   habitsData: state.atomicHabitsData
    // }
    // state.userSession.putFile(STORAGE_FILE, JSON.stringify(data))
  },
  SET_DRAWER_STATE(state, payload) {
    state.drawer = payload
  },
  SET_THEME_COLOR(state, theme) {
    state.theme = theme
  },
  CREATE_NEW_HABIT(state, payload) {
    state.habits.push(payload);
  },
  UPDATE_HABIT_LIST(state, data) {
    let zone = data.zone
    data.habit.map((obj) => { obj.parent = zone; obj.lastUpdatedOn = moment() })
    state[zone] = data.habit
  },
  COMPLETE_TODO(state, habit) {
    let id = habit.id
    let zone = habit.parent
    state[zone].map((obj) => {
      // FIND AS PER THE OBJECT ID
      if (obj.id === id) {
        // TRACK TO TODAY'S DATED SCORE
        obj.scores.map((score) => {
          if (moment(score.dated).isSame(state.selectedDate, 'day')) {
            score.completed = true;
          }
        });
        obj.lastUpdatedOn = moment();
      }
    });
  },
  SKIP_TODO(state, habit) {
    let id = habit.id
    let zone = habit.parent
    state[zone].map((obj) => {
      // FIND AS PER THE OBJECT ID
      if (obj.id === id) {
        // TRACK TO TODAY'S DATED SCORE
        obj.scores.map((score) => {
          if (moment(score.dated).isSame(state.selectedDate, 'day')) {
            score.skipped = true;
            obj.lastUpdatedOn = moment()
          }
        });
      }
    });
  },
}

export const actions = {

  createHabit({ commit }, params) {
    try {
      commit('CREATE_NEW_HABIT', params);
      commit('SAVE_WORKSPACE');
    } catch (e) {
      console.log("Could not create new habit");
    }
  },

  moveHabit({ commit }, data) {
    commit('UPDATE_HABIT_LIST', data);
    commit('SAVE_WORKSPACE');
  },

  completeTodo({ commit }, habit) {
    commit('COMPLETE_TODO', habit);
    commit('SAVE_WORKSPACE');
  },

  skipTodo({ commit }, habit) {
    commit('SKIP_TODO', habit);
    commit('SAVE_WORKSPACE');
  },

}

export const getters = {
  theme: state => state.theme,
  habitsList: state => state.habitsList,
  morningHabitsList: state => state.morningHabitsList,
  colorScheme: state => (state.theme.dark) ? "white--text" : "black--text",
  categoriesData: state => state.template.categories,
  activitiesData: state => state.template.activities,
  questionsData: state => state.template.questions,
  currentSelectedDate: state => state.selectedDate.format("dddd, MMMM Do YYYY")
}