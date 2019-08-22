<template>
  <div>
    <div class="atomic-canvas-list">
      <div class="text-white box text-center px-5 py-8">
        <div class="row">
          <div class="col-xs-12">
            <a-input-search placeholder="Filter habits" @search="onSearch" />
          </div>
        </div>
      </div>
      <div class="py-5">
        <draggable v-model="habits"
          group="atomichabits"
          sort="false"
          class="pane px-8"
          draggable=".item"
          animation="150"
          easing="cubic-bezier(1, 0, 0, 1)"
          ghostClass="ghost"
          dragClass="sortable-drag"
        >
          <a-card class="list-group-item item" :bordered="true" v-for="element in habits" :key="element.name">
            <a-card-meta
              :title="element.metric.actionStep"
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
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { habitImages } from '~/utils/constants';
import GoalWizard from '~/components/wizards/GoalWizard';

export default {
  name: 'Habits',
  layout: 'simple',
  components: {
    GoalWizard
  },
  data() {
    return {
      title: 'Describe your habit',
      showAddNewGoalModal: false
    };
  },
  computed : {
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
    onSearch (value) {
      console.log(value)
    },
    avatar(category) {
      return category.avatar;
    }
  },
  
};
</script>

<style>
.padded {
  padding: 10px;
}
</style>
