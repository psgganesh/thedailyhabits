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
    dated: moment().format("dddd, MMMM Do YYYY"),
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
      color: "yellow accent-4",
      count: 0
    },
    {
      icon: "mdi-heart-pulse",
      text: "Health",
      color: "red accent-4",
      count: 0
    },
    {
      icon: "mdi-basketball",
      text: "Sports",
      color: "purple darken-4",
      count: 0
    },
    {
      icon: "mdi-food-fork-drink",
      text: "Nutrition",
      color: "purple accent-4",
      count: 0
    },
    {
      icon: "mdi-timer",
      text: "Quit a bad habit",
      color: "deep-purple accent-4",
      count: 0
    },
    {
      icon: "mdi-book",
      text: "Study",
      color: "cyan darken-4",
      count: 0
    },
    {
      icon: "mdi-briefcase",
      text: "Work",
      color: "blue accent-4",
      count: 0
    },
    {
      icon: "mdi-music",
      text: "Entertainment",
      color: "teal darken-4",
      count: 0
    },
    {
      icon: "mdi-octagram",
      text: "General",
      color: "brown darken-4",
      count: 0
    }
  ]
}