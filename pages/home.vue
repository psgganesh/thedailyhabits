<template>
<div>
  <div class="row">
      <div class="col-xs-12">
        <Navbar :currentDate="currentDate" @on-date-change="setDate" />
      </div>
    </div>
  <div id="atomic-app">
    <div class="row">
      <div class="col-xs-3 py-5 text-center box">
        <h3 class="text-white" ><a-icon type="pushpin" /> Habits</h3>
      </div>
      <div class="col-xs-9 py-5 text-center dark-box">
        <h3 class="text-white " ><a-icon type="calendar" /> Reminders</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 px-0">
        <div class="atomic-canvas">
          <div class="col-xs-3 px-0">
            <Habits />
          </div>
          <div class="col-xs-9">
            <div class="row">
              <div class="col-xs-4 dark-box px-0">
                <Morning />
              </div>
              <div class="col-xs-4 box px-0">
                <Afternoon />
              </div>
              <div class="col-xs-4 dark-box px-0">
                <Evening />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import Habits from '~/components/panels/Habits';
import Morning from '~/components/panels/Morning';
import Afternoon from '~/components/panels/Afternoon';
import Evening from '~/components/panels/Evening';
import Navbar from '~/components/Navbar';
import moment from 'moment';

export default {
  name: 'vertical',
  layout: 'simple',
  data() {
    return {
      currentDate: moment()
    }
  },
  components: {
    Habits,
    Morning,
    Afternoon,
    Evening,
    Navbar
  },
  beforeMount() {
    this.loadWorkspace()
  },
  methods: {
    setDate(updatedDate) {
      this.currentDate = updatedDate
      this.loadWorkspace()
    },
    loadWorkspace() {
      this.$store.dispatch('fetchWorkspaceRecords', this.currentDate.format('YYYYMMDD'))
      this.$message.success('Listing habits for '+this.currentDate.format('YYYY - MMM - DD'), 2)
    }
  }
}
</script>

<style>
#atomic-app {
  background: url('/img/3.jpg');
  background-size: cover;
  background-attachment:scroll;
  padding: 15px;
  padding-top: 48px;
}

.atomic-canvas .atomic-canvas-list,
.atomic-canvas .atomic-canvas-list-even,
.atomic-canvas .atomic-canvas-list-even.list-accomplishments {
  background: transparent;
  border: 1px solid transparent;
}
</style>