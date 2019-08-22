<template>
  <div>
    <div class="atomic-canvas-list-even planboard-list">
      <h2 class="text-white text-center">Morning ( {{ morningHabits.length }} )</h2>
        <draggable v-model="morningHabits"
          group="atomichabits"
          sort="false"
          class="pane px-8"
          draggable=".item"
          animation="150"
          easing="cubic-bezier(1, 0, 0, 1)"
          ghostClass="ghost"
          dragClass="sortable-drag"
        >
        <a-card class="list-group-item item task-card" :bordered="true" v-for="element in morningHabits" :key="element.name">
            <!-- <template class="ant-card-actions" slot="actions">
              <a-icon type="check" />
              <a-icon type="close" />
            </template> -->
            <a-card-meta
              :title="element.metric.actionStep"
              :description="element.metric.trackingQuestion">
              <a-avatar slot="avatar" :src="avatar(element.goal.category)" />
            </a-card-meta>
            <br>
            <div class="row footer">
              <div class="col-xs-6">
                <a-icon type="reload" /> {{ element.audit.taskCompletedTimes }} / {{ element.metric.minTimesToRepeat }} times
              </div>
              <div class="col-xs-6 pull-right">
                <a-icon type="calendar" /> 0 / 66 days
              </div>
            </div>
            <div class="row py-8">
              <div class="col-xs-6">
                <a-button type="primary" block><a-icon type="check" /> </a-button>
              </div>
              <div class="col-xs-6 pull-right">
                <a-button type="danger" block><a-icon type="close" /> </a-button>
              </div>
            </div>
          </a-card>
      </draggable>
    </div>
  </div>
</template>

<script>
import { habitImages } from '~/utils/constants';

export default {
  name: 'Morning',
  layout: 'simple',
  components: {
    
  },
  data() {
    return {
      
    };
  },
  computed : {
    morningHabits: {
      get() {
        return this.$store.state.morningHabits
      },
      set(value) {
        const data = {
          zone: 'morning',
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
    completeTodo(todo) {
      this.$store.dispatch('completeTodo', todo)
      this.$message.success('Completed '+ todo)
    },
    skipTodo(todo) {
      this.$store.dispatch('skipTodo', todo)
      this.$message.warning('Skipped '+ todo)
    }
  }
};
</script>

