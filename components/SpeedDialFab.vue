<template>
  <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
    <template v-slot:activator="{ on }">
      <v-btn fab class="v-action-button" color="secondary" dark v-on="on"><v-icon>mdi-plus</v-icon></v-btn>
    </template>
    <v-card>
      <v-toolbar light color="primary">
        <v-btn icon light @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>New Task / Goal</v-toolbar-title>
        <div class="flex-grow-1"></div>
        <!-- <v-toolbar-items>
          <v-btn dark text @click="dialog = false">Save</v-btn>
        </v-toolbar-items> -->
      </v-toolbar>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'SpeedDialFab',
  data: () => {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
    }
  }
}
</script>