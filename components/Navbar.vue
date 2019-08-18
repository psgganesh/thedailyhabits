<template>
  <div>
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%'}">
      <div class="row">
        <div class="col-xs-10">
          <div class="logo">
            <a-icon type="crown" /> atomic habits
          </div>
        </div>
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

export default {
  name: 'navbar',
  data () {
    return {
      userData: null,
      user: null,
      username: null
    }
  },
  computed: mapGetters([
    'isAuthenticated',
    'loggedUser'
  ]),
  beforeMount () {
    console.log('Template - authenticated -- '+this.isAuthenticated);
    console.log('Template - loggedUser -- '+this.loggedUser.isUserSignedIn());
    if(!this.loggedUser.isUserSignedIn()) {
      this.redirectUserToLandingPage();
    }

    this.userData = this.loggedUser.loadUserData()
    this.user = new Person(this.userData.profile)
    this.username = this.userData.username
    
  },
  methods: {
    signOut () {
      this.loggedUser.signUserOut(window.location.href);
    },
    redirectUserToLandingPage() {
      window.location = `/`;
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
</style>