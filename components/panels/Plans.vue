<template>
  <div>

    <div class="atomic-canvas-list-even">
      <h2 class="text-white text-center"><a-icon type="retweet" /> Habits</h2>
        <draggable :list="plans"
          group="atomichabits"
          sort="false"
          class="pane"
          draggable=".item"
          animation="150"
          ghostClass="ghost"
          dragClass="sortable-drag"
        >
        <a-card :title="element.name" class="list-group-item item" :bordered="true" v-for="element in plans" :key="element.name" @click="openGoalPlan(element)">
          {{ element.excerpt }}
        </a-card>
        
      </draggable>
    </div>
    <div class="align-center">
        <a-modal centered v-model="openGoalPlanModal" @ok="closeGoalPlan" :header="null" :footer="null" width="768px" :closable="false" >
          <h3><a-icon type="pushpin" /> {{ goal.title }}</h3>
          <hr/>
          <p class="goal-description">{{ goal.description }}</p>
          <CreateTodoForm />
        </a-modal>
    </div>

  </div>
</template>

<script>
import CreateTodoForm from '~/components/forms/create-todo-form';

export default {
  name: 'plans',
  layout: 'simple',
  components: {
    CreateTodoForm
  },
  data() {
    return {
      openGoalPlanModal: false,
      plans: [],
      goal: {
        title: null,
        description: null
      }
    };
  },
  methods: {
    openGoalPlan: function (goal)  {
      this.openGoalPlanModal = true;
      this.goal = {
        title: goal.name,
        description: goal.excerpt
      };
    },
    closeGoalPlan: function (){
      this.openGoalPlanModal = false;
    } 
  }
};
</script>
