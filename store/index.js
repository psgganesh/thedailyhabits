import moment from 'moment'
import { newScoreTemplate, newHabitCreationTemplate } from '~/utils/constants'


var STORAGE_FILE = 'atomicHabitsDataTemp.json'
const arrSum = arr => arr.reduce((a,b) => a + b, 0)

export const state = () => {
  return  {
    atomicHabitsData: [],
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
    let today = moment().format('YYYYMMDD')
    let expiryDate = moment().add(habit.metric.minDaysToRepeat, 'days')
    let scores = newScoreTemplate()
    habit.audit.createdOn = today
    habit.audit.lastUpdatedOn = today
    habit.audit.expiryDate = expiryDate.format('YYYYMMDD')
    habit.audit.scores = scores
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
        console.group('LOAD_WORKSPACE')
          console.log(atom)
        console.groupEnd()
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
    let zone = data.zone
    data.habit.map((obj) => { obj.parent = zone })
    state.oldListItem = data.habit
    state[zone] = data.habit
  },

  // TODO ACTIONS
  COMPLETE_TODO(state, habit) {
    let id = habit.id
    let zone = habit.parent
    state[zone].map((obj) => { 

      // FIND AS PER THE OBJECT ID
      if( obj.id === id ) {

        // TRACK TO TODAY'S DATED SCORE
        obj.audit.scores.map((score) => { 
          if(moment(score.dated).isSame(state.selectedDate.format('YYYYMMDD'))) { 
            
            if(obj.metric.selectedTrackingOption === 'numeric') {
              switch(obj.metric.timesComparison) {
                case 'minimum':
                    score.taskCompletedTimes++
                    if (score.taskCompletedTimes < obj.metric.minTimesToRepeat) {
                      score.status = 'completed-partially';
                    } else if (score.taskCompletedTimes === obj.metric.minTimesToRepeat) {
                      obj.audit.taskCompletedDays++
                      score.status = 'completed';
                    }
                  break;
                case 'exactly':
                    score.taskCompletedTimes++
                    if (score.taskCompletedTimes === obj.metric.minTimesToRepeat) {
                      obj.audit.taskCompletedDays++
                      score.status = 'completed';
                    }
                    break;
                default:
                    score.status = 'unknown';
                  break;
              }
            } else {
              score.taskCompletedTimes++
              obj.audit.taskCompletedDays++
              score.status = 'completed';
            }

            obj.audit.lastUpdatedOn = moment().format('YYYYMMDD')

          }
        });

      }
        
    })
  },
  SKIP_TODO(state, habit) {
    let id = habit.id
    let zone = habit.parent
    state[zone].map((obj) => { 

      // FIND AS PER THE OBJECT ID
      if( obj.id === id ) {

        // TRACK TO TODAY'S DATED SCORE
        obj.audit.scores.map((score) => { 
          if(moment(score.dated).isSame(state.selectedDate.format('YYYYMMDD'))) { 
            
            if(obj.metric.selectedTrackingOption === 'numeric') {
              switch(obj.metric.timesComparison) {
                case 'minimum':
                    score.taskSkippedTimes++
                    if (score.taskSkippedTimes < obj.metric.minTimesToRepeat) {
                      score.status = 'skipped-partially';
                    } else if (score.taskSkippedTimes === obj.metric.minTimesToRepeat) {
                      obj.audit.taskSkippedDays++
                      score.status = 'skipped';
                    }
                  break;
                case 'exactly':
                    score.taskSkippedTimes++
                    if (score.taskSkippedTimes === obj.metric.minTimesToRepeat) {
                      obj.audit.taskSkippedDays++
                      score.status = 'skipped';
                    }
                    break;
                default:
                    score.status = 'unknown';
                  break;
              }
            } else {
              score.taskSkippedTimes++
              obj.audit.taskSkippedDays++
              score.status = 'skipped';
            }

            obj.audit.lastUpdatedOn = moment().format('YYYYMMDD')

          }
        });

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
      obj.audit.scores.map((score) => { 
        if(moment(score.dated).isSame(state.selectedDate.format('YYYYMMDD'))) { 
          if( score.status === 'completed' ) {
            completedHabitsCount.push(1)
          }
        }
      });
    })
    return arrSum(completedHabitsCount)
  },
  afternoonHabitsCount(state) {
    var completedHabitsCount = []
    state.afternoonHabits.map((obj) => {
      obj.audit.scores.map((score) => { 
        if(moment(score.dated).isSame(state.selectedDate.format('YYYYMMDD'))) { 
          if( score.status === 'completed' ) {
            completedHabitsCount.push(1)
          }
        }
      });
    })
    return arrSum(completedHabitsCount)
  },
  eveningHabitsCount(state) {
    var completedHabitsCount = []
    state.eveningHabits.map((obj) => {
      obj.audit.scores.map((score) => { 
        if(moment(score.dated).isSame(state.selectedDate.format('YYYYMMDD'))) { 
          if( score.status === 'completed' ) {
            completedHabitsCount.push(1)
          }
        }
      });
    })
    return arrSum(completedHabitsCount)
  },
  pendingTasksCount(state) {
    return (state.habits.length > 0) ? state.habits.length : 0
  },
  inProgressTasksCount(state) {
    var totalCount = []
    if(state.atomicHabitsData.length > 0) {
      state.atomicHabitsData.map((obj) => {
        obj.audit.scores.map((score) => { 
            if(moment(score.dated).isSame(state.selectedDate.format('YYYYMMDD'))) { 
              if( (score.status === 'completed-partially' ) || (score.status === 'skipped-partially') ) {
                totalCount.push(1)
              }
            }
        });
      })    
    }
    return (totalCount.length > 0) ? arrSum(totalCount) : 0
  },
  completedTasksCount(state) {
    var totalCount = []
    if(state.atomicHabitsData.length > 0) {
      state.atomicHabitsData.map((obj) => {
        obj.audit.scores.map((score) => { 
          if(moment(score.dated).isSame(state.selectedDate.format('YYYYMMDD'))) { 
            if(score.status === 'completed' ) {
              totalCount.push(1)
            }
          }
        });
      })
    }
    return (totalCount.length > 0) ? arrSum(totalCount) : 0
  },
  fetchSelectedDate(state) {
    return state.selectedDate
  }
}