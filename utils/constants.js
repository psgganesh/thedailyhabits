
export const habitImages = [
  { id: 1, title: 'Health', description: 'Workout / get in shape..', avatar: '/img/heart-health.png' },
  { id: 2, title: 'Sports', description: 'Master swimming, chess..', avatar: '/img/beach-soccer.png' },
  { id: 3, title: 'Nutrition', description: 'Change eating habits..', avatar: '/img/carrot.png' },
  { id: 4, title: 'Quit a bad habit', description: 'Stop smoking, drinking..', avatar: '/img/no-drugs.png' },
  { id: 5, title: 'Study', description: 'Complete a book, novel..', avatar: '/img/courses.png' },
  { id: 6, title: 'Work', description: 'Pick-up / learn a new skill..', avatar: '/img/toolbox.png' },
  { id: 7, title: 'Entertainment', description: 'Learn to dance, act / any art form..', avatar: '/img/tango.png' },
  { id: 8, title: 'Me time', description: 'Read, meditate, take a time-out..', avatar: '/img/ellipsis.png' }
];

export function newHabitCreationTemplate() {
  return {
    id: Math.floor(Date.now() / 1000),
    goal: {
      category: null,
      status: null,
      parent: 'habits'
    },
    metric: {
      actionStep: null,
      selectedTrackingOption: null,
      timesComparison: 'minimum',
      minTimesToRepeat: 3,
      minDaysToRepeat: 66,
      trackingQuestion: null
    },
    audit: {
      taskCompletedTimes: 0,
      taskSkippedTimes: 0,
      taskCompletedDays: 0,
      taskSkippedDays: 0,
      createdOn: null,
      lastUpdatedOn: null,
      expiryDate: null
    }
  }
}

export function preDefinedTemplate() {

  var today = new Date()
  var expiryDate = new Date()
  expiryDate.setDate(expiryDate.getDate() + 66)
  
  return [
    {
      id: Math.floor(Date.now() / 1000),
      goal: {
        category: {
          id: 8, 
          title: 'Me time', 
          description: 'Read, meditate, take a time-out..', 
          avatar: '/img/ellipsis.png'
        },
        status: 'pending',
        parent: 'habits'
      },
      metric: {
        actionStep: 'Do breathing today',
        selectedTrackingOption: 1,
        timesComparison: 'minimum',
        minTimesToRepeat: 3,
        minDaysToRepeat: 66,
        trackingQuestion: 'Did you do the relaxing and kapalabhathi breathing ?'
      },
      audit: {
        taskCompletedTimes: 0,
        taskSkippedTimes: 0,
        taskCompletedDays: 0,
        taskSkippedDays: 0,
        createdOn: today.toString(),
        lastUpdatedOn: today.toString(),
        expiryDate: expiryDate.toString()
      }
    }
  ]
}