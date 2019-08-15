<template>
  <div>
    <div class="atomic-canvas-list-even planboard-list">
      <h2 class="text-white text-center">Afternoon ( {{ afternoonHabits.length }} )</h2>
        <draggable :list="afternoonHabits"
          group="atomichabits"
          sort="false"
          class="pane"
          draggable=".item"
          animation="150"
          easing="cubic-bezier(1, 0, 0, 1)"
          ghostClass="ghost"
          dragClass="sortable-drag"
        >
        <a-card :title="element.name" class="list-group-item item" :bordered="true" v-for="(element) in afternoonHabits" :key="element.name">
          {{ element.excerpt }}
        </a-card>
      </draggable>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Afternoon',
  layout: 'simple',
  components: {
    
  },
  data() {
    return {
      afternoonHabits: []
    };
  },
  methods: {
    
  }
};
</script>
