import moment from 'moment';
import { categories } from '~/utils/schema';
import { categoriesData, activityData, questionsData } from '~/utils/templateData';

export const state = () => ({
  drawer: null,
  selectedDate: moment().format("dddd, MMMM Do YYYY"),
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
          if (score.dated === state.selectedDate) {
            score.completed = true;
            obj.lastUpdatedOn = moment()
          }
        });
      }
    })
  },
  SKIP_TODO(state, habit) {
    let id = habit.id
    let zone = habit.parent
    state[zone].map((obj) => {

      // FIND AS PER THE OBJECT ID
      if (obj.id === id) {

        // TRACK TO TODAY'S DATED SCORE
        obj.scores.map((score) => {
          if (moment(score.dated).isSame(state.selectedDate.format("dddd, MMMM Do YYYY"))) {
            score.skipped = true;
            obj.lastUpdatedOn = moment()
          }
        });
      }
    })
  },
}

export const actions = {

  createHabit({ commit }, params) {
    try {
      commit('CREATE_NEW_HABIT', params);
    } catch (e) {
      console.log("Could not create new habit");
    }
  },

  moveHabit({ commit }, data) {
    commit('UPDATE_HABIT_LIST', data)
  },

  completeTodo({ commit }, habit) {
    commit('COMPLETE_TODO', habit)
  },

  skipTodo({ commit }, habit) {
    commit('SKIP_TODO', habit)
  },

}

export const getters = {
  theme: state => state.theme,
  habitsList: state => state.habitsList,
  morningHabitsList: state => state.morningHabitsList,
  colorScheme: state => (state.theme.dark) ? "white--text" : "black--text",
  categoriesData: state => state.template.categories,
  activitiesData: state => state.template.activities,
  questionsData: state => state.template.questions
}