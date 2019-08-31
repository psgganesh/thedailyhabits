<template>
  <div>
    <a-layout-header  :style="{ position: 'fixed', zIndex: 1, width: '100%'}" >
      <a-row type="flex">
        <a-col :span="4" :order="1">
          <h1 class="text-white" :style="{ float: 'left', marginTop: '10px' }">
            <a-icon :style="{ float: 'left'}" type="calendar" class="text-white" /> 
            <a-date-picker :style="{ float: 'left', paddingLeft:'10px'}" @change="onChange" :defaultValue="moment(currentDate, dateFormat)" :format="dateFormat" :allowClear="false" />
          </h1>
        </a-col>
        <a-col :span="2" :order="2">2 col-order-3</a-col>
        <a-col :span="5" :order="3">2 col-order-3</a-col>
        <a-col :span="1" :order="4">
          <a-avatar :size="48" src="https://getatomichabits.com/images/app-blockstack.png" />
        </a-col>
        <a-col :span="5" :order="5">3 col-order-2</a-col>
        <a-col :span="6" :order="6">4 col-order-1</a-col>
      </a-row>
    </a-layout-header>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { Person } from 'blockstack'
import moment from 'moment'

export default {
  name: 'navbar',
  data () {
    return {
      collapsed: false,
      userData: null,
      user: null,
      username: null,
      dateFormat: 'YYYY - MMM - DD'
    }
  },
  props: {
    currentDate: { type: Object, default: moment() }
  },
  computed: mapGetters([
    'isAuthenticated',
    'loggedUser'
  ]),
  beforeMount () {
    if(!this.loggedUser.isUserSignedIn()) {
      this.redirectUserToLandingPage();
    }
    this.userData = this.loggedUser.loadUserData();
    this.user = new Person(this.userData.profile);
    this.username = this.userData.username;
  },
  methods: {
    moment,
    resetData() {
      this.$store.dispatch('resetData')
    },
    signOut() {
      this.$store.dispatch('saveWorkspaceAndSignout', this.currentDate)
    },
    redirectUserToLandingPage() {
      window.location = `/`;
    },
    onChange(date, dateString) {
      this.$emit('on-date-change', date)
    }
  }
}
</script>

<style>
.logo {
  margin: 0 10px;
  color: #ffffff;
  font-size: 1.3rem;
  float: left;
}
.ant-layout-header {
  padding: 0 10px;
}
</style>