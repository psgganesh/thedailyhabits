<template>
<div class="pa-2">

  <v-row>
    <v-col>
      <v-card color="info" dark >
        <v-card-text class="white--text">
          <div class="headline mb-2">Choose using template</div>
          Just pick a goal and choose your options and you will be all set with a your new goal to track.
        </v-card-text>
        <v-card-actions>
          <div class='flex-grow-1'></div>
          <v-btn nuxt to="/home/template" text>Pick a template</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>

  <v-row>
    <v-col cols='12' class="text-center">
        <span class="headline">OR</span>
    </v-col>
  </v-row>

  <v-row>
    <v-col>
      <v-card color="accent" dark >
        <v-card-text class="white--text">
          <div class="headline mb-2">Set your own task / goal</div>
          Define your own goal, setup how you would want to measure them and get ready to track them.
        </v-card-text>
        <v-card-actions>
          <div class='flex-grow-1'></div>
          <v-btn nuxt to="/home/custom" text>Define goal</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>

</div>
</template>

<script>
export default {
  name: 'NewTaskAddForm',
  mounted() {
    console.log(this.$router)
  }
}
</script>