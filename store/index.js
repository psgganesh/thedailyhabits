import moment from 'moment'
import { newHabitCreationTemplate, preDefinedTemplate} from '~/utils/constants'

export const state = () => {
  return  {
    atomicData: [],
    selectedDate: null,
    userSession: null,
    newHabitTemplate: newHabitCreationTemplate(),
    habits: [],
    morningHabits: [],
    afternoonHabits: [],
    eveningHabits: []
  }
}

export const mutations = {

  // BLOCKSTACK USER
  SET_USER (state, userSession) {
    state.userSession = userSession || null
  },

  // NEW HABIT TEMPLATE
  SET_HABIT_TEMPLATE(state, newHabitTemplate) {
    state.newHabitTemplate = newHabitTemplate
  },

  // GOALFORM STEP
  SET_NEW_HABIT_GOAL_CATEGORY(state, newHabitGoalCategory) {
    state.newHabitTemplate.goal.category = newHabitGoalCategory
  },

  // SELECTED DATE FROM DATEPICKER
  SET_SELECTED_DATE(state, selectedDate) {
    state.selectedDate = selectedDate
  },

  // METRIC STEP
  SET_NEW_HABIT_METRIC_ACTION_STEP(state, newHabitMetricActionStep) {
    state.newHabitTemplate.metric.actionStep = newHabitMetricActionStep
  },
  SET_NEW_HABIT_METRIC_TRACKING_OPTION(state, newHabitMetricTrackingOption) {
    state.newHabitTemplate.metric.selectedTrackingOption = newHabitMetricTrackingOption
  },
  SET_NEW_HABIT_METRIC_TIMES_COMPARISON(state, newHabitMetricTimesComparison) {
    state.newHabitTemplate.metric.timesComparison = newHabitMetricTimesComparison
  },
  SET_NEW_HABIT_METRIC_MIN_TIMES_TO_REPEAT(state, newHabitMetricMinTimesToRepeat) {
    state.newHabitTemplate.metric.minTimesToRepeat = newHabitMetricMinTimesToRepeat
  },
  SET_NEW_HABIT_METRIC_TRACKING_QUESTION(state, newHabitMetricTrackingQuestion) {
    state.newHabitTemplate.metric.trackingQuestion = newHabitMetricTrackingQuestion
  },
  SET_NEW_HABIT_METRIC_MIN_DAYS_TO_REPEAT(state, newHabitMetricMinDaysToRepeat) {
    state.newHabitTemplate.metric.minDaysToRepeat = newHabitMetricMinDaysToRepeat
  },

  // NEW HABIT
  CREATE_NEW_HABIT(state, habit) {
    var today = moment().format('YYYYMMDD')
    var expiryDate = moment().add(habit.metric.minDaysToRepeat, 'days')
    habit.audit.createdOn = today
    habit.audit.lastUpdatedOn = today
    habit.audit.expiryDate = expiryDate.format('YYYYMMDD')
    state.habits.push(habit)
    state.newHabitTemplate = newHabitCreationTemplate()
  },

  // GLOBAL
  REFRESH_WORKSPACE(state) {
    state.habits = []
    state.morningHabits = []
    state.afternoonHabits = []
    state.eveningHabits = []
  },
  LOAD_WORKSPACE(state, selectedDate) {
    // LOAD FROM BLOCKSTACK
    var atomicHabitsData = preDefinedTemplate();
    atomicHabitsData.map((atom) => {
      if(moment(selectedDate).isSameOrAfter(atom.audit.createdOn) && moment(selectedDate).isBefore(atom.audit.expiryDate)) {
        state[atom.parent].push(atom)
      }
    })
  },
  SAVE_WORKSPACE(state, selectedDate) {
    state.atomicHabitsData = [
      ...state.habits,
      ...state.morningHabits,
      ...state.afternoonHabits,
      ...state.eveningHabits
    ]
    // POST IT ON BLOCKSTACK FIRST, THEN BELOW WHICH PUSHES TO UI
    console.log(state.atomicHabitsData);
  },

  // UPDATE LIST
  SET_HABITS_LIST(state, habit) {
    state.habits = habit
  },

  // UPDATE LIST PER ZONE
  UPDATE_HABIT_LIST(state, data) {
    let zone = data.zone
    data.habit.map((obj) => {
      obj.parent = zone
    })
    state[zone] = data.habit
  },

  // TODO ACTIONS
  COMPLETE_TODO(state, habit) {
    let id = habit.id
    let zone = habit.parent
    state[zone].map((obj) => { 
      if (obj.id === id) {
        obj.audit.taskCompletedTimes++
        if(obj.metric.selectedTrackingOption === 'numeric') {
          switch(obj.metric.timesComparison) {
            case 'minimum':
              if (obj.audit.taskCompletedTimes >= obj.metric.minTimesToRepeat) {
                obj.goal.status = 'completed'
              }
              break;
            case 'exactly':
              if (obj.audit.taskCompletedTimes === obj.metric.minTimesToRepeat) {
                obj.goal.status = 'completed'
              }
              break;
            default:
              if (obj.audit.taskCompletedTimes === obj.metric.minTimesToRepeat) {
                obj.goal.status = 'completed'
              }
          }
        } else {
          obj.goal.status = 'completed'
        }
        obj.audit.lastUpdatedOn = new Date()
      }
    })
  },
  SKIP_TODO(state, habit) {
    // state.eveningHabits = habit
    console.log(habit.parent)
    console.log(habit.audit.taskSkippedTimes)
  }

}

export const actions = {

  createHabit({commit}, habit) {
    commit('CREATE_NEW_HABIT', habit)
  },

  moveHabit({commit}, data) {
    commit('UPDATE_HABIT_LIST', data)
  },

  completeTodo({commit}, todo) {
    commit('COMPLETE_TODO', todo)
  },

  skipTodo({commit}, todo) {
    commit('SKIP_TODO', todo)
  },

  fetchWorkspaceRecords({commit}, selectedDate) {
    commit('REFRESH_WORKSPACE')
    commit('LOAD_WORKSPACE', selectedDate)
  },

  saveWorkspace({commit}, selectedDate) {
    commit('SAVE_WORKSPACE', selectedDate)
  },

}

export const getters = {
  isAuthenticated(state) {
    return !!state.userSession
  },
  loggedUser (state) {
    return state.userSession
  },
  morningHabitsCount(state) {
    
  },
  afternoonHabitsCount(state) {

  },
  eveningHabitsCount(state) {

  },
  fetchSelectedDate(state) {
    return state.selectedDate
  }
}