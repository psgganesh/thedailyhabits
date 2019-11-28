<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <!-- <template v-slot:activator="{ on }">
        <v-btn color="red lighten-2" dark v-on="on">Click Me</v-btn>
      </template>-->

      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>User Info</v-card-title>

        <v-card-text>
          <v-alert>This application is heavily optimized for desktop devices.</v-alert>

          <h5>Known issues</h5>
          <ul>
            <li>Limited functionalities are available for mobile / tablet devices.</li>
            <li>Users are currently unable to mark a task as done / skip a task over mobile devices.</li>
          </ul>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false">I accept</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  created() {
    if (this.$device.isMobile) {
      this.dialog = true;
    }
  },
  data() {
    return {
      dialog: false
    };
  }
};
</script>