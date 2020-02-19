import moment from 'moment';
import { categories } from '~/utils/schema';
import { categoriesData, activityData, questionsData } from '~/utils/templateData';

var STORAGE_FILE = 'atomic-habits-data-dino-build.json'

export const state = () => ({
  atomicHabitsData: [],
  loading: false,
  drawer: true,
  selectedListitem: 0,
  selectedDate: new Date().toISOString().substr(0, 10),
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
  eveningHabits: [],
  userSession: null,
  isSkipped: false,
})

export const mutations = {

  // BLOCKSTACK USER
  SET_USERSESSION(state, userSession) {
    state.userSession = userSession || null
  },

  SET_LOADING_STATE(state, flag) {
    state.loading = flag
  },

  SET_CURRENT_DATE(state, param) {
    state.selectedDate = moment(param)
  },
  SELECT_CATEGORY(state, param) {
    state.selectedListitem = param;
  },
  REFRESH_WORKSPACE(state) {
    state.habits = []
    state.morningHabits = []
    state.afternoonHabits = []
    state.eveningHabits = []
  },
  LOAD_WORKSPACE(state, blockstackData) {
    state.loading = true;
    let workspaceData = JSON.parse(blockstackData);

    // SETTING USER DATA
    state.userData = workspaceData.userData;

    // SETTING PREFERENCES DATA
    state.preferences = workspaceData.preferences;

    // SETTING HABITS DATA
    let habitsData = workspaceData.habitsData;
    state.atomicHabitsData = habitsData;
    habitsData.map((atom) => {
      if (
        moment(state.selectedDate).isSameOrAfter(atom.startsFrom, 'day') &&
        moment(state.selectedDate).isBefore(atom.endsOn, 'day')
      ) {

        if (!moment(atom.scores[atom.scores.length - 1].dated).isSame(state.selectedDate, 'day')) {
          // FLAG !! BASED ON NUMBER OF DAYS ADDED FROM THE START DATE OF THIS HABIT
          let scoresAddedCount = atom.scores.length - 1;
          let scoresStartFromDate = moment(atom.startsFrom);
          let diffInDays = moment().diff(scoresStartFromDate, 'days');

          if (diffInDays > scoresAddedCount) {
            // console.log("add a day");
            atom.scores.push({
              dated: state.selectedDate,
              completed: false, // Boolean
              skipped: false, // Boolean
              additional_data: []
            });
          }
        }

        state[atom.parent].push(atom)
      }
    })
    state.loading = false;
  },
  SAVE_WORKSPACE(state) {
    state.loading = true;
    // state.userSession.putFile(STORAGE_FILE, JSON.stringify([]));
    state.atomicHabitsData = [
      ...state.habits,
      ...state.morningHabits,
      ...state.afternoonHabits,
      ...state.eveningHabits
    ]
    let data = {
      userData: state.userData,
      preferences: state.preferences,
      habitsData: state.atomicHabitsData
    }
    state.userSession.putFile(STORAGE_FILE, JSON.stringify(data));
    state.loading = false;
  },
  SAVE_WORKSPACE_AND_SIGNOUT(state) {
    state.atomicHabitsData = [
      ...state.habits,
      ...state.morningHabits,
      ...state.afternoonHabits,
      ...state.eveningHabits
    ]
    let data = {
      userData: state.userData,
      preferences: state.preferences,
      habitsData: state.atomicHabitsData
    }
    state.userSession.putFile(STORAGE_FILE, JSON.stringify(data))
      .finally(() => {
        state.userSession.signUserOut(window.location.href);
      })
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

  SKIP_STATUS(state, value){
    state.isSkipped = value
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
          }
        });
        obj.lastUpdatedOn = moment();
      }
    });
  },

  REMOVE_ALL_OCCURRENCES(state, habit) {
    let id = habit.id
    let zone = habit.parent

    let index = state[zone].map(obj => {
      return obj.id;
    }).indexOf(id);
    
    state[zone].splice(index, 1);

    // state[zone].map((obj) => {
    //   // FIND AS PER THE OBJECT ID
    //   if (obj.id === id) {
    //     // TRACK TO TODAY'S DATED SCORE
    //     obj.scores.map((score) => {
    //       if (moment(score.dated).isSame(state.selectedDate, 'day')) {
    //         score.skipped = true;
    //       }
    //     });
    //     obj.lastUpdatedOn = moment();
    //   }
    // });
  
  },
}

export const actions = {

  resetData({ commit }) {
    commit('REFRESH_WORKSPACE')
    commit('SAVE_WORKSPACE')
  },

  saveWorkspaceAndSignout({ commit }) {
    commit('SAVE_WORKSPACE_AND_SIGNOUT')
  },

  async fetchWorkspaceRecords({ commit, state }) {
    commit('REFRESH_WORKSPACE')
    try {
      commit('SET_LOADING_STATE', true);
      await state.userSession.getFile(STORAGE_FILE).then((responseData) => {
        if (responseData && responseData.length > 0) {
          commit('LOAD_WORKSPACE', responseData);
        }
        commit('SET_LOADING_STATE', false);
      });

    } catch (e) {
      console.log(e)
    }
  },

  createHabit({ commit }, params) {
    try {
      commit('CREATE_NEW_HABIT', params);
      commit('SAVE_WORKSPACE');
    } catch (e) {
      console.log("Could not create new habit");
    }
  },

  saveWorkspace({ commit }) {
    commit('SAVE_WORKSPACE');
  },

  moveHabit({ commit }, data) {
    commit('UPDATE_HABIT_LIST', data);
  },

  completeTodo({ commit }, habit) {
    commit('COMPLETE_TODO', habit);
  },

  skipTodo({ commit }, habit) {
    commit('SKIP_TODO', habit);
  },

  // DISABLED THIS FEATURE FOR NOW
  filterHabitsList({ commit }, category, selectedIndex) {
    commit('SELECT_CATEGORY', selectedIndex);
  },

  //REMOVE TODAY
  

  //REMOVE ALL
  RemoveAllOccurrences({ commit }, habit) {
    commit('REMOVE_ALL_OCCURRENCES', habit);
    commit('SAVE_WORKSPACE');
  },
}

export const getters = {
  isAuthenticated: state => !!state.userSession,
  loggedUser: state => state.userSession,
  theme: state => state.theme,
  habitsList: state => state.habitsList,
  morningHabitsList: state => state.morningHabitsList,
  colorScheme: state => (state.theme.dark) ? "white--text" : "black--text",
  categoriesData: state => state.template.categories,
  activitiesData: state => state.template.activities,
  questionsData: state => state.template.questions,
  pageLoadingState: state => state.loading
}
