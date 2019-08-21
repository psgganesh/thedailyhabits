<template>
  <div>
    <div class="atomic-canvas-list-even planboard-list">
      <h2 class="text-white text-center">Evening ( {{ eveningHabits.length }} )</h2>
        <draggable v-model="eveningHabits"
          group="atomichabits"
          sort="false"
          class="pane"
          draggable=".item"
          animation="150"
          easing="cubic-bezier(1, 0, 0, 1)"
          ghostClass="ghost"
          dragClass="sortable-drag"
        >
        <a-card :title="element.name" class="list-group-item item" :bordered="true" v-for="(element) in eveningHabits" :key="element.name">
          {{ element.excerpt }}
        </a-card>
      </draggable>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Evening',
  layout: 'simple',
  components: {
    
  },
  data() {
    return {
      
    };
  },
  computed : {
    eveningHabits: {
      get() {
        return this.$store.state.eveningHabits
      },
      set(value) {
        this.$store.commit('SET_EVENING_HABITS_LIST', value)
      }
    }
  },
  methods: {
    
  }
};
</script>
