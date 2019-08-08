<template>
  <div>
    <div class="atomic-canvas-list planboard-list">
      <h2 class="text-white text-center"><a-icon type="calendar" /> Today</h2>
        <draggable v-model="habits"
          group="atomichabits"
          sort="true"
          class="pane"
          draggable=".item"
          animation="150"
          easing="cubic-bezier(1, 0, 0, 1)"
          ghostClass="ghost"
          dragClass="sortable-drag"
          @add="onAdd"
        >
        <!-- {{ habits }} -->
        <!-- <a-card :title="element.task" class="list-group-item item" :bordered="true" v-for="element in habits.todoListData" :key="element.task" /> -->
        <div v-for="element in habits" :key="element.name" class="list-group">
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
      habits: []
    };
  },
  methods: {
    onAdd (evt) {
      console.log(evt);
    },
  }
};
</script>

<style>
.list-group {
  border-top: 0px;
  border-right: 0px;
  border-bottom: 1px;
  border-left: 0px;
  border-style: dashed;
  border-color: #ffffff;
}
.todo {
  margin: 10px 0px;
}
</style>

