import moment from 'moment';
import { categories } from '~/utils/schema';


export const state = () => ({
  drawer: null,
  selectedDate: null,
  theme: {
    dark: true,
    light: false
  },
  categories: categories()
})

export const mutations = {
  SET_DRAWER_STATE(state, payload) {
    state.drawer = payload
  },
  SET_THEME_COLOR(state, theme) {
    state.theme = theme
  }
}

export const actions = {

}

export const getters = {
  theme: state => state.theme,
  colorScheme: state => (state.theme.dark) ? "white--text" : "black--text",
  selectedDate: state => (state.selectedDate == null) ? moment().format("dddd, MMMM Do YYYY") : state.selectedDate
}