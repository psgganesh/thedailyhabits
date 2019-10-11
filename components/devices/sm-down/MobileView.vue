<template>
  <v-row no-gutters>
    <v-col cols="11" class="px-15">
      <v-alert
        border="bottom"
        colored-border
        type="warning"
        class="yellow"
        elevation="2"
      >This application is best optimized only for desktop now. Future versions will be having a mobile responsive view and also a mobile app soon.</v-alert>
    </v-col>
    <!-- <v-col cols="1" class="px-15"></v-col>
    <v-col cols="8" class="px-15"></v-col>
    <v-col cols="3" class="px-15"></v-col>-->
  </v-row>
</template>

<script>
export default {
  name: "MobileView"
};
</script>