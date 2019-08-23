import { newHabitCreationTemplate, preDefinedTemplate} from '~/utils/constants';

export const state = () => {
  return  {
    userSession: null,
    newHabitTemplate: newHabitCreationTemplate(),
    habits: preDefinedTemplate(),
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
    state.habits.push(habit)
    state.newHabitTemplate = newHabitCreationTemplate()
  },

  // UPDATE HABITS LIST
  // GLOBAL
  SET_HABITS_LIST(state, habit) {
    state.habits = habit
  },
  UPDATE_HABIT_LIST(state, data) {
    let zone = data.zone
    data.habit.map((obj) => { obj.goal.parent = zone })
    state[zone] = data.habit
  },

  // TODO ACTIONS
  COMPLETE_TODO(state, habit) {
    let id = habit.id
    let zone = habit.goal.parent
    state[zone].map((obj) => { 
      if (obj.id === id) {
        obj.audit.taskCompletedTimes++
        if(obj.metric.selectedTrackingOption === 1) {
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
        obj.audit.lastUpdatedOn = Date()
      }
    })
  },
  SKIP_TODO(state, habit) {
    // state.eveningHabits = habit
    console.log(habit.goal.parent)
    console.log(habit.audit.taskSkippedTimes)
  }

}

export const actions = {

  createHabit({commit}, habit) {
    // POST IT ON BLOCKSTACK FIRST, THEN BELOW WHICH PUSHES TO UI
    habit.map((obj) => { 
      var today = new Date()
      var expiryDate = new Date()
      expiryDate.setDate(expiryDate.getDate() + obj.metric.minDaysToRepeat)
      obj.audit.createdOn = today.toString()
      obj.audit.lastUpdatedOn = today.toString()
      obj.audit.expiryDate = expiryDate.toString()
    })
    commit('CREATE_NEW_HABIT', habit);
  },

  moveHabit({commit}, data) {
    commit('UPDATE_HABIT_LIST', data)
  },

  completeTodo({commit}, todo) {
    commit('COMPLETE_TODO', todo)
  },

  skipTodo({commit}, todo) {
    commit('SKIP_TODO', todo)
  }

}

export const getters = {
  isAuthenticated(state) {
    return !!state.userSession
  },
  loggedUser (state) {
    return state.userSession
  }
}