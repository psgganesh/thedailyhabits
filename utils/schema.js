import moment from 'moment'

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
    dated: moment().format('YYYYMMDD'),
    completed: false, // Boolean
    additional_data: []
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

export function categories() {
  return [
    {
      icon: "poll",
      text: "Dashboard",
      color: "yellow accent-4"
    },
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
    { icon: "mdi-book", text: "Study", color: "cyan darken-4", count: 2 },
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