<template>
  <div>
    <a-row :gutter="16" class="my-10">
      <a-col :span="24">
        <a-steps progressDot :current="current">
          <a-step v-for="item in steps" :key="item.title" :title="item.title" />
        </a-steps>
        <div class="steps-content">
          <div v-show="current === 0">
            <MeasureProgress />
          </div>
          <div v-show="current === 1">
            <SetFrequency />
          </div>
        </div>
      </a-col>
    </a-row>
    <a-row :gutter="16" class="my-10">
      <a-col :span="10" :offset="14" class="px-18 pull-right">
        <div class="steps-action">
          <a-button
            v-if="current < steps.length - 1"
            type="primary" @click="next"
          >
            Continue to next step
          </a-button>
          <a-button
            v-if="current>0"
            style="margin-left: 8px"
            @click="prev"
          >
            Jump to previous step
          </a-button>
          <a-button
            v-if="current == steps.length - 1"
            type="success"
            @click="$message.success('Processing complete!')"
          >
            Finish
          </a-button>
          
        </div>
      </a-col>
    </a-row>

    
  </div>
</template>
<script>
import MeasureProgress from '~/components/forms/MeasureProgress';
import SetFrequency from '~/components/forms/SetFrequency';

export default {
  name: 'PlanWizard',
  layout: 'simple',
  components: {
    MeasureProgress,
    SetFrequency
  },
  data() {
    return {
      current: 0,
      steps: [{
        title: 'Define Action',
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