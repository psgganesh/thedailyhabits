export function categoriesData() {
  return [
    {
      id: 1,
      icon: "mdi-heart-pulse",
      title: "Health",
      slug: "health",
      iconClass: "red accent-4 white--text"
    },
    {
      id: 2,
      icon: "mdi-basketball",
      title: "Sports",
      slug: "sports",
      iconClass: "purple darken-4 white--text"
    },
    {
      id: 3,
      icon: "mdi-food-fork-drink",
      title: "Nutrition",
      slug: "nutrition",
      iconClass: "purple accent-4 white--text"
    },
    {
      id: 4,
      icon: "mdi-timer",
      title: "Quit a bad habit",
      slug: "quit_a_bad_habit",
      iconClass: "deep-purple accent-4 white--text"
    },
    {
      id: 5,
      icon: "mdi-book",
      title: "Study",
      slug: "study",
      iconClass: "cyan darken-4 white--text"
    },
    {
      id: 6,
      icon: "mdi-briefcase",
      title: "Work",
      slug: "work",
      iconClass: "blue accent-4 white--text"
    },
    {
      id: 7,
      icon: "mdi-music",
      title: "Entertainment",
      slug: "entertainment",
      iconClass: "teal darken-4 white--text"
    },
    {
      id: 8,
      icon: "mdi-circle-expand",
      title: "Me time",
      slug: "me_time",
      iconClass: "pink darken-4 white--text"
    },
    {
      id: 9,
      icon: "mdi-octagram",
      title: "General",
      slug: "general",
      iconClass: "brown darken-4 white--text"
    }
  ]
}

export function activityData() {
  return {
    health: [
      {
        id: "1-1",
        icon: "mdi-checkbox-blank-circle-outline",
        title: "Breakfast",
        slug: "breakfast",
        iconClass: "blue-grey accent-4 white--text"
      },
      {
        id: "1-2",
        icon: "mdi-checkbox-blank-circle-outline",
        title: "Hot & Cold Shower",
        slug: "hot-cold-shower",
        iconClass: "blue-grey accent-4 white--text"
      },
      {
        id: "1-3",
        icon: "mdi-checkbox-blank-circle-outline",
        title: "Sleep Early",
        slug: "sleep-early",
        iconClass: "blue-grey accent-4 white--text"
      },
      {
        id: "1-4",
        icon: "mdi-checkbox-blank-circle-outline",
        title: "Taking Medicines",
        slug: "take-meds",
        iconClass: "blue-grey accent-4 white--text"
      },
      {
        id: "1-5",
        icon: "mdi-checkbox-blank-circle-outline",
        title: "Taking Supplements",
        slug: "take-supplements",
        iconClass: "blue-grey accent-4 white--text"
      },
      {
        id: "1-6",
        icon: "mdi-checkbox-blank-circle-outline",
        title: "Wake Up Early",
        slug: "wake-up-early",
        iconClass: "blue-grey accent-4 white--text"
      },
      {
        id: "1-7",
        icon: "mdi-checkbox-blank-circle-outline",
        title: "Cut Nails",
        slug: "cut-nails",
        iconClass: "blue-grey accent-4 white--text"
      },
      {
        id: "1-8",
        icon: "mdi-checkbox-blank-circle-outline",
        title: "Groom Hair",
        slug: "groom-hair",
        iconClass: "blue-grey accent-4 white--text"
      },
      {
        id: "1-9",
        icon: "mdi-checkbox-blank-circle-outline",
        title: "Groom Beard",
        slug: "groom-beard",
        iconClass: "blue-grey accent-4 white--text"
      }
    ]
  }
}

export function questionsData() {
  return {
    breakfast: [
      {
        id: "1-1-1",
        option:
          "I will be having breakfast on time on all working-days (5 days only)"
      },
      { id: "2-1-1", option: "I will be having breakfast on time everyday" }
    ]
  }
}