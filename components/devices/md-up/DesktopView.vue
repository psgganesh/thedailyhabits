<template>
  <v-container fluid>
    <v-progress-linear
      :active="loadingState"
      :indeterminate="loadingState"
      absolute
      top
      color="deep-purple accent-4"
    ></v-progress-linear>
    <ActionBar />
    <PanelHeader />
    <Panels />
    <OnBoardingWizard />
  </v-container>
</template>

<script>
import ActionBar from "~/components/devices/md-up/ActionBar";
import OnBoardingWizard from '~/components/OnBoardingWizard';
import PanelHeader from "~/components/devices/md-up/PanelHeader";
import Panels from "~/components/devices/md-up/Panels";
export default {
  name: "DesktopView",
  components: {
    OnBoardingWizard,
    PanelHeader,
    ActionBar,
    Panels
  },
  computed: {
    loadingState: {
      get() {
        return this.$store.state.loading;
      },
      set(value) {
        this.$store.commit("SET_LOADING_STATE", value);
      }
    }
  }
};
</script>
