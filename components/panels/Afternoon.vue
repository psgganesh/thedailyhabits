<template>
  <div>
    <div class="atomic-canvas-list planboard-list">
      <h2 class="text-white text-center">☀️ Afternoon</h2>
        <draggable :list="habits"
          group="atomichabits"
          sort="false"
          class="pane"
          draggable=".item"
          animation="150"
          easing="cubic-bezier(1, 0, 0, 1)"
          ghostClass="ghost"
          dragClass="sortable-drag"
          dragoverBubble="false"
          @add="onAdd"
        >
        <a-card v-show="todoItems !== null" class="list-group-item item" :bordered="true" v-for="element in tasks" :key="element.task">
          <a-checkbox @change="onCheckedTask">{{ element.task }}</a-checkbox>
        </a-card>
      </draggable>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Afternoon',
  layout: 'simple',
  data() {
    return {
      habits: []
    };
  },
  methods: {
    onAdd (evt) {
      // if(!this.habits[this.habits.length - 1].hasOwnProperty('todoListData')) {
      //   return false;
      // }
    },
    onCheckedTask(e) {
      console.log(`checked = ${e.target.checked}`)
    }
  },
  computed: {
    tasks: {
      get: function() {
        let items = this.habits.map(function(item) {
          return item.todoListData;
        });
        this.todoItems = items.shift();
        return this.todoItems;
      },
      set: function() {
        
      }
    }
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

