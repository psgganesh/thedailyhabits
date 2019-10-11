
export function categoriesData() {
  return [
    {
      icon: "mdi-heart-pulse",
      title: "Health & Nutrition",
      slug: "health_nutrition",
      iconClass: "red accent-4 white--text",
      count: 7
    },
    {
      icon: "mdi-basketball",
      title: "Sports & Fitness",
      slug: "sports_fitness",
      iconClass: "purple darken-4 white--text",
      count: 9
    },
    {
      icon: "mdi-timer",
      title: "Quit a bad habit",
      slug: "quit_a_bad_habit",
      iconClass: "deep-purple accent-4 white--text",
      count: 4
    },
    {
      icon: "mdi-music",
      title: "Skills",
      slug: "skills",
      iconClass: "cyan darken-4 white--text",
      count: 9
    },
    {
      icon: "mdi-briefcase",
      title: "Work & Study",
      slug: "work_study",
      iconClass: "blue accent-4 white--text",
      count: 6
    },
    {
      icon: "mdi-music",
      title: "Household",
      slug: "household",
      iconClass: "teal darken-4 white--text",
      count: 6
    },
    {
      icon: "mdi-circle-expand",
      title: "Me time",
      slug: "me_time",
      iconClass: "pink darken-4 white--text",
      count: 7
    },
    {
      icon: "mdi-octagram",
      title: "General",
      slug: "general",
      iconClass: "brown darken-4 white--text",
      count: 4
    }
  ]
}

export function activityData() {
  return {
    health_nutrition: [
      {
        icon: "mdi-checkbox-blank-circle-outline",
        title: "Take medicines",
        slug: "take_medicines",
        iconClass: "blue-grey accent-4 white--text"
      },
      {
        icon: "mdi-checkbox-blank-circle-outline",
        title: "Eat breakfast",
        slug: "eat_breakfast",
        iconClass: "blue-grey accent-4 white--text"
      },
      {
        icon: "mdi-checkbox-blank-circle-outline",
        title: "Drink water",
        slug: "drink_water",
        iconClass: "blue-grey accent-4 white--text"
      },
      {
        icon: "mdi-checkbox-blank-circle-outline",
        title: "Follow Diet",
        slug: "follow_diet",
        iconClass: "blue-grey accent-4 white--text"
      },
      {
        icon: "mdi-checkbox-blank-circle-outline",
        title: "Take dietary supplements",
        slug: "take_dietary_supplements",
        iconClass: "blue-grey accent-4 white--text"
      },
      {
        icon: "mdi-checkbox-blank-circle-outline",
        title: "Shower",
        slug: "shower",
        iconClass: "blue-grey accent-4 white--text"
      }
    ],
    sports_fitness: [
      {
        icon: "mdi-checkbox-blank-circle-outline",
        title: "Practice cricket",
        slug: "practice_cricket",
        iconClass: "blue-grey accent-4 white--text"
      },
      {
        icon: "mdi-checkbox-blank-circle-outline",
        title: "Practice Badminton",
        slug: "practice_badminton",
        iconClass: "blue-grey accent-4 white--text"
      },
      {
        icon: "mdi-checkbox-blank-circle-outline",
        title: "Practice Football",
        slug: "practice_football",
        iconClass: "blue-grey accent-4 white--text"
      },
      {
        icon: "mdi-checkbox-blank-circle-outline",
        title: "Practice Volleyball",
        slug: "practice_volleyball",
        iconClass: "blue-grey accent-4 white--text"
      },
      {
        icon: "mdi-checkbox-blank-circle-outline",
        title: "Practice Tennis",
        slug: "practice_tennis",
        iconClass: "blue-grey accent-4 white--text"
      },
      {
        icon: "mdi-checkbox-blank-circle-outline",
        title: "Practice Hockey",
        slug: "practice_hockey",
        iconClass: "blue-grey accent-4 white--text"
      },
      {
        icon: "mdi-checkbox-blank-circle-outline",
        title: "Practice Gym",
        slug: "practice_gym",
        iconClass: "blue-grey accent-4 white--text"
      },
      {
        icon: "mdi-checkbox-blank-circle-outline",
        title: "Practice Exercise",
        slug: "practice_exercise",
        iconClass: "blue-grey accent-4 white--text"
      },
      {
        icon: "mdi-checkbox-blank-circle-outline",
        title: "Practice Yoga",
        slug: "practice_yoga",
        iconClass: "blue-grey accent-4 white--text"
      },
    ],
    quit_a_bad_habit: [
      {
        icon: "mdi-checkbox-blank-circle-outline",
        title: "Smoking",
        slug: "smoking",
        iconClass: "blue-grey accent-4 white--text"
      },
      {
        icon: "mdi-checkbox-blank-circle-outline",
        title: "Alcohol",
        slug: "alcohol",
        iconClass: "blue-grey accent-4 white--text"
      },
      {
        icon: "mdi-checkbox-blank-circle-outline",
        title: "Oversleeping",
        slug: "oversleeping",
        iconClass: "blue-grey accent-4 white--text"
      },
      {
        icon: "mdi-checkbox-blank-circle-outline",
        title: "Others",
        slug: "others",
        iconClass: "blue-grey accent-4 white--text"
      },
    ]
  }
}

export function questionsData() {
  return {
    take_medicines: [
      {
        option: "I will take medicines daily"
      }
    ],
    eat_breakfast: [
      {
        option: "I will have a heavy breakfast daily"
      }
    ],
    drink_water: [
      {
        option: "I will drink 2 litres of water daily"
      },
      {
        option: "I will drink 3 litres of water daily"
      },
      {
        option: "I will drink 5 litres of water daily"
      }
    ],
    follow_diet: [
      {
        option: "I will follow weight loss diet daily"
      },
      {
        option: "I will follow weight gain diet daily"
      }
    ],
    take_dietary_supplements: [
      {
        option: "I will take my prescribed dietary supplements daily"
      }
    ],
    shower: [
      {
        option: "I will take a hot shower daily"
      },
      {
        option: "I will take a cold shower daily"
      },
      {
        option: "I will start with a hot shower and end with a cold shower daily"
      },
      {
        option: "I will start with a cold shower and end with a hot shower daily"
      }
    ],
    practice_cricket: [
      {
        option: "I will practice cricket daily"
      }
    ],
    practice_badminton: [
      {
        option: "I will practice badminton daily"
      }
    ],
    practice_football: [
      {
        option: "I will practice football daily"
      }
    ],
    practice_volleyball: [
      {
        option: "I will practice volleyball daily"
      }
    ],
    practice_tennis: [
      {
        option: "I will practice tennis daily"
      }
    ],
    practice_hockey: [
      {
        option: "I will practice hockey daily"
      }
    ],
    practice_gym: [
      {
        option: "I will practice gym daily"
      }
    ],
    practice_exercise: [
      {
        option: "I will practice exercise daily"
      }
    ],
    practice_yoga: [
      {
        option: "I will practice yoga daily"
      }
    ],
  }
}