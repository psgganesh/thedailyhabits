<template>
  <v-row no-gutters class="light-background">
    <v-col cols="3" class="text-center">
      <v-container fluid>
        <v-row no-gutters>
          <v-col cols="6" class="text-right">
            <img src="/icons/appointment.png" width="36px" />
          </v-col>
          <v-col cols="6" class="text-left pt-2">
            <span class="font-weight-bold textinfo pl-3 ga-nunito" :class="colorScheme">Habits</span>
          </v-col>
        </v-row>
      </v-container>
    </v-col>
    <v-col cols="3" class="text-center">
      <v-container fluid>
        <v-row no-gutters>
          <v-col cols="6" class="text-right">
            <img src="/icons/dawn.png" width="36px" />
          </v-col>
          <v-col cols="6" class="text-left pt-2">
            <span class="font-weight-bold textinfo pl-3 ga-nunito" :class="colorScheme">Morning</span>
          </v-col>
        </v-row>
      </v-container>
    </v-col>
    <v-col cols="3" class="text-center">
      <v-container fluid>
        <v-row no-gutters>
          <v-col cols="6" class="text-right">
            <img src="/icons/cloud.png" width="36px" />
          </v-col>
          <v-col cols="6" class="text-left pt-2">
            <span class="font-weight-bold textinfo pl-3 ga-nunito" :class="colorScheme">Afternoon</span>
          </v-col>
        </v-row>
      </v-container>
    </v-col>
    <v-col cols="3" class="text-center">
      <v-container fluid>
        <v-row no-gutters>
          <v-col cols="6" class="text-right">
            <img src="/icons/cloudy-night.png" width="36px" />
          </v-col>
          <v-col cols="6" class="text-left pt-2">
            <span class="font-weight-bold textinfo pl-3 ga-nunito" :class="colorScheme">Evening</span>
          </v-col>
        </v-row>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "PanelHeader",
  computed: {
    ...mapGetters(["theme", "colorScheme"])
  }
};
</script>