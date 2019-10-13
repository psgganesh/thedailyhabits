import moment from 'moment';

export const STORAGE_FILE = 'atomicHabitsData.json';

export function userPreferences() {
  return {
    theme: {
      dark: true,
      light: false,
      background: null,
    }
  }
}

export function scoreStructure() {
  return ([{
    dated: moment(),
    completed: false, // Boolean
    skipped: false, // Boolean
    additional_data: []
  }])
}

export function taskStructure() {
  return {
    id: null, // uuid to be added
    title: null, // task / habit title,
    parent: null,
    category: null, // ( Optional ) main-category / general
    activity: null, // ( Optional ) tag for activity
    recurring: false, // Boolean,
    recurring_data: null, // Later will add object, which contains info. about when to repeat etc..
    startsFrom: moment(), // moment object when task starts from
    endsOn: null, // moment() last date until when the task is to be repeated
    scores: scoreStructure(),
    createdOn: moment(), // moment object when task was created on
    lastUpdatedOn: null, // moment object when task status was changed / detail was changed
    additional_data: [] // Adding for later use
  }
}

export function categories() {
  return [
    {
      icon: "mdi-infinity",
      text: "All habits",
      color: "white white--text",
      count: 0
    },
    {
      icon: "mdi-heart-pulse",
      text: "Health & Nutrition",
      color: "white white--text",
      count: 0
    },
    {
      icon: "mdi-basketball",
      text: "Sports & Fitness",
      color: "white white--text",
      count: 0
    },
    {
      icon: "mdi-timer",
      text: "Quit a bad habit",
      color: "white white--text",
      count: 0
    },
    {
      icon: "mdi-music",
      text: "Skills",
      color: "white white--text",
      count: 0
    },
    {
      icon: "mdi-briefcase",
      text: "Work & Study",
      color: "white white--text",
      count: 0
    },
    {
      icon: "mdi-home",
      text: "Household",
      color: "white white--text",
      count: 0
    },
    {
      icon: "mdi-circle-expand",
      text: "Me time",
      color: "white white--text",
      count: 0
    },
    {
      icon: "mdi-octagram",
      text: "General",
      color: "white white--text",
      count: 0
    }
  ]
}