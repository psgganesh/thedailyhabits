<template>
  <div>
    <div class="atomic-canvas-list-even planboard-list">
      <h2 class="text-white text-center">Afternoon ( {{ afternoonHabitsCount }} / {{ afternoonHabits.length }} )</h2>
        <draggable v-model="afternoonHabits"
          group="atomichabits"
          sort="false"
          class="pane px-8"
          draggable=".item"
          animation="150"
          easing="cubic-bezier(1, 0, 0, 1)"
          ghostClass="ghost"
          dragClass="sortable-drag"
        >
        <a-card class="list-group-item item task-card" :class="taskClassStatus(element)" :bordered="true" v-for="element in afternoonHabits" :key="element.name">
            <a-card-meta
              :title="element.metric.actionStep"
              :description="element.metric.trackingQuestion">
              <a-avatar slot="avatar" :src="avatar(element.goal.category)" />
            </a-card-meta>
            <br>
            <div class="row footer mb-15">
              <div class="col-xs-6" v-show="element.metric.selectedTrackingOption === 'numeric'">
                <a-icon type="reload" /> {{ element.audit.taskCompletedTimes }} / {{ element.metric.minTimesToRepeat }} times
              </div>
              <div class="col-xs-6" v-show="element.metric.selectedTrackingOption === 'simple'">
                
              </div>
              <div class="col-xs-6 pull-right">
                <a-icon type="calendar" /> 0 / 66 days
              </div>
            </div>

            <template v-if="isTodaysTask(element)">
              <div class="row py-8 mt-10 mb-10" v-show="element.metric.selectedTrackingOption === 'numeric'">
                <div class="col-xs-6">
                  <a-button class="cta-btn-succes" :disabled="todoActionButtonsState(element)" @click="completeTodo(element)" block><a-icon type="check" /> Mark Completed</a-button>
                </div>
                <div class="col-xs-6 pull-right">
                  <a-button class="cta-btn-warning" :disabled="todoActionButtonsState(element)" @click="skipTodo(element)" block><a-icon type="close" /> Skip </a-button>
                </div>
              </div>
              <div class="row py-8 mt-10" v-show="element.metric.selectedTrackingOption === 'simple'">
                <div class="col-xs-6">
                  <a-button class="cta-btn-succes" :disabled="todoActionButtonsState(element)" @click="completeTodo(element)" block><a-icon type="check" /> Yes, I did</a-button>
                </div>
                <div class="col-xs-6 pull-right">
                  <a-button class="cta-btn-danger" :disabled="todoActionButtonsState(element)" @click="skipTodo(element)" block><a-icon type="close" /> No, I did not</a-button>
                </div>
              </div>
            </template>
            
          </a-card>
      </draggable>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import moment from 'moment';
import { habitImages } from '~/utils/constants';

export default {
  name: 'Afternoon',
  layout: 'simple',
  components: {
    
  },
  data() {
    return {
      today: moment().format()
    };
  },
  computed : {
    ...mapGetters([
      'fetchSelectedDate',
      'afternoonHabitsCount'
    ]),
    afternoonHabits: {
      get() {
        return this.$store.state.afternoonHabits
      },
      set(value) {
        const data = {
          zone: 'afternoonHabits',
          habit: value
        }
        this.$store.dispatch('moveHabit', data)
      }
    }
  },
  methods: {
    avatar(category) {
      return category.avatar;
    },
    completeTodo(habit) {
      this.$store.dispatch('completeTodo', habit)
    },
    skipTodo(habit) {
      this.$store.dispatch('skipTodo', habit)
      this.$message.warning('Skipped '+ habit)
    },
    todoActionButtonsState(task) {
      return (task.goal.status === 'completed')
    },
    taskClassStatus(task) {
      return ( (task.goal.status === 'completed') || (!moment(moment(this.fetchSelectedDate).format()).isSame(this.today))) ? 'hidden' : 'visible'
    },
    isTodaysTask(element) {
      return moment(moment(this.fetchSelectedDate).format()).isSame(this.today)
    }
  }
};
</script>
