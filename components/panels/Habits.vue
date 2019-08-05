<template>
  <div>

    <div class="atomic-canvas-list planboard-list">
      <h2 class="text-white text-center"><a-icon type="retweet" /> Habits</h2>
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
        <!-- <a-card :title="element.name" class="list-group-item item" :bordered="true" v-for="element in habits" :key="element" >
          {{ element.name }}
          {{ element.todoListData }}
        </a-card> -->
        <div v-for="element in habits" :key="element.name">
            <a-list
              size="small"
              bordered
              :dataSource="element.todoListData"
            >
            <a-list-item slot="renderItem" slot-scope="item">{{item}}</a-list-item>
          </a-list>
        </div>
      </draggable>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Habits',
  layout: 'simple',
  data() {
    return {
      habits: []
    };
  },
  methods: {
    
  }
};
</script>
