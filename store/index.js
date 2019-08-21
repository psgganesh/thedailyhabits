
export const state = () => {
  return  {
    loadingStatus: 'idle',
    userSession: null,
    newHabitTemplate: {
      goal: {
        category: null,
      },
      metric: {
        actionStep: null,
        selectedTrackingOption: 1,
        timesComparison: 1,
        timesValue: 3,
        timesUnit: 1,
        minDaysToRepeat: 66,
      }
    }
  }
}

export const mutations = {
  SET_USER (state, userSession) {
    state.userSession = userSession || null
  },
  SET_LOADING_STATUS(state, status) {
    state.loadingStatus = status
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
  SET_NEW_HABIT_METRIC_TIMES_VALUE(state, newHabitMetricTimesValue) {
    state.newHabitTemplate.metric.timesValue = newHabitMetricTimesValue
  },
  SET_NEW_HABIT_METRIC_TIMES_UNIT(state, newHabitMetricTimesUnit) {
    state.newHabitTemplate.metric.timesUnit = newHabitMetricTimesUnit
  },
  SET_NEW_HABIT_METRIC_MIN_DAYS_TO_REPEAT(state, newHabitMetricMinDaysToRepeat) {
    state.newHabitTemplate.metric.minDaysToRepeat = newHabitMetricMinDaysToRepeat
  }
  
}

export const actions = {
  createNewHabitTemplate(context) {
    context.commit('SET_LOADING_STATUS', 'loading')
    context.commit('SET_LOADING_STATUS', 'idle')
    context.commit('SET_HABITS', newHabitTemplate)
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