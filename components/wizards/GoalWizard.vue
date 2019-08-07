<template>
  <div>
    <a-steps :current="current">
      <a-step v-for="item in steps" :key="item.title" :title="item.title" />
    </a-steps>
    <div class="steps-content">
      <h2>{{steps[current].subheading}}</h2>
      <div v-show="current === 0">
        <ChooseCategory />
      </div>
      <div v-show="current === 1">
        <h3>Second</h3>
      </div>
      <div v-show="current === 2">
        <h3>Third</h3>
      </div>
    </div>
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
</template>
<script>
import ChooseCategory from '~/components/forms/ChooseCategory';


export default {
  components: {
    ChooseCategory
  },
  data() {
    return {
      current: 0,
      steps: [{
        title: 'Choose Category',
      }, {
        title: 'Measure Progress',
        subheading: '',
      }, {
        title: 'Specify Frequency',
        subheading: '',
      }],
    }
  },
  methods: {
    next() {
      this.current++
    },
    prev() {
      this.current--
    }
  },
}
</script>
<style scoped>
  .steps-content {
    margin-top: 16px;
    /* border: 1px dashed #e9e9e9; */
    /* border-radius: 6px; */
    /* background-color: #fafafa; */
    min-height: 200px;
    text-align: center;
    padding-top: 80px;
  }

  .steps-action {
    margin-top: 24px;
  }
</style>