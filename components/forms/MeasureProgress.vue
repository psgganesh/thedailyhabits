<template>
  <div>
    <h3 class="text-left"> Describe your habit</h3>
    <a-row :gutter="16" class="my-10">
      <a-col :span="24">
        <a-input size="large" placeholder="Example: Walk 10,000 steps" v-model="metric.actionStep" @change="updateActionStep" />
      </a-col>
    </a-row>
    <div v-show="(metric.actionStep !== null)">
      <h3 class="text-left"> How would you measure the progress ?</h3>
        <a-row :gutter="16" class="my-10">
          <a-col :span="12" v-for="trackingOption in trackingOptions" :key="'col_'+trackingOption.id" class="py-5 trackingOption" @click="updateTrackingOption(trackingOption.id)" :class="[(metric.selectedTrackingOption === trackingOption.id) ?  'active' : '' ]">
            <a-card hoverable :key="'card_'+trackingOption.id">
              <a-card-meta :title="trackingOption.title" :description="trackingOption.description" :class="[(metric.selectedTrackingOption === trackingOption.id) ?  'active' : '' ]">
                <a-avatar slot="avatar" :src="trackingOption.avatar" />
              </a-card-meta>
            </a-card>
          </a-col>
        </a-row>
        <div v-show="metric.selectedTrackingOption !== null">
          <a-row :gutter="16" class="my-10" v-show="metric.selectedTrackingOption === 1">
            <a-col :span="24">
              <h3 class="text-left">Mark as successful if number 
                <a-select defaultValue="minimum" style="width: 159px" size="default" v-model="metric.timesComparison" @change="updateTimesComparison">
                  <a-select-option value="minimum">at least</a-select-option>
                  <a-select-option value="exactly">is exactly</a-select-option>
                </a-select>
                <a-input-number :min="1" :max="1000" v-model="metric.minTimesToRepeat" size="default" @change="updateMinTimesToRepeat"/>
                times in a day
              </h3>
            </a-col>
          </a-row>
          <a-row :gutter="16" class="my-10">
            <a-col :span="24">
              <h3 class="text-left"> Action question</h3>
              <a-textarea size="large" :disabled="true" :rows="4" v-model="metric.trackingQuestion" @change="updateTrackingQuestion" style="{ fontSize: '36px'}" />
            </a-col>
          </a-row>
          <a-row :gutter="16" class="my-10">
            <a-col :span="24">
              <h3 class="text-left">
                Repeat this habit for <a-input-number :min="1" :max="365" v-model="metric.minDaysToRepeat" size="default" @change="updateMinDaysToRepeat" /> days, from today
              </h3>
            </a-col>
          </a-row>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MeasureProgress',
  template: 'simple',
  props: {
    metricTemplate: { type: Object, default: null },
  },
  data() {
    return {
      metric: {
        actionStep: this.metricTemplate.actionStep,
        selectedTrackingOption: this.metricTemplate.selectedTrackingOption,
        timesComparison: this.metricTemplate.timesComparison,
        minTimesToRepeat: this.metricTemplate.minTimesToRepeat,
        minDaysToRepeat: this.metricTemplate.minDaysToRepeat,
        trackingQuestion: this.metricTemplate.trackingQuestion
      },
      trackingOptions: [
        { 
          id: 1, 
          type: 'numeric',
          title: 'With a number as a unit', 
          description: 'How many ___ did you do today ?', avatar: 'https://img.icons8.com/color/96/000000/help.png',
          placeholderQuestion: 'Example: How many times did you walk today ?'
        },
        { 
          id: 2, 
          type: 'simple',
          title: 'Simple Yes or No each time', 
          description: 'Did you succeed in ___ today ?', avatar: 'https://img.icons8.com/color/96/000000/true-false.png',
          placeholderQuestion: 'Example: Did you walk 10,000 steps today (YES / NO)?'
        }
      ]
    }
  },
  methods: {
    updateActionStep() {
      this.$store.commit('SET_NEW_HABIT_METRIC_ACTION_STEP', this.metric.actionStep)
    },
    updateTrackingOption(trackingOption) {
      this.metric.selectedTrackingOption = trackingOption
      var selectedTrackingOptionType = this.trackingOptions[trackingOption - 1].type;
      if(this.metric.selectedTrackingOption !== null) {
        if(this.metric.selectedTrackingOption === 2) {
          this.metric.trackingQuestion = 'Did you succeed in doing '+ this.metric.actionStep +' today ?'
          this.$store.commit('SET_NEW_HABIT_METRIC_TRACKING_QUESTION', this.metric.trackingQuestion)
        } else {
          if(this.metric.timesComparison === "minimum") {
            this.metric.trackingQuestion = 'Did you succeed in doing '+ this.metric.actionStep +' at least '+ this.metric.minTimesToRepeat +' today ?'
            this.$store.commit('SET_NEW_HABIT_METRIC_TRACKING_QUESTION', this.metric.trackingQuestion)
          } else {
            this.metric.trackingQuestion = 'Did you do '+ this.metric.actionStep +' '+this.metric.minTimesToRepeat+' times today?'
            this.$store.commit('SET_NEW_HABIT_METRIC_TRACKING_QUESTION', this.metric.trackingQuestion)
          }
        }
      }
      this.$store.commit('SET_NEW_HABIT_METRIC_TRACKING_OPTION', selectedTrackingOptionType)
    },
    updateTimesComparison() {
      this.$store.commit('SET_NEW_HABIT_METRIC_TIMES_COMPARISON', this.metric.timesComparison)
    },
    updateMinTimesToRepeat() {
      this.$store.commit('SET_NEW_HABIT_METRIC_MIN_TIMES_TO_REPEAT', this.metric.minTimesToRepeat)
    },
    updateMinDaysToRepeat() {
      this.$store.commit('SET_NEW_HABIT_METRIC_MIN_DAYS_TO_REPEAT', this.metric.minDaysToRepeat)
    },
    updateTrackingQuestion() {
      this.$store.commit('SET_NEW_HABIT_METRIC_TRACKING_QUESTION', this.metric.trackingQuestion)
    }
  },
  computed: {
  }
}
</script>

<style scoped>
.translucent {
  opacity: 0.5;
}
.opaque {
  opacity: 1;
}
.ant-card-meta-detail {
    overflow: visible;
}
.trackingOption.active .ant-card {
  background: #f0ffff;
  border: 1px solid #a5d5ff;
}
.my-10 {
  margin:10px 0px;
}
textarea {
  resize: none;
  font-size: 17px;
}
</style>