<template>
  <div id="content">
    <a href="#" class="button--green" @click.prevent="signIn" >Sign In With Blockstack</a>  
  </div>
</template>

<script>
export default {
  name: 'landing',
  layout: 'simple',
  asyncData({ store, route, userSession }) {
    return {
      userSession
    }
  },
  beforeMount () {
    const session = this.userSession

    if(session === undefined) {
      window.location = `/`
    }

    if(session.isUserSignedIn()) {
      window.location = `/template`
    }

    if(!session.isUserSignedIn() && session.isSignInPending()) {
      session.handlePendingSignIn()
      .then((userData) => {
        if(!userData.username) {
          throw new Error('This app requires a username.')
        }
        window.location = `/template`
      })
    }
  },
  methods: {
    signIn () {
      this.userSession.redirectToSignIn()
    }
  }
};
</script>

<style>

</style>