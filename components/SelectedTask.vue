<template>
  <v-dialog v-model="taskSelected" fullscreen hide-overlay transition="dialog-bottom-transition">
    <v-card max-width="375" class="mx-auto">
      <v-row class="fill-height secondary">
        <v-col cols="12" class="pa-0">
          <v-card-title>
            <v-col cols="4" class="pa-0">
              <v-btn dark icon @click="() => taskSelected = !taskSelected">
                <v-icon>mdi-chevron-left</v-icon>
              </v-btn>
            </v-col>
            <v-col cols="4" class="pa-0 text-center">
              <span class="title white--text">Day 10</span>
            </v-col>
            <v-col cols="4" class="pa-0 text-right">
              <v-btn dark icon>
                <v-icon>mdi-trash-can</v-icon>
              </v-btn>
            </v-col>
          </v-card-title>
        </v-col>
      </v-row>

      <v-container fluid class="grey lighten-5">
        <v-row>
          <v-col cols="12">
            <v-card class="pa-2 text-center" outlined tile>One column</v-card>
          </v-col>
        </v-row>
      </v-container>

      <v-list two-line>
        <v-list-item>
          <v-list-item-icon>
            <v-icon color="blue-grey darken-3">mdi-progress-check</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>I will have breakfast everyday on time</v-list-item-title>
            <v-list-item-subtitle>Saturday 21 Sep</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider inset></v-divider>

        <v-list-item>
          <v-list-item-icon>
            <v-icon color="blue-grey darken-3">mdi-flag-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>1 session a day</v-list-item-title>
            <v-list-item-subtitle>15 minutes everyday</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider inset></v-divider>

        <v-list-item>
          <v-list-item-icon>
            <v-icon color="blue-grey darken-3">mdi-bell</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>5 minutes after check-in time</v-list-item-title>
            <v-list-item-subtitle>Desktop nudge notifications are on</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-bottom-navigation absolute horizontal>
        <v-btn text color="error">
          <span>SNOOZE</span>
          <v-icon>mdi-alarm-snooze</v-icon>
        </v-btn>

        <v-btn text color="success">
          <span>CHECK IT</span>
          <v-icon>mdi-check-all</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "selected-task",
  props: {
    taskSelected: { type: Boolean, default: null }
  }
};
</script>