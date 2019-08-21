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
  UPDATE_HABITS_LIST(state, habit) {
    // AS PER TIMEZONE
    switch(habit.key) {
      case 'morning':
        state.morningHabits = habit.list
        break;
      case 'afternoon':
        state.afternoonHabits = habit.list
        break;
      case 'evening':
        state.eveningHabits = habit.list
        break;
      default:
        state.habits = habit
    }
  },
  UPDATE_EACH_HABIT_ITEM_POSITION(state, habit) {
    console.group('UPDATE_EACH_HABIT_ITEM_POSITION')
      console.log(habit)
    console.groupEnd
    // AS PER TIMEZONE
    // switch(habit.key) {
    //   case 'morning':
    //     state.morningHabits = habit.list
    //     break;
    //   case 'afternoon':
    //     state.afternoonHabits = habit.list
    //     break;
    //   case 'evening':
    //     state.eveningHabits = habit.list
    //     break;
    //   default:
    //     state.habits = habit
    // }
  }

  // TODO ACTIONS
  // COMPLETE_TODO(state, todo) {
  //   // state.afternoonHabits = todo
  //   console.log('completed -> '+todo)
  // },
  // SKIP_TODO(state, todo) {
  //   // state.eveningHabits = todo
  //   console.log('skipped -> '+todo)
  // }

}

export const actions = {

  createHabit({commit}, habit) {
    // POST IT ON BLOCKSTACK FIRST, THEN BELOW WHICH PUSHES TO UI
    commit('CREATE_NEW_HABIT', habit);
  },

  moveHabit({commit}, habit) {
    commit('UPDATE_HABITS_LIST', habit);
    commit('UPDATE_EACH_HABIT_ITEM_POSITION', habit);
  }

  // completeTodo({commit}, todo) {
  //   commit('COMPLETE_TODO', todo)
  // },
  // skipTodo({commit}, todo) {
  //   commit('SKIP_TODO', todo)
  // }

}

export const getters = {
  isAuthenticated(state) {
    return !!state.userSession
  },
  loggedUser (state) {
    return state.userSession
  }
}