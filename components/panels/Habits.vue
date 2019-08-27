<template>
  <div>
    <div class="atomic-canvas-list">
      <div class="text-white box text-center px-5 py-8">
        <div class="row">
          <div class="col-xs-4">
            Pending <a-badge showZero :count="pendingTasksCount" :numberStyle="{backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset'}"  />
          </div>
          <div class="col-xs-4">
            In-Progress <a-badge showZero :count="inProgressTasksCount" :numberStyle="{backgroundColor: '#faad14', color: '#fff', boxShadow: '0 0 0 1px #d9d9d9 inset'}" />
          </div>
          <div class="col-xs-4">
            Completed <a-badge showZero :count="completedTasksCount" :numberStyle= "{backgroundColor: '#52c41a'} " />
          </div>
        </div>
      </div>
      <div class="py-5">
        <draggable v-model="habits"
          :group="{ name: 'atomichabits', put: false }"
          sort="false"
          class="pane px-8"
          draggable=".item"
          animation="150"
          easing="cubic-bezier(1, 0, 0, 1)"
          ghostClass="ghost"
          dragClass="sortable-drag"
        >
          <a-card :title="element.metric.actionStep" class="list-group-item item" :bordered="true" v-for="element in habits" :key="element.name" @click="editHabit(element)">
            <template slot="extra">
              <a-icon type="delete" />
            </template>
            <a-card-meta
              :description="element.metric.trackingQuestion">
              <a-avatar slot="avatar" :src="avatar(element.goal.category)" />
            </a-card-meta>
          </a-card>
          <div class="create-card-composer" @click="() => showAddNewGoalModal = true" slot="footer">
            <div class="dark-blue-input"><a-icon type="plus" /> Add a new habit</div>
          </div>
        </draggable>
      </div>
      <div class="align-center">
          <a-modal centered v-model="showAddNewGoalModal" :header="null" :footer="null" :title="title" :closable="false" width="768px" :destroyOnClose="true" >
            <GoalWizard @add-new-habit="() => showAddNewGoalModal = false" />
          </a-modal>
          <a-modal centered v-model="showSelectedGoalModal" :header="null" :footer="null" :title="title" :closable="false" width="768px" :destroyOnClose="true" >
            <HabitEditWizard :selectedHabitTemplate="selectedHabitTemplate" @updated-selected-habit="() => showSelectedGoalModal = false" />
          </a-modal>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import { habitImages } from '~/utils/constants';
import GoalWizard from '~/components/wizards/GoalWizard';
import HabitEditWizard from '~/components/wizards/HabitEditWizard';

export default {
  name: 'Habits',
  layout: 'simple',
  components: {
    GoalWizard,
    HabitEditWizard
  },
  data() {
    return {
      title: 'Describe your habit',
      showAddNewGoalModal: false,
      showSelectedGoalModal: false,
      selectedHabitTemplate: null
    };
  },
  computed : {
    ...mapGetters([
      'pendingTasksCount',
      'inProgressTasksCount',
      'completedTasksCount'
    ]),
    habits: {
      get() {
        return this.$store.state.habits
      },
      set(value) {
        const data = {
          zone: 'habits',
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
    editHabit(element) {
      this.selectedHabitTemplate = element
      this.showSelectedGoalModal = true
    }
  },
  
};
</script>

<style>
.padded {
  padding: 10px;
}
</style>
