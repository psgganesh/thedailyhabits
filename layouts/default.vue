<template>
  <a-layout>
    <navbar />
    <div class="atomic-canvas-root">
      <a-layout-content>
        <nuxt />
      </a-layout-content>
    </div>
  </a-layout>
</template>

<script>
import Navbar from '~/components/Navbar'
export default {
  components: {
    Navbar
  }
}
</script>