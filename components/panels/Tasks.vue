<template>
  <div>
    <div class="atomic-canvas-list planboard-list">
      <h2 class="text-white text-center"><a-icon type="calendar" /> Today</h2>
        
        <draggable :list="tasks"
          group="atomichabits"
          sort="false"
          class="pane"
          draggable=".item"
          animation="150"
          easing="cubic-bezier(1, 0, 0, 1)"
          ghostClass="ghost"
          dragClass="sortable-drag"
        >
        <div v-for="element in tasks" :key="element.name">

          <a-card :title="element.task" class="list-group-item item" :bordered="true" v-for="element in element.todoListData" :key="element.task" />

        </div>
      </draggable>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Tasks',
  layout: 'simple',
  data() {
    return {
      tasks: []
    };
  },
  methods: {
    
  }
};
</script>

<style>
.todo {
  margin: 10px 0px;
}
</style>

