<template>
  <div id="content" class="p-0">

    <a-row :gutter="16" class="gutter-row">
      
      <Habits />

      <!-- <a-col id="plans" :span="6">
        <h2 class="text-white header-15"><a-icon type="highlight" /> Plans</h2>
          <draggable
            id="second"
            :list="plans"
            class="gutter-box"
            draggable=".item"
            group="description"
            animation="0"
            ghostClass="ghost"
          >
          <a-card :title="element.name" class="list-group-item item" :bordered="false" style="width: 100%"
            v-for="element in plans"
              :key="element.name">
            {{ element.excerpt }}
          </a-card>
        </draggable>
      </a-col> -->

      <!-- <a-col id="dailies" :span="6">
        <h2 class="text-white header-15"><a-icon type="reload" /> Daily actions</h2>
          <draggable
            id="third"
            :list="dailies"
            class="gutter-box"
            draggable=".item"
            group="description"
            animation="0"
            ghostClass="ghost"
          >
          <a-card :title="element.name" class="list-group-item item" :bordered="false" style="width: 100%"
            v-for="element in dailies"
              :key="element.name">
            {{ element.excerpt }}
          </a-card>
        </draggable>
      </a-col> -->

      <!-- <a-col id="accomplished" :span="6">
        <h2 class="text-white header-15"><a-icon type="trophy" /> Accomplished actions</h2>
          <draggable
            id="final"
            :list="accomplished"
            class="gutter-box"
            draggable=".item"
            group="description"
            animation="0"
            ghostClass="ghost"
          >
          <a-card :title="element.name" class="list-group-item item" :bordered="false" style="width: 100%"
            v-for="element in accomplished"
              :key="element.name">
            {{ element.excerpt }}
          </a-card>
        </draggable>
      </a-col> -->

    </a-row>
  </div>
</template>

<script>
import Habits from '~/components/panels/habits';

export default {
  
  name: 'dashboard',
  layout: 'default',
  components: {
    Habits
  },
  data() {
    return {
      habits: [],
      plans: [],
      dailies: [],
      accomplished: []
    };
  }

};
</script>