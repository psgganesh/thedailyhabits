import moment from 'moment'
import { newHabitCreationTemplate } from '~/utils/constants'

var STORAGE_FILE = 'atomicHabitsDataTemp.json'
const arrSum = arr => arr.reduce((a,b) => a + b, 0)

export const state = () => {
  return  {
    atomicData: [],
    preferences: [],
    selectedDate: null,
    userSession: null,
    oldListItem: null,
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
    var scores = []
    today = { taskCompletedTimes: 0, taskCompletedDays: 0, taskSkippedTimes: 0, taskSkippedDays: 0 }
    habit.audit.createdOn = today
    habit.audit.lastUpdatedOn = today
    habit.audit.expiryDate = expiryDate.format('YYYYMMDD')
    habit.audit.scores.push(today)
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
  LOAD_WORKSPACE(state, blockstackData) {
    let woskspaceData = JSON.parse(blockstackData)
    woskspaceData.map((atom) => {
      if(
        moment(state.selectedDate).isSameOrAfter(atom.audit.createdOn) && 
        moment(state.selectedDate).isBefore(atom.audit.expiryDate)
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
    state.userSession.putFile(STORAGE_FILE, JSON.stringify(state.atomicHabitsData))
  },
  SAVE_WORKSPACE_AND_SIGNOUT(state) {
    state.atomicHabitsData = [
      ...state.habits,
      ...state.morningHabits,
      ...state.afternoonHabits,
      ...state.eveningHabits
    ]
    state.userSession.putFile(STORAGE_FILE, JSON.stringify(state.atomicHabitsData))
    .finally(() => {
      state.userSession.signUserOut(window.location.href);
    })
  },

  // UPDATE LIST
  SET_HABITS_LIST(state, habit) {
    state.habits = habit
  },

  // UPDATE LIST PER ZONE
  UPDATE_HABIT_LIST(state, data) {
    let fromListName = 'habits'
    let fromHabitId = null
    let zone = data.zone
    data.habit.map((obj) => {
      fromHabitId = obj.id
      fromListName = obj.parent
      obj.parent = zone
    })
    state.oldListItem = data.habit
    state[zone] = data.habit
  },

  REMOVE_FROM_OLD_LIST(state, data) {
    // state[state.oldListItem.zone].filter(item => item.id === state.oldListItem.id)
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
              if (obj.audit.taskCompletedTimes == obj.metric.minTimesToRepeat) {
                obj.goal.status = 'completed'
                obj.audit.taskCompletedDays++
              }
              if (obj.audit.taskCompletedTimes > obj.metric.minTimesToRepeat) {
                obj.goal.status = 'completed'
              }
              break;
            case 'exactly':
              if (obj.audit.taskCompletedTimes === obj.metric.minTimesToRepeat) {
                obj.goal.status = 'completed'
                obj.audit.taskCompletedDays++
              }
              break;
            default:
              if (obj.audit.taskCompletedTimes === obj.metric.minTimesToRepeat) {
                obj.goal.status = 'completed'
                obj.audit.taskCompletedDays++
              }
          }
        } else {
          obj.goal.status = 'completed'
          obj.audit.taskCompletedDays++
        }
        obj.audit.lastUpdatedOn = new Date()
      }
    })
  },
  SKIP_TODO(state, habit) {
    let id = habit.id
    let zone = habit.parent
    state[zone].map((obj) => { 
      if (obj.id === id) {
        obj.audit.taskSkippedTimes++
        if(obj.metric.selectedTrackingOption === 'numeric') {
          switch(obj.metric.timesComparison) {
            case 'minimum':
              if (obj.audit.taskSkippedTimes == obj.metric.minTimesToRepeat) {
                obj.goal.status = 'skipped'
                obj.audit.taskSkippedDays++
              }
              if (obj.audit.taskSkippedTimes > obj.metric.minTimesToRepeat) {
                obj.goal.status = 'skipped'
              }
              break;
            case 'exactly':
              if (obj.audit.taskSkippedTimes === obj.metric.minTimesToRepeat) {
                obj.goal.status = 'skipped'
                obj.audit.taskSkippedDays++
              }
              break;
            default:
              if (obj.audit.taskSkippedTimes === obj.metric.minTimesToRepeat) {
                obj.goal.status = 'skipped'
                obj.audit.taskSkippedDays++
              }
          }
        } else {
          obj.goal.status = 'skipped'
          obj.audit.taskSkippedDays++
        }
        obj.audit.lastUpdatedOn = new Date()
      }
    })
  }

}

export const actions = {

  createHabit({commit}, habit) {
    commit('CREATE_NEW_HABIT', habit)
    commit('SAVE_WORKSPACE')
  },

  moveHabit({commit}, data) {
    commit('UPDATE_HABIT_LIST', data)
    commit('REMOVE_FROM_OLD_LIST', data)
    commit('SAVE_WORKSPACE')
  },

  completeTodo({commit}, todo) {
    commit('COMPLETE_TODO', todo)
    commit('SAVE_WORKSPACE')
  },

  skipTodo({commit}, todo) {
    commit('SKIP_TODO', todo)
    commit('SAVE_WORKSPACE')
  },

  async fetchWorkspaceRecords({commit, state}) {
    commit('REFRESH_WORKSPACE')
    try {
      
      await state.userSession.getFile(STORAGE_FILE).then((habitsData) => {
        if(habitsData.length > 0) {

          commit('LOAD_WORKSPACE', habitsData)
        }
      });
      
    } catch (e) {
      console.log(e)
    }
  },

  resetData({commit}) {
    commit('REFRESH_WORKSPACE')
    commit('SAVE_WORKSPACE')
  },

  saveWorkspace({commit}) {
    commit('SAVE_WORKSPACE')
  },

  saveWorkspaceAndSignout({commit}) {
    commit('SAVE_WORKSPACE_AND_SIGNOUT')
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
    var completedHabitsCount = []
    state.morningHabits.map((obj) => {
      if( obj.goal.status === 'completed' )
        completedHabitsCount.push(1)
    })
    return arrSum(completedHabitsCount)
  },
  afternoonHabitsCount(state) {
    var completedHabitsCount = []
    state.afternoonHabits.map((obj) => {
      if( obj.goal.status === 'completed' )
        completedHabitsCount.push(1)
    })
    return arrSum(completedHabitsCount)
  },
  eveningHabitsCount(state) {
    var completedHabitsCount = []
    state.eveningHabits.map((obj) => {
      if( obj.goal.status === "completed" )
        completedHabitsCount.push(1)
    })
    return arrSum(completedHabitsCount)
  },
  pendingTasksCount(state) {
    return (state.habits.length > 0) ? state.habits.length : 0
  },
  inProgressTasksCount(state) {
    var totalCount = []
    state.atomicData.map((obj) => {
      if( (obj.goal.status !== "pending") && (obj.goal.status !== "completed") )
        totalCount.push(1)
    })
    return (totalCount.length > 0) ? arrSum(totalCount) : 0
  },
  completedTasksCount(state) {
    var totalCount = []
    state.atomicData.map((obj) => {
      if( obj.goal.status === "completed" )
        totalCount.push(1)
    })
    return (totalCount.length > 0) ? arrSum(totalCount) : 0
  },
  fetchSelectedDate(state) {
    return state.selectedDate
  }
}