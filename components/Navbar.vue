<template>
  <div>
    <a-layout-header  :style="{ position: 'fixed', zIndex: 1, width: '100%'}" >
      <a-row type="flex">
        <a-col :span="4" :order="1">
          <h1 class="text-white" :style="{ float: 'left', marginTop: '10px' }">
            <a-avatar shape="square" slot="avatar" :style="{ float: 'left'}" src="/images/calendar.png" />
            <a-date-picker :style="{ float: 'left', paddingLeft:'10px'}" @change="onChange" :defaultValue="moment(currentDate, dateFormat)" :format="dateFormat" :allowClear="false" 
            data-v-step="1"
            />
          </h1>
        </a-col>
        <a-col class="text-white" :span="7" :order="3"></a-col>
        <a-col class="text-white" :span="1" :order="4">
          <a-avatar :size="48" src="https://getatomichabits.com/images/app-blockstack.png" />
        </a-col>
        <a-col class="text-white" :span="8" :order="5"></a-col>
        <a-col class="text-white" :span="4" :order="6">
          <a-menu mode="horizontal" class="transparent-box bb-0 text-white" >
            <a-sub-menu>
              <span slot="title" class="submenu-title-wrapper">
                <span v-if="user.avatarUrl()">
                  <template>
                    <a-avatar shape="square" :src="user.avatarUrl()" />
                  </template>
                </span> {{ username }} </span>
              <!-- <a-menu-item-group title="User Preferences">
                <a-menu-item key="setting:1" @click="() => {}"><a-icon type="user" /> Profile</a-menu-item>
                <a-menu-item key="setting:2" @click="() => {}"><a-icon type="setting" /> Settings</a-menu-item>
              </a-menu-item-group>
              <a-menu-divider /> -->
              <a-menu-item-group title="Personalization &amp; Data">
                <a-menu-item key="setting:3" @click="resetData"><a-icon type="delete" /> Format &amp; Reset Data</a-menu-item>
              </a-menu-item-group>
              <a-menu-divider />
                <a-menu-item key="setting:4" @click="signOut"><a-icon type="logout" /> Signout</a-menu-item>
            </a-sub-menu>
          </a-menu>
        </a-col>
      </a-row>
    </a-layout-header>
  </div>


  <!-- <div class="col-xs-5">
      <a-date-picker @change="onChange" :defaultValue="moment(currentDate, dateFormat)" :format="dateFormat" :allowClear="false" />
    </div>
    <div class="col-xs-2 text-white text-center">
      <div class="logo text-center">
        <a-icon type="crown" /> atomic habits
      </div>
    </div>
    <div class="col-xs-3 text-white" />
    <div class="col-xs-2 pull-right">
      <a-menu mode="horizontal" class="transparent-box bb-0 text-white" >
        <a-sub-menu>
          <span slot="title" class="submenu-title-wrapper">
            <span v-if="user.avatarUrl()">
              <template>
                <a-avatar shape="square" :src="user.avatarUrl()" />
              </template>
            </span> {{ username }} </span>
          <a-menu-item-group title="User Preferences">
            <a-menu-item key="setting:1" @click="() => {}"><a-icon type="user" /> Profile</a-menu-item>
            <a-menu-item key="setting:2" @click="() => {}"><a-icon type="setting" /> Settings</a-menu-item>
          </a-menu-item-group>
          <a-menu-divider />
          <a-menu-item-group title="Personalization &amp; Data">
            <a-menu-item key="setting:3" @click="resetData"><a-icon type="delete" /> Format &amp; Reset Data</a-menu-item>
          </a-menu-item-group>
          <a-menu-divider />
            <a-menu-item key="setting:4" @click="signOut"><a-icon type="logout" /> Signout</a-menu-item>
        </a-sub-menu>
      </a-menu>
    </div> -->

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