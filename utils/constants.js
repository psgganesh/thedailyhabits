import moment from 'moment'

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
    id: null,
    parent: 'habits',
    goal: {
      category: null,
      status: null,
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
      taskSkippedDays: 0,
      taskCompletedDays: 0,
      createdOn: null,
      lastUpdatedOn: null,
      expiryDate: null
    }
  }
}

export function preDefinedTemplate() {

  var today = moment().format('YYYYMMDD')
  var yesterday = moment().subtract(1, 'days').format('YYYYMMDD')
  var tomorrow = moment().add(1, 'days').format('YYYYMMDD')
  var expiryDate = moment().add(66, 'days')
  
  return [
    {
      id: 1,
      parent: 'morningHabits',
      goal: {
        category: {
          id: 8, 
          title: 'Me time', 
          description: 'Read, meditate, take a time-out..', 
          avatar: '/img/ellipsis.png'
        },
        status: 'pending'
      },
      metric: {
        actionStep: today+'\'s task',
        selectedTrackingOption: 'numeric',
        timesComparison: 'minimum',
        minTimesToRepeat: 3,
        minDaysToRepeat: 66,
        trackingQuestion: 'Did you do the relaxing and kapalabhathi breathing ?'
      },
      audit: {
        taskCompletedTimes: 0,
        taskSkippedTimes: 0,
        taskSkippedDays: 0,
        taskCompletedDays: 0,
        createdOn: today,
        lastUpdatedOn: today,
        expiryDate: expiryDate.format('YYYYMMDD')
      }
    },
    {
      id: 10,
      parent: 'habits',
      goal: {
        category: {
          id: 8, 
          title: 'Me time', 
          description: 'Read, meditate, take a time-out..', 
          avatar: '/img/ellipsis.png'
        },
        status: 'pending'
      },
      metric: {
        actionStep: today+'\'s task',
        selectedTrackingOption: 'numeric',
        timesComparison: 'minimum',
        minTimesToRepeat: 3,
        minDaysToRepeat: 66,
        trackingQuestion: 'Did you walk the cat ?'
      },
      audit: {
        taskCompletedTimes: 0,
        taskSkippedTimes: 0,
        taskSkippedDays: 0,
        taskCompletedDays: 0,
        createdOn: today,
        lastUpdatedOn: today,
        expiryDate: expiryDate.format('YYYYMMDD')
      }
    },
    {
      id: 33,
      parent: 'morningHabits',
      goal: {
        category: {
          id: 8, 
          title: 'Me time', 
          description: 'Read, meditate, take a time-out..', 
          avatar: '/img/ellipsis.png'
        },
        status: 'pending'
      },
      metric: {
        actionStep: yesterday+'\'s task',
        selectedTrackingOption: 'numeric',
        timesComparison: 'minimum',
        minTimesToRepeat: 3,
        minDaysToRepeat: 66,
        trackingQuestion: 'Did you clean the house ?'
      },
      audit: {
        taskCompletedTimes: 0,
        taskSkippedTimes: 0,
        taskSkippedDays: 0,
        taskCompletedDays: 0,
        createdOn: yesterday,
        lastUpdatedOn: yesterday,
        expiryDate: expiryDate.format('YYYYMMDD')
      }
    }
  ]
}