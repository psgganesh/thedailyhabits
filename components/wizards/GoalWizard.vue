<template>
  <div>
    <a-steps :current="current">
      <a-step v-for="item in steps" :key="item.title" :title="item.title" />
    </a-steps>
    <div class="steps-content">
      <div v-show="current === 0">
        <ChooseCategory />
      </div>
      <div v-show="current === 1">
        <MeasureProgress />
      </div>
      <div v-show="current === 2">
        <SetFrequency />
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
import MeasureProgress from '~/components/forms/MeasureProgress';
import SetFrequency from '~/components/forms/SetFrequency';

export default {
  components: {
    ChooseCategory,
    MeasureProgress,
    SetFrequency
  },
  data() {
    return {
      current: 0,
      steps: [{
        title: 'Define Your Goal',
      }, {
        title: 'Measure Progress',
        subheading: '',
      }, {
        title: 'Set Frequency',
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
    /* text-align: center; */
    padding: 10px 10px;
  }

  .steps-action {
    margin-top: 24px;
  }
</style>