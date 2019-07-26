<template>
    <div class="atomic-canvas">
      <div class="col-xs-3">
          <Goals />
      </div>
      <div class="col-xs-3">
          <Plans />
      </div>
      <div class="col-xs-3">
          
      </div>
      <div class="col-xs-3">
          
      </div>
    </div>
</template>

<script>
import Goals from '~/components/panels/Goals';
import Plans from '~/components/panels/Plans';

export default {
  layout: 'default',
  components: {
    Goals,
    Plans
  }
}
</script>