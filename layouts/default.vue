<template>
  <a-layout id="components-layout-top" class="layout">
    <navbar />
    <a-layout-content>
      <nuxt />
    </a-layout-content>
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