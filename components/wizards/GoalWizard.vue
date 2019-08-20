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
          <a-button class="next" v-if="current < steps.length - 1" @click="next" >
            Continue to next step
          </a-button>
          <a-button class="finish" v-if="current == steps.length - 1" @click="$message.success('New habit is added! drag it to the schedule of the day, to set reminders.')" >
            Finish
          </a-button>
        </div>
      </a-col>
    </a-row>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import GoalForm from '~/components/forms/GoalForm';
import MeasureProgress from '~/components/forms/MeasureProgress';

export default {
  name: 'GoalWizard',
  layout: 'simple',
  components: {
    GoalForm,
    MeasureProgress,
  },
  computed: mapGetters([
    'newHabitTemplate'
  ]),
  beforeMount () {
    this.newGoalTemplate = this.newHabitTemplate.goal
    this.newMetricTemplate = this.newHabitTemplate.metric
  },
  data() {
    return {
      newGoalTemplate: null,
      newMetricTemplate: null,
      current: 0,
      steps: [
        {
          title: 'Describe Habit',
          subheading: '',
        },
        {
          title: 'Define Action',
          subheading: '',
        }
      ],
    }
  },
  methods: {
    next() {
      switch(this.current) {
        case 0:
          console.log('Validating form for '+this.steps[this.current].title);
          
          // Validation logic to be added here for Describe Habit
          
          console.log('Validated the form for '+this.steps[this.current].title);
          break;
        case 1:
          console.log('Validating form for '+this.steps[this.current].title);
          
          // Validation logic to be added here for Define Action
          
          console.log('Validated the form for '+this.steps[this.current].title);
          break;
        default:
          console.log('Nothing to validate in here!!');
          console.log('current: '+this.current);
          break;
      }
      this.current++
    },
    prev() {
      this.current--
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