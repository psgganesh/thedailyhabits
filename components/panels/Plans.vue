<template>
  <div>

    <div class="atomic-canvas-list-even planboard-list">
      <h2 class="text-white text-center"><a-icon type="highlight" /> Planboard</h2>
        <draggable :list="plans"
          group="atomichabits"
          sort="false"
          class="pane"
          draggable=".item"
          animation="150"
          easing="cubic-bezier(1, 0, 0, 1)"
          ghostClass="ghost"
          dragClass="sortable-drag"
        >
        <a-card :title="element.name" class="list-group-item item" :bordered="true" v-for="(element, index) in plans" :key="element.name" @click="openGoalPlan(index, element)">
          {{ element.excerpt }}
        </a-card>
        
      </draggable>
    </div>
    <div class="align-center">
        <a-modal centered v-model="openGoalPlanModal" @ok="closeGoalPlan" :header="null" :footer="null" width="768px" :closable="false" >
          <h3><a-icon type="pushpin" /> {{ goal.title }}</h3>
          <hr/>
          <p class="goal-description">{{ goal.description }}</p>
          <a-list
            size="small"
            bordered
            :dataSource="goal.todoListData"
          >
            <a-list-item slot="renderItem" slot-scope="item">{{item}}</a-list-item>
          </a-list>
        </a-modal>
    </div>
  </div>
</template>

<script>
import ToDoListData from '~/data/ListData';

const todoListData = ToDoListData;

export default {
  name: 'Plans',
  layout: 'simple',
  data() {
    return {
      openGoalPlanModal: false,
      plans: [],
      goal: {
        title: null,
        description: null
      },
      todoListData: todoListData
    };
  },
  methods: {
    openGoalPlan: function (index, goal)  {
      this.openGoalPlanModal = true;
      this.goal = {
        title: goal.name,
        description: goal.excerpt,
        todoListData: this.todoListData
      };
      this.plans[index].todoListData = this.todoListData;
    },
    closeGoalPlan: function (){
      this.openGoalPlanModal = false;
    } 
  }
};
</script>
