<template>
  <div id="atomic-app">
    <div class="row">
        <div class="col-xs-8">
            <div class="box">
                Streak graphs
            </div>
        </div>
        <div class="col-xs-2">
            <div class="box">
                Stats 1
            </div>
        </div>
        <div class="col-xs-2">
            <div class="box">
                Stats 2
            </div>
        </div>
    </div>
    <div class="atomic-canvas">
      <div class="col-xs-3 pt-40 px-0">
        <Habits />
      </div>
      <div class="col-xs-3 pt-40 px-0">
        <Morning />
      </div>
      <div class="col-xs-3 pt-40 px-0">
        <Afternoon />
      </div>
      <div class="col-xs-3 pt-40 px-0">
        <Evening />
      </div>
    </div>
  </div>
</template>
<script>
import Habits from '~/components/panels/Habits';
import Morning from '~/components/panels/Morning';
import Afternoon from '~/components/panels/Afternoon';
import Evening from '~/components/panels/Evening';

export default {
  name: 'vertical',
  layout: 'simple',
  components: {
    Habits,
    Morning,
    Afternoon,
    Evening
  }
}
</script>

<style>
#atomic-app {
  background: url('https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2251&q=80');
  background-size: cover;
  background-attachment:scroll;
  padding: 15px;
}

.atomic-canvas .atomic-canvas-list,
.atomic-canvas .atomic-canvas-list-even,
.atomic-canvas .atomic-canvas-list-even.list-accomplishments {
  background: transparent;
  border: 1px solid transparent;
}

.box {
  background: #ffffff1f;
}
</style>