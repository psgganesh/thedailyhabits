<template>
  <div>
    <div class="atomic-canvas-list">
      <!-- <h3 class="text-white text-center box py-8">✍️ Habits ( {{ habits.length }} )</h3> -->
        <draggable :list="habits"
          group="atomichabits"
          sort="false"
          class="pane"
          draggable=".item"
          animation="150"
          easing="cubic-bezier(1, 0, 0, 1)"
          ghostClass="ghost"
          dragClass="sortable-drag"
        >
        <a-card :title="element.name" class="list-group-item item" :bordered="true" v-for="element in habits" :key="element.name">
          {{ element.excerpt }}
        </a-card>
        <div class="create-card-composer" @click="() => showAddNewGoalModal = true">
          <div  class="dark-blue-input"><a-icon type="pushpin" /> Add a new habit</div>
        </div>
      </draggable>
      <div class="align-center">
          <a-modal centered v-model="showAddNewGoalModal" :header="null" :footer="null" @ok="() => showAddNewGoalModal = false" :title="title" :closable="false" width="768px" >
            <PlanWizard />
          </a-modal>
      </div>
    </div>
  </div>
</template>

<script>
import PlanWizard from '~/components/wizards/PlanWizard';

export default {
  name: 'Habits',
  layout: 'simple',
  components: {
    PlanWizard
  },
  data() {
    return {
      title: 'Describe your habit',
      showAddNewGoalModal: false,
      habits: []
    };
  },
  methods: {
    addNewGoal(e) {
      e.preventDefault();
    }
  }
};
</script>

<style>
.padded {
  padding: 10px;
}
</style>
