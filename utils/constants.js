import moment from 'moment'

export const habitImages = [
  { id: 1, title: 'Health', description: 'Workout / get in shape..', avatar: '/images/categories/heart-health.png' },
  { id: 2, title: 'Sports', description: 'Master swimming, chess..', avatar: '/images/categories/beach-soccer.png' },
  { id: 3, title: 'Nutrition', description: 'Change eating habits..', avatar: '/images/categories/carrot.png' },
  { id: 4, title: 'Quit a bad habit', description: 'Stop smoking, drinking..', avatar: '/images/categories/no-drugs.png' },
  { id: 5, title: 'Study', description: 'Complete a book, novel..', avatar: '/images/categories/courses.png' },
  { id: 6, title: 'Work', description: 'Pick-up / learn a new skill..', avatar: '/images/categories/toolbox.png' },
  { id: 7, title: 'Entertainment', description: 'Learn to dance, act / any art form..', avatar: '/images/categories/tango.png' },
  { id: 8, title: 'Me time', description: 'Read, meditate, take a time-out..', avatar: '/images/categories/ellipsis.png' }
];

export function newHabitCreationTemplate() {
  return {
    id: null,
    parent: 'habits',
    goal: {
      category: null
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
      createdOn: null,
      lastUpdatedOn: null,
      expiryDate: null,
      scores: [],
      taskSkippedDays: 0,
      taskCompletedDays: 0    
    }
  }
}

export function newScoreTemplate() {
  return ([{
    dated: moment().format('YYYYMMDD'),
    taskCompletedTimes: 0,
    taskSkippedTimes: 0,
    status: 'new'
  }])
}