<template>
  <v-btn
    nuxt
    to="/habit/create"
    class="hidden-md-and-up"
    color="pink"
    fab
    dark
    absolute
    bottom
    right
  >
    <v-icon>mdi-plus</v-icon>
  </v-btn>
</template>

<script>
export default {
  name: "AddNewHabitButton"
};
</script>