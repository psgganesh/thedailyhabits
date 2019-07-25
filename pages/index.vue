<template>
  <div id="content">
    <a-row :gutter="16" class="gutter-row">

      <a-col id="habits" :span="6">
        <h2 class="text-white header-15"><a-icon type="retweet" /> Habits</h2>
          <!-- <div class="p-10 habit-form-div" >
            <a-input class="habit-form-div-input" placeholder="+ Add any of your habits" tabindex="1" :autofocus="'autofocus'"/>
            <a-button class="habit-form-div-input" block>+ Add a habit</a-button>
          </div> -->
          <div class="align-center m-10">
            <a-button class="" type="default" shape="circle" :size="large"><b>+</b></a-button>
          </div>
          <draggable
            id="first"
            :list="habits"
            class="gutter-box"
            draggable=".item"
            group="description"
            animation="0"
            ghostClass="ghost"
          >
          <a-card :title="element.name" class="list-group-item item" :bordered="false" style="width: 100%"
            v-for="element in habits"
              :key="element.name">
            {{ element.excerpt }}
          </a-card>
        </draggable>
      </a-col>

      <a-col id="plans" :span="6">
        <h2 class="text-white header-15"><a-icon type="highlight" /> Plans</h2>
          <div class="ghost-div" >
            <!-- <a-input class="plan-form-div-input" placeholder="+ Put up an action plan" tabindex="2" :autofocus="'autofocus'"/> -->
          </div>
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
      </a-col>

      <a-col id="dailies" :span="6">
        <h2 class="text-white header-15"><a-icon type="reload" /> Daily actions</h2>
          <div class="ghost-div" >
            <!-- <a-input class="action-form-div-input" placeholder="+ Add a daily habits" tabindex="3"/> -->
          </div>
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
      </a-col>

      <a-col id="accomplished" :span="6">
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
      </a-col>

    </a-row>
  </div>
</template>

<script>

let id = 1;
export default {
  name: "two-list-headerslots",
  layout: 'default',
  data() {
    return {
      habits: [
        { id: 0, name: "Need to cultivate habit of book reading", excerpt: 'This is an example description' },
        { id: 1, name: "Piano practice", excerpt: 'This is an example description' },
        { id: 2, name: "Sleep early", excerpt: 'This is an example description' }
      ],
      plans: [
        
      ],
      dailies: [
        
      ],
      accomplished: [
        
      ]
    };
  },
  methods: {
    
  }
};
</script>

<style>
#habits {
  overflow-y: hidden;
  height: 100vh;
}
#plans {
  overflow-y: hidden;
  height: 100vh;
}
#dailies {
  overflow-y: hidden;
  height: 100vh;
}
#accomplished {
  overflow-y: hidden;
  background:#0d6b04;
  height: 100vh;
}
.align-center {
  text-align: center;
}
.m-10 {
  margin: 10px;
}

.p-10 {
  padding: 10px;
}

.ghost-div {
  height: 52px;
}

.habit-form-div {
  background:#ff000075;
}
.habit-form-div-input {
  background: #79052c;
  border: 0;
  color: white;
}

.plan-form-div {
  background:#ff00c34a;
}
.plan-form-div-input {
  background: #4a2094;
  border: 0;
  color: white;
}

.action-form-div {
  background:#2b7723;
}
.action-form-div-input {
  background: #0d6b04;
  border: 0;
  color: white;
}




.dark-blue {
  background:#00a7ff4a;
}
.dark-blue-input {
  background: #064877;
  border: 0;
  color: white;
}


.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}

.header-15 {
  padding: 10px 0px;
  text-align: center;
}
.gutter-row {
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px 0px;
}
.gutter-box {
  background: #ffffff4a;
  height: 100vh;
  padding: 15px;
}
.ant-card {
  margin-bottom: 15px;
}
#content {
  background: #0e477b;
  padding: 0px;
  height: 100vh;
}
.text-white {
  color: #fff;
}
.list {
  background: #fff;
}
</style>