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