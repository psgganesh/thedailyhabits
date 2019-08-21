<template>
  <div>
    <div class="atomic-canvas-list-even planboard-list">
      <h2 class="text-white text-center">Night ( {{ nightHabits.length }} )</h2>
        <draggable :list="nightHabits"
          group="atomichabits"
          sort="false"
          class="pane"
          draggable=".item"
          animation="150"
          easing="cubic-bezier(1, 0, 0, 1)"
          ghostClass="ghost"
          dragClass="sortable-drag"
        >
        <a-card :title="element.name" class="list-group-item item" :bordered="true" v-for="(element) in nightHabits" :key="element.name">
          {{ element.excerpt }}
        </a-card>
      </draggable>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Night',
  layout: 'simple',
  components: {
    
  },
  data() {
    return {
      nightHabits: this.$store.state.nightHabits
    };
  },
  methods: {
    
  }
};
</script>
