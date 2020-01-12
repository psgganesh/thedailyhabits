<template>
    <v-dialog v-model="dialog" persistent max-width="290">
      <template v-slot:activator="{ on }">
        <v-btn small text outlined v-on="on">SKIP</v-btn>
      </template>
      <v-card>
        <v-card-title class="headline"></v-card-title>
        <v-card-text>Are you sure you want to skip?</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">NO</v-btn>
          <v-btn color="green darken-1" text @click="skipTodo(item)">YES</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
import moment from "moment";
  export default {

    props: {
      item: {
          type: Object,
          default: function () { return {} }
      },
    },

    data () {
      return {
        dialog: false,
      }
    },

    methods: {
      skipTodo(habit) {
        this.dialog = false;
        this.$store.dispatch("skipTodo", habit);
        //this.snackbar = true;
      }
    }
  }
</script>