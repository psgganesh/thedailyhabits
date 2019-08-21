
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

export default function newHabitCreationTemplate() {
  return {
    goal: {
      category: null,
    },
    metric: {
      actionStep: null,
      selectedTrackingOption: null,
      timesComparison: 1,
      timesValue: 3,
      timesUnit: 1,
      minDaysToRepeat: 66,
      trackingQuestion: null
    }
  }
}