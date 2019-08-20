
export const state = () => {
  return  {
    loadingStatus: 'idle',
    userSession: null,
    newHabitTemplate: {
      goal: {
        name: null,
        description: null,
        category: null,
      },
      metric: {
        actionStep: null,
        selectedTrackingOption: 1,
        minDaysToRepeat: 66,
        timesValue: 3,
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
  SET_HABIT_TEMPLATE(state, newHabitTemplate) {
    state.newHabitTemplate = newHabitTemplate
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
  },
  newHabitTemplate(state) {
    return state.newHabitTemplate
  }
}