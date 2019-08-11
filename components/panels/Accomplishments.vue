<template>
  <div>
    <div class="atomic-canvas-list-even planboard-list list-accomplishments">
      <h2 class="text-white text-center"><a-icon type="trophy" /> Accomplishments</h2>
        <div class="pane">
          <a-row :gutter="16" >
            <a-col :span="6" class="text-center">{{ accomplishments.habits.drafting }}</a-col>
            <a-col :span="6" class="text-center">{{ accomplishments.habits.planning }}</a-col>
            <a-col :span="6" class="text-center">{{ accomplishments.habits.inProgress }}</a-col>
            <a-col :span="6" class="text-center">{{ accomplishments.habits.completed }}</a-col>
          </a-row>
          <draggable :list="completedItems"
              group="atomichabits"
              sort="false"
              class="pane"
              draggable=".item"
              animation="150"
              easing="cubic-bezier(1, 0, 0, 1)"
              ghostClass="ghost"
              dragClass="sortable-drag"
            >
            <a-card :title="element.task" class="list-group-item item" :bordered="true" v-for="element in completedItems" :key="element.task">
              {{ element.task }}
            </a-card>
          </draggable>
        </div>
    </div>
  </div>
</template>

<script>
export default {

  name: 'Accomplishments',

  data: function() {
    return {
      completedItems: [],
      accomplishments: {
        tasks: {
          total: 10,
          completed: 2,
          pending: 8
        },
        habits: {
          drafting: 1,
          planning: 2,
          inProgress: 3,
          completed: 5
        },
        streaks: {
          shortest: 2,
          longest: 20
        },
        balances: {
          rewardPoints: 2,
          penatlyPoints: 1
        }
      }
    }
  },

  beforeCreate: function() {
    // alert('Accomplishments beforeCreate');
  },

  created: function() {
    // alert('Accomplishments created');
  },

  beforeMount: function() {
    // alert('Accomplishments beforeMount');
  },

  mounted: function() {
    // alert('Accomplishments mounted');
  },

  beforeUpdate: function() {
    // alert('Accomplishments beforeUpdate');
  },

  updated: function() {
    // alert('Accomplishments updated');
  },

  beforeDestroy: function() {
    // alert('Accomplishments beforeDestroy');
  },

  destroyed: function() {
    // alert('Accomplishments destroyed');
  }
  
}
</script>