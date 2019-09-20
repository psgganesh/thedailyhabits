import moment from 'moment'

export function scoreStructure() {
  return ([{
    dated: moment().format('YYYYMMDD'),
    completed: false // Boolean
  }])
}

export function taskStructure() {
  return {
    id: null, // uuid to be added
    title: null, // task / habit title
    category: null, // ( Optional ) main-category / general
    activity: null, // ( Optional ) tag for activity
    recurring: false, // Boolean
    startsFrom: moment().format('YYYYMMDD'),
    endsOn: null, // moment().format('YYYYMMDD') last date until when the task is to be repeated
    score: scoreStructure(),
    createdOn: null, // date when task was created on
    lastUpdatedOn: null // latest updated date when task status was changed / detail was changed
  }
}