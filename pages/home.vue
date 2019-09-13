<template>
<div>
  <div class="row">
    <div class="col-xs-12">
      <Navbar :currentDate="currentDate" @on-date-change="setDate"  />
    </div>
  </div>
  <div id="atomic-app" :style="{ backgroundImage: 'url(' + image + ')', height: '100vh'}">
    <div class="row">
      <div class="col-xs-3 py-5 text-center box">
        <h3 class="text-white" ><a-icon type="pushpin" /> Habits</h3>
      </div>
      <div class="col-xs-9 py-5 text-center dark-box">
        <h3 class="text-white " ><a-icon type="clock-circle" /> Time of the day</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 px-0">
        <div class="atomic-canvas">
          <div class="col-xs-3 px-0">
            <Habits data-v-step="2" />
          </div>
          <div class="col-xs-9">
            <div class="row">
              <div class="col-xs-4 dark-box px-0">
                <Morning data-v-step="3" />
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
  <div class="footer">
    <cookie-law theme="dark-lime"></cookie-law>
  </div>
  <v-tour name="myTour" :steps="steps"></v-tour>
</div>
</template>
<script>
import CookieLaw from 'vue-cookie-law'
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
      currentDate: moment(),
      currentHour: moment().hour(),
      steps: [
        {
          target: '[data-v-step="1"]',
          content: `Howdy there!,, this is where we start, all your habits are categorized by date, you can change dates to display habits of that particular day!!`,
          params: {
            placement: 'bottom'
          }
        },
        {
          target: '[data-v-step="2"]',
          content: 'You can add new habits, here!',
          params: {
            placement: 'right'
          }
        },
        {
          target: '[data-v-step="3"]',
          content: 'Once a habit is added, you can drag / drop that card to any of the time of the day - morning / afternoon / evening',
          params: {
            placement: 'right'
          }
        }
      ]
    }
  },
  components: {
    Habits,
    Morning,
    Afternoon,
    Evening,
    Navbar,
    CookieLaw
  },
  beforeMount() {
    this.$store.commit('SET_SELECTED_DATE', this.currentDate)
    this.loadWorkspace()
  },
  methods: {
    setDate(updatedDate) {
      this.currentDate = updatedDate
      this.loadWorkspace()
      this.$store.commit('SET_SELECTED_DATE', this.currentDate)
    },
    loadWorkspace() {
      this.$store.dispatch('fetchWorkspaceRecords')
      this.$message.success('Listing habits for '+this.currentDate.format('YYYY - MMM - DD'), 1)
    }
  },
  mounted: function () {
    this.$tours['myTour'].start()
  },
  computed: {
    image() {
      return "/images/backgrounds/congruent_outline.png"
    }
  }
}
</script>

<style>
.v-step {
  z-index: 1001;
}
html {
  background-size: cover;
  background-attachment:scroll;
}

.atomic-canvas .atomic-canvas-list,
.atomic-canvas .atomic-canvas-list-even,
.atomic-canvas .atomic-canvas-list-even.list-accomplishments {
  background: transparent;
  border: 1px solid transparent;
}
</style>