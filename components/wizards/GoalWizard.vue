<template>
  <div>
    <a-row :gutter="16" class="my-10">
      <a-col :span="24">
        <a-steps :current="current">
          <a-step v-for="item in steps" :key="item.title" :title="item.title" />
        </a-steps>
        <div class="steps-content">
          <div v-show="current === 0">
            <GoalForm :goalTemplate="newGoalTemplate" />
          </div>          
          <div v-show="current === 1">
            <MeasureProgress :metricTemplate="newMetricTemplate" />
          </div>
        </div>
      </a-col>
    </a-row>
    <a-row :gutter="16" class="my-10">
      <a-col :span="14" :offset="10" class="px-18 pull-right">
        <div class="steps-action">
          <a-button v-if="current>0" style="margin-left: 8px" @click="prev" >
            Jump to previous step
          </a-button>
          <a-button v-show="newGoalTemplate.category !== null" class="next" v-if="current < steps.length - 1" @click="next" >
            Continue to next step
          </a-button>
          <a-button v-show="newMetricTemplate.trackingQuestion !== null"  class="finish" v-if="current == steps.length - 1" @click="addNewHabit" >
            Finish
          </a-button>
        </div>
      </a-col>
    </a-row>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import GoalForm from '~/components/forms/GoalForm';
import MeasureProgress from '~/components/forms/MeasureProgress';

export default {
  name: 'GoalWizard',
  layout: 'simple',
  components: {
    GoalForm,
    MeasureProgress,
  },
  computed: {
    ...mapState([ 'newHabitTemplate' ])
  },
  data() {
    return {
      newGoalTemplate: null,
      newMetricTemplate: null,
      newAuditTemplate: null,
      current: 0,
      steps: [
        {
          title: 'Choose a goal',
          subheading: '',
        },
        {
          title: 'Define actions',
          subheading: '',
        }
      ],
    }
  },
  created () {
    this.newGoalTemplate = this.newHabitTemplate.goal
    this.newMetricTemplate = this.newHabitTemplate.metric,
    this.newAuditTemplate = this.newHabitTemplate.audit
  },
  methods: {
    next() {
      this.current++
    },
    prev() {
      this.current--
    },
    addNewHabit() {
      this.$store.dispatch('createHabit', { 
        id: Date.now(),
        goal: this.newGoalTemplate, 
        metric: this.newMetricTemplate,
        audit: this.newAuditTemplate
      })
      this.$message.success('New habit is added! drag it to the schedule of the day, to set reminders.')
      this.$emit('add-new-habit')

      this.newGoalTemplate = {
        category: null,
        status: null,
        parent: 'habits',
      }

      this.newMetricTemplate = {
        actionStep: null,
        selectedTrackingOption: null,
        timesComparison: 'minimum',
        minTimesToRepeat: 3,
        minDaysToRepeat: 66,
        trackingQuestion: null
      }

      this.newAuditTemplate = {
        taskCompletedTimes: 0,
        taskSkippedTimes: 0,
        taskCompletedDays: 0,
        taskSkippedDays: 0,
        createdOn: Date.now(),
        lastUpdatedOn: null,
        expiryDate: null
      }

    }
  },
}
</script>
<style scoped>
  .steps-content {
    margin-top: 16px;
    min-height: 200px;
    padding: 10px 10px;
  }

  .steps-action {
    margin-top: 24px;
  }

  .next {
    border-color: #1E88E5;
    background-color: #1976D2;
    background-image: linear-gradient(-180deg,#1565C0,#0D47A1 90%);
    color: #ffffff;
  }

  .finish, .finish:hover {
    border-color: #029824;
    background-color: #28a745;
    background-image: linear-gradient(-180deg,#34d058,#28a745 90%);
    color: #ffffff;
  }

  
</style>