<template>
  <div>
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%'}" >
      <div class="row">
        <div class="col-xs-5">
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
                    <a-avatar :src="user.avatarUrl()" />
                  </template>
                </span>
                {{ username }} </span>
              <a-menu-item key="setting:1"><a-icon type="setting" /> Preferences</a-menu-item>
              <a-menu-item key="setting:3" @click="signOut"><a-icon type="logout" /> Signout</a-menu-item>
            </a-sub-menu>
          </a-menu>
        </div>
      </div>
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
    // console.log('Template - authenticated -- '+this.isAuthenticated);
    // console.log('Template - loggedUser -- '+this.loggedUser.isUserSignedIn());
    if(!this.loggedUser.isUserSignedIn()) {
      this.redirectUserToLandingPage();
    }
    this.userData = this.loggedUser.loadUserData();
    this.user = new Person(this.userData.profile);
    this.username = this.userData.username;
  },
  methods: {
    moment,
    signOut() {
      this.loggedUser.signUserOut(window.location.href);
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