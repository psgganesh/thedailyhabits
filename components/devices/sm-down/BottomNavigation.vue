<template>
  <v-bottom-navigation v-model="bottomNav" absolute horizontal>
    <v-btn value="home">
      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn value="morning">
      <v-icon>mdi-weather-sunset</v-icon>
    </v-btn>

    <v-btn value="afternoon">
      <v-icon>mdi-white-balance-sunny</v-icon>
    </v-btn>

    <v-btn value="evening">
      <v-icon>mdi-weather-night</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  name: "BottomNavigation",
  data: () => {
    return {
      bottomNav: "home"
    };
  }
};
</script>