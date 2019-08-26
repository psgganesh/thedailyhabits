import moment from 'moment'
import { newHabitCreationTemplate, preDefinedTemplate} from '~/utils/constants'

var STORAGE_FILE = 'atomicHabitsDataTemp.json'
const arrSum = arr => arr.reduce((a,b) => a + b, 0)

export const state = () => {
  return  {
    atomicData: [],
    preferences: [],
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
  LOAD_WORKSPACE(state, blockstackData) {
    
    let woskspaceData = JSON.parse(blockstackData)
    console.log(woskspaceData)

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
    // POST IT ON BLOCKSTACK FIRST, THEN BELOW WHICH PUSHES TO UI
    console.group('STARTED SAVING');
      console.log(state.atomicHabitsData);
    console.groupEnd();
    state.userSession.putFile(STORAGE_FILE, JSON.stringify(state.atomicHabitsData))
  },
  SAVE_WORKSPACE_AND_SIGNOUT(state) {
    state.atomicHabitsData = [
      ...state.habits,
      ...state.morningHabits,
      ...state.afternoonHabits,
      ...state.eveningHabits
    ]
    // POST IT ON BLOCKSTACK FIRST, THEN BELOW WHICH PUSHES TO UI
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
    
    let prevParent = null
    let prevHabitId = null

    let zone = data.zone
    data.habit.map((obj) => {
      prevHabitId = obj.id
      prevParent = obj.parent
      obj.parent = zone
    })
    state[zone] = data.habit
    
    if(prevParent !== null) {
      if(prevParent !== zone) {
        var prevList = state[prevParent]
        if(prevList.length > 0) {
          var prevElementIndex = null
          prevList.map(function(obj, index) {
            if( (obj.id === prevHabitId) && (obj.parent === prevParent) )
              prevElementIndex = index
          })
          if(prevElementIndex !== null) {
            prevList.splice(prevElementIndex, 1)
            state[prevParent] = prevList
          }
        }
      }
    }
    
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
      if( obj.goal.status === 'completed' )
        completedHabitsCount.push(1)
    })
    return arrSum(completedHabitsCount)
  },
  fetchSelectedDate(state) {
    return state.selectedDate
  }
}