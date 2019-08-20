<template>
  <div>
    <h3 class="text-left"> What is your action plan / step ?</h3>
    <a-row :gutter="16" class="my-10">
      <a-col :span="24">
        <a-input size="large" placeholder="Example: Walk 10,000 steps" v-model="metricTemplate.actionStep" />
      </a-col>
    </a-row>
    <h3 class="text-left"> How would you measure the progress ?</h3>
    <a-row :gutter="16" class="my-10">
      <a-col :span="12" v-for="trackingOption in trackingOptions" :key="'col_'+trackingOption.id" class="py-5 trackingOption" @click="selectTrackingOption(trackingOption.id)" :class="[(metricTemplate.selectedTrackingOption === trackingOption.id) ?  'active' : '' ]">
        <a-card hoverable :key="'card_'+trackingOption.id">
          <a-card-meta :title="trackingOption.title" :description="trackingOption.description" :class="[(metricTemplate.selectedTrackingOption === trackingOption.id) ?  'active' : '' ]">
            <a-avatar slot="avatar" :src="trackingOption.avatar" />
          </a-card-meta>
        </a-card>
      </a-col>
    </a-row>
    <a-row :gutter="16" class="my-10" v-show="metricTemplate.selectedTrackingOption === 1">
      <a-col :span="24">
        <h3 class="text-left">Mark as successful if number 
          <a-select defaultValue="exactly" style="width: 159px" size="default">
            <a-select-option value="at_least">at least</a-select-option>
            <a-select-option value="exactly">is exactly</a-select-option>
            <a-select-option value="not_more_than">not more than</a-select-option>
          </a-select>
          <a-input-number :min="1" :max="10" v-model="metricTemplate.timesValue" size="default" />
          times in a
          <a-select defaultValue="day" style="width: 95px" size="default">
            <a-select-option value="day">day</a-select-option>
            <a-select-option value="week">week</a-select-option>
            <a-select-option value="month">month</a-select-option>
          </a-select>
        </h3>
      </a-col>
    </a-row>
    <a-row :gutter="16" class="my-10">
      <a-col :span="24">
        <a-textarea size="large" :placeholder="trackingQuestion" :rows="4" />
      </a-col>
    </a-row>
    <a-row :gutter="16" class="my-10">
      <a-col :span="24">
        <h3 class="text-left">
          Repeat this habit for <a-input-number :min="1" :max="10" v-model="metricTemplate.minDaysToRepeat" size="default" /> days, from today
        </h3>
      </a-col>
    </a-row>
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
        actionStep: null,
        selectedTrackingOption: 1,
        minDaysToRepeat: 66,
        timesValue: 3,
      },
      trackingOptions: [
        { 
          id: 1, 
          title: 'With a number as a unit', 
          description: 'How many ___ did you do today ?', avatar: 'https://img.icons8.com/color/96/000000/help.png',
          placeholderQuestion: 'Example: How many times did you walk today ?'
        },
        { 
          id: 2, 
          title: 'Simple Yes or No each time', 
          description: 'Did you succeed in ___ today ?', avatar: 'https://img.icons8.com/color/96/000000/true-false.png',
          placeholderQuestion: 'Example: Did you walk 10,000 steps today (YES / NO)?'
        }
      ]
    }
  },
  methods: {
    selectTrackingOption(trackingOption) {
      this.metricTemplate.selectedTrackingOption = trackingOption;
    }
  },
  computed: {
    trackingQuestion() {
      return this.trackingOptions[this.metricTemplate.selectedTrackingOption - 1].placeholderQuestion
    }
  }
}
</script>

<style scoped>
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
}
</style>