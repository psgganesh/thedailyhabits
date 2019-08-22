<template>
  <div>
    <div class="atomic-canvas-list-even planboard-list">
      <h2 class="text-white text-center">Afternoon ( {{ afternoonHabits.length }} )</h2>
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
        <a-card class="list-group-item item" :bordered="true" v-for="element in afternoonHabits" :key="element.name">
            <template class="ant-card-actions" slot="actions">
              <a-icon type="check" />
              <a-icon type="close" />
            </template>
            <a-card-meta
              :title="element.metric.actionStep"
              :description="element.metric.trackingQuestion">
              <a-avatar slot="avatar" :src="avatar(element.goal.category)" />
            </a-card-meta>
          </a-card>
      </draggable>
    </div>
  </div>
</template>

<script>
import { habitImages } from '~/utils/constants';

export default {
  name: 'Afternoon',
  layout: 'simple',
  components: {
    
  },
  data() {
    return {
      
    };
  },
  computed : {
    afternoonHabits: {
      get() {
        return this.$store.state.afternoonHabits
      },
      set(value) {
        const data = {
          zone: 'afternoon',
          habit: value
        }
        this.$store.dispatch('moveHabit', data)
      }
    }
  },
  methods: {
    avatar(category) {
      return category.avatar;
    }
  }
};
</script>
