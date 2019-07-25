<template>
  <div id="content">
    <a-row :gutter="16" class="gutter-row">
      <a-col id="habits" :span="6">
        <h2 class="text-white header-15"><a-icon type="retweet" /> Habits</h2>
          <div class="align-center">
              <a-modal
                title="Vertically centered modal dialog"
                centered
                v-model="modal2Visible"
                @ok="() => modal2Visible = false"
                :footer="null"
              >
                <div>
                  <a-steps :current="current">
                    <a-step v-for="item in steps" :key="item.title" :title="item.title" />
                  </a-steps>
                  <div class="steps-content">{{steps[current].content}}</div>
                  <div class="steps-action">
                    <a-button
                      v-if="current < steps.length - 1"
                      type="primary" @click="next"
                    >
                      Next
                    </a-button>
                    <a-button
                      v-if="current == steps.length - 1"
                      type="primary"
                      @click="$message.success('Processing complete!')"
                    >
                      Done
                    </a-button>
                    <a-button
                      v-if="current>0"
                      style="margin-left: 8px"
                      @click="prev"
                    >
                      Previous
                    </a-button>
                  </div>
                </div>
              </a-modal>
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
        <div :style="{ padding: '8px 8px 8px 8px' }" class="dark-blue">
          <div @click="() => modal2Visible = true" class="dark-blue-input">+ Add another habit</div>
        </div>
      </a-col>

      <a-col id="plans" :span="6">
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
      </a-col>

      <a-col id="dailies" :span="6">
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
      current: 0,
      modal2Visible: false,
      habits: [
        { 
          id: 0, 
          name: "Need to cultivate habit of book reading", 
          excerpt: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero\'s De Finibus Bonorum et Malorum for use in a type specimen book'
        },
        { 
          id: 1, 
          name: 'Piano practice', 
          excerpt: 'Habitant morbi tristique senectus et netus et. Et molestie ac feugiat sed. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. ' 
        },
        { 
          id: 2, 
          name: 'Sleep early', 
          excerpt: 'In hac habitasse platea dictumst. Ornare arcu odio ut sem nulla pharetra diam. Nullam eget felis eget nunc lobortis mattis. Fermentum posuere urna nec tincidunt praesent semper feugiat nibh sed. Ut aliquam purus sit amet luctus venenatis.' 
        }
      ],
      steps: [{
        title: 'First',
        content: 'First-content',
      }, {
        title: 'Second',
        content: 'Second-content',
      }, {
        title: 'Last',
        content: 'Last-content',
      }],
      plans: [
        
      ],
      dailies: [
        
      ],
      accomplished: [
        
      ]
    };
  },
  methods: {
    next() {
      this.current++
    },
    prev() {
      this.current--
    }
  }
};
</script>

<style>
.steps-content {
  margin-top: 16px;
  border: 1px dashed #e9e9e9;
  border-radius: 6px;
  background-color: #fafafa;
  min-height: 200px;
  text-align: center;
  padding-top: 80px;
}

.steps-action {
  margin-top: 24px;
}
#habits {
  /* overflow-y: hidden; */
  height: 100vh;
}
#plans {
  /* overflow-y: hidden; */
  height: 100vh;
}
#dailies {
  /* overflow-y: hidden; */
  height: 100vh;
}
#accomplished {
  /* overflow-y: hidden; */
  background:#00a7ff4a;
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
  width: 100%;
  height: 30px;
  margin-right: 8px;
  text-align: center;
  padding: 5px;
  border: 0;
  color: white;
  cursor: pointer;
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
  /* height: 100vh; */
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