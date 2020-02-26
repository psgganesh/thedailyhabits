<template>
  <v-dialog light v-model="onBoardingModal" max-width="600">
    <v-card
      class="mx-auto"
    >
      <v-card-title class="title font-weight-regular justify-space-between">
        <span>{{ currentTitle }}</span>
        <v-avatar
          color="primary lighten-2"
          class="subheading white--text"
          size="24"
          v-text="step"
        ></v-avatar>
      </v-card-title>

      <v-window v-model="step">
        <v-window-item :value="1">
          <v-divider></v-divider>
          <div class="pa-4 text-center">
            <v-img
              class="mb-4"
              contain
              height="128"
              src="/logo.png"
            ></v-img>
            <h3 class="title font-weight-light mb-2">Welcome to thedailyhabits.com</h3>
            <span class="caption green--text">Thanks for signing up!</span>
          </div>
        </v-window-item>

        <v-window-item :value="2">
          <v-divider></v-divider>
          <div class="pa-4 text-center">
            <v-img
              class="mb-4"
              contain
              src="/onboarding/1.png"
            ></v-img>
            <h3 class="title font-weight-light mb-2">Start off by clicking "Add new habit" button on top left...</h3>
          </div>
        </v-window-item>

        <v-window-item :value="3">
          <v-divider></v-divider>
          <div class="pa-4 text-center">
            <v-img
              class="mb-4"
              contain
              src="/onboarding/2.png"
            ></v-img>
            <h3 class="title font-weight-light mb-2">You can select preloaded habits grouped by category...</h3>
          </div>
        </v-window-item>


        <v-window-item :value="4">
          <v-divider></v-divider>
          <div class="pa-4 text-center">
            <v-img
              class="mb-4"
              contain
              src="/onboarding/4.png"
            ></v-img>
            <h3 class="title font-weight-light mb-2">Added habits will add under habits column...</h3>
          </div>
        </v-window-item>


        <v-window-item :value="5">
          <v-divider></v-divider>
          <div class="pa-4 text-center">
            <v-img
              class="mb-4"
              contain
              src="/onboarding/5.png"
            ></v-img>
            <h3 class="title font-weight-light mb-2">You can " drag-drop " habits as per your day's schedule....</h3>
          </div>
        </v-window-item>


        <v-window-item :value="6">
          <v-divider></v-divider>
          <div class="pa-4 text-center">
            <h1>
              🎉
            </h1>
            <h3 class="title font-weight-light mb-2">You are all set, you can start off stacking habits and track them by marking each Done / Skip</h3>
          </div>
        </v-window-item>
      </v-window>

      <v-divider></v-divider>

      <v-card-actions>
        <v-btn
          :disabled="step === 1"
          text
          @click="step--"
        >
          Back
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          v-show="step !== 6"
          color="primary"
          depressed
          @click="step++"
        >
          Next
        </v-btn>
        <v-btn
          v-show="step === 6"
          color="success"
          depressed
          @click="close"
        >
          Finish
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'OnBoardingWizard',
  data: () => ({
    step: 1,
  }),
  computed: {
    onBoardingModal: {
      get() {
        return this.$store.state.showWalkthroughModal;
      },
      set(value) {
        this.$store.commit('SET_ON_BOARDING_WIZARD_STATE', value);
      }
    },
    currentTitle () {
      switch (this.step) {
        case 1: return 'Hello there 👋'
        case 2: return 'Behold, your habits dashboard 🍻'
        case 3: return 'Create habits using our wizard 🧙'
        case 4: return 'All habits stacked at one place 🧱'
        case 5: return 'Drag-drop habits to respective sections'
        default: return 'All set sparky 🎊'
      }
    }
  },
  methods: {
    close() {
      this.onBoardingModal = false;
    }
  }
}
</script>