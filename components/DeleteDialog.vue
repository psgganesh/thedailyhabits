<template>
    <v-dialog v-model="dialog" persistent max-width="290">
      <template v-slot:activator="{ on }">
        <v-icon v-on="on">mdi-trash-can</v-icon>
      </template>
      <v-card>
        <v-card-title class="headline"></v-card-title>
        <v-card-text>Do you want to delete:
           <v-divider></v-divider>
            <v-card-text>
              <v-radio-group v-model="dialogm1" column>
                <v-radio label="Today's Habit" value="today"></v-radio>
                <v-radio label="All occurrences of this habit" value="all"></v-radio>
              </v-radio-group>
            </v-card-text>
            <v-divider></v-divider>
        </v-card-text>
        <v-card-actions>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="remove(item)">Save</v-btn>
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
        dialogm1: ''
      }
    },

    methods: {
      remove(habit) {
        this.dialog = false;
        console.log("dialogm1", this.dialogm1);
        console.log("remove", habit);
        if(this.dialogm1 == "today"){
          this.$store.dispatch("skipTodo", habit);
        }else if(this.dialogm1 == "all"){
          this.$store.dispatch("RemoveAllOccurrences", habit);
        }
      }
    }
  }
</script>