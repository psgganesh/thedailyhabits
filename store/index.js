import moment from 'moment';
import { categories } from '~/utils/schema';
import { categoriesData, activityData, questionsData } from '~/utils/templateData';

export const state = () => ({
  drawer: null,
  selectedDate: null,
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
  habitsList: []
})

export const mutations = {
  SET_DRAWER_STATE(state, payload) {
    state.drawer = payload
  },
  SET_THEME_COLOR(state, theme) {
    state.theme = theme
  },
  CREATE_NEW_HABIT(state, payload) {
    state.habitsList.push(payload);
  }
}

export const actions = {

  createHabit({ commit }, params) {
    try {

      console.log(params);

      commit('CREATE_NEW_HABIT', params);

    } catch (e) {
      console.log("Could not create new habit");
    }
  }

}

export const getters = {
  theme: state => state.theme,
  habitsList: state => state.habitsList,
  colorScheme: state => (state.theme.dark) ? "white--text" : "black--text",
  selectedDate: state => (state.selectedDate == null) ? moment().format("dddd, MMMM Do YYYY") : state.selectedDate,
  categoriesData: state => state.template.categories,
  activitiesData: state => state.template.activities,
  questionsData: state => state.template.questions
}