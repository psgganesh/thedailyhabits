import newHabitCreationTemplate from '~/utils/constants';

export const state = () => {
  return  {
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
  SET_NEW_HABIT_METRIC_TRACKING_QUESTION(state, newHabitMetricTrackingQuestion) {
    state.newHabitTemplate.metric.trackingQuestion = newHabitMetricTrackingQuestion
  },
  SET_NEW_HABIT_METRIC_TIMES_UNIT(state, newHabitMetricTimesUnit) {
    state.newHabitTemplate.metric.timesUnit = newHabitMetricTimesUnit
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

  // AS PER TIMEZONE
  SET_MORNING_HABITS_LIST(state, habit) {
    state.morningHabits = habit
  },
  SET_AFTERNOON_HABITS_LIST(state, habit) {
    state.afternoonHabits = habit
  },
  SET_EVENING_HABITS_LIST(state, habit) {
    state.eveningHabits = habit
  }

}

export const actions = {
  createHabit({commit}, habit) {

    // POST IT ON BLOCKSTACK FIRST, THEN BELOW WHICH PUSHES TO UI
    commit('CREATE_NEW_HABIT', habit);
    
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