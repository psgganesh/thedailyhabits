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
          <a-menu v-model="current" mode="horizontal" class="transparent-box bb-0 text-white" >
            <a-sub-menu>
              <span slot="title" class="submenu-title-wrapper"><a-icon type="user" />@psgganesh</span>
              <a-menu-item-group title="Item 1">
                <a-menu-item key="setting:1">Option 1</a-menu-item>
                <a-menu-item key="setting:2">Option 2</a-menu-item>
              </a-menu-item-group>
              <a-menu-item-group title="Item 2">
                <a-menu-item key="setting:3">Option 3</a-menu-item>
                <a-menu-item key="setting:4">Option 4</a-menu-item>
              </a-menu-item-group>
            </a-sub-menu>
          </a-menu>
        </div>
      </div>
    </a-layout-header>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'navbar',
  data () {
    return {
      current: ['mail'],
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