
export const state = () => {
  return  {
    userSession: null
  }
}

export const mutations = {
  SET_USER (state, userSession) {
    state.userSession = userSession || null
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