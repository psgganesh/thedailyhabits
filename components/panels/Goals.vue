<template>
  <div>
    <div class="atomic-canvas-list goals-list">
      <h2 class="text-white text-center"><a-icon type="pushpin" /> Goals</h2>
        <draggable :list="goals"
          group="atomichabits"
          sort="false"
          class="pane"
          draggable=".item"
          animation="150"
          easing="cubic-bezier(1, 0, 0, 1)"
          ghostClass="ghost"
          dragClass="sortable-drag"
        >
        <a-card :title="element.name" class="list-group-item item" :bordered="true" v-for="element in goals" :key="element.name">
          {{ element.excerpt }}
        </a-card>
        <div class="create-card-composer" @click="() => showAddNewGoalModal = true">
          <div  class="dark-blue-input"><a-icon type="pushpin" /> Add a new goal</div>
        </div>
      </draggable>
      <div class="align-center">
          <a-modal centered v-model="showAddNewGoalModal" @ok="() => showAddNewGoalModal = false" :header="null" :footer="null" :closable="false" width="768px" >
            <GoalWizard />
          </a-modal>
      </div>
    </div>

  </div>
</template>

<script>
import GoalWizard from '~/components/wizards/GoalWizard';

export default {
  name: 'Goals',
  layout: 'simple',
  components: {
    GoalWizard
  },
  data() {
    return {
      showAddNewGoalModal: false,
      goals: [
        { 
          name: "Need to cultivate habit of book reading", 
          excerpt: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero\'s De Finibus Bonorum et Malorum for use in a type specimen book'
        }
      ]
    };
  },
  methods: {
    addNewGoal(e) {
      e.preventDefault();
    }
  }
};
</script>
