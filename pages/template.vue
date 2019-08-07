<template>
    <div class="atomic-canvas">
      <div class="col-xs-3 m-65 px-0">
        <Goals />
      </div>
      <div class="col-xs-3 m-65 px-0">
        <Plans />
      </div>
      <div class="col-xs-3 m-65 px-0">
        <Tasks />
      </div>
      <div class="col-xs-3 m-65 px-0">
        <Accomplishments />
      </div>
    </div>
</template>

<script>
import Goals from '~/components/panels/Goals';
import Plans from '~/components/panels/Plans';
import Tasks from '~/components/panels/Tasks';
import Accomplishments from '~/components/panels/Accomplishments';

export default {
  layout: 'default',
  components: {
    Goals,
    Plans,
    Tasks,
    Accomplishments
  }
}
</script>
