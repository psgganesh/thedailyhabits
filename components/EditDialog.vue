<template>
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <template v-slot:activator="{ on }">
        <v-icon v-on="on">mdi-pencil</v-icon>
      </template>
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Edit Task / Goal</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="updateHabit()">Save</v-btn>
          </v-toolbar-items>
        </v-toolbar>
       <v-stepper v-model="wizardStep" vertical light class="mt-2">
          <v-stepper-step step="1" editable color="secondary">Choose Category</v-stepper-step>
          
          <v-stepper-content step="1" color="secondary">
              <v-list-item 
                color="indigo"
                v-for="item in categoriesData"
                :key="item.slug"
                @click="chooseCategory(item)"
                :class="classExtraction(item, 'category')"
              >
                <v-list-item-avatar>
                  <v-icon :class="[item.iconClass]" v-text="item.icon"></v-icon>
                </v-list-item-avatar>
                <v-list-item-content >
                  <v-list-item-title v-text="item.title"></v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                  <v-chip class="ma-2">
                    {{ item.count }}
                  </v-chip>
                </v-list-item-action>
              </v-list-item>
          </v-stepper-content>
          <!--end chooseCategory-->

          <v-stepper-step step="2" editable color="secondary">Choose Activity</v-stepper-step>
          <v-stepper-content step="2" color="secondary">
            <v-list-item 
              v-for="item in activitiesData[categorySlug]"
              :key="item.slug"
              @click="chooseActivity(item)"
              :class="classExtraction(item, 'activity')"
            >
              <v-list-item-avatar>
                <v-icon :class="[item.iconClass]" v-text="item.icon"></v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-stepper-content>
          <!--end chooseActivity-->

          <v-stepper-step step="3" editable color="secondary">Select Option</v-stepper-step>
          <v-stepper-content step="3" color="secondary" id="questions_list">
            <v-list label>
              <v-list-item-group olor="green" v-if="questionCustom == false" >
                <v-list-item
                  v-for="question in questionsData[questionSlug]"
                  :key="question.id"
                  three-line
                  class="outlined mb-2 select-option"
                  :class="classExtraction(item, 'question')"
                >
                  <template v-if="question.custom === true">
                    <v-list-item-content>
                      <v-row>
                        <v-col cols="12">
                          <v-textarea
                            outlined
                            auto-grow
                            clear-icon
                            clearable
                            solo
                            name="input-7-4"
                            v-model="customQuestionOption"
                            label="Example: I will ______ daily."
                            @keyup.enter.exact="selectOption(question)"
                            hint="Press enter to move to next step"
                          ></v-textarea>
                        </v-col>
                      </v-row>
                    </v-list-item-content>
                  </template>
                  <template v-else>
                    <v-list-item-content @click="selectOption(question)">
                      <v-list-item-title class="subtitle-2 text--black">{{ question.option }}</v-list-item-title>
                    </v-list-item-content>
                  </template>
                </v-list-item>
              </v-list-item-group>

              <v-container fluid v-else>
                <v-row>
                  <v-col cols="12">
                    <v-textarea
                      outlined
                      auto-grow
                      clear-icon
                      clearable
                      solo
                      name="input-7-4"
                      v-model="customQuestionOption"
                      label="Example: I would run 10k steps everyday."
                    ></v-textarea>
                  </v-col>
                </v-row>
              </v-container>
            </v-list>
          </v-stepper-content>

          <v-stepper-step step="4" editable color="secondary">Set Schedule</v-stepper-step>
          <v-stepper-content step="4" color="secondary">
            <v-container fluid>
              <v-row>
                <v-col cols="12" class="d-none">
                  <v-menu v-model="datepickerMenu" :close-on-content-click="false" max-width="290">
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        :value="computedDateFormattedMomentjs"
                        label="Start date"
                        readonly
                        solo
                        disabled
                        v-on="on"
                        prepend-inner-icon="mdi-calendar"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="startsFromDate" @change="datepickerMenu = false"></v-date-picker>
                  </v-menu>
                </v-col>
                <v-col cols="12">
                  <v-select
                    :items="items"
                    item-text="text"
                    item-value="value"
                    v-model="computedMinDaysToRepeatValue"
                    label="Choose, number of days to repeat"
                    solo
                    prepend-inner-icon="mdi-repeat"
                    @change="selectSchedule()"
                  ></v-select>
                </v-col>
              </v-row>
            </v-container>

          </v-stepper-content>
        </v-stepper>
      </v-card>
    </v-dialog>
</template>




<script>
import moment from "moment";
import { mapGetters } from "vuex";
import { uuidv4 } from "~/utils/helpers";
import { taskStructure, scoreStructure } from "~/utils/schema";
  export default {
    name: "TaskTemplateForm",
    layout: "wizard",
    props: {
      item: {
          type: Object,
          default: function () { return {} }
      },
    },

    data: () => {
      return {
        datepickerMenu: false,
        loading: false,
        wizardStep: 1,
        selection: 1,
        selectedCategory: null,
        selectedActivity: null,
        selectedMessageOption: null,
        minDaysToRepeatValue: "",
        startsFromDate: null,
        endsOn: null,
        calculateScores: false,
        customQuestionOption: null,

        selectedCategorySlug: null,
        selectedActivitySlug: null,
        finishButtonDisabledState: true,
        items: [
          { text: "Follow / repeat this habit for 21 days", value: "21" },
          { text: "Follow / repeat this habit for 42 days", value: "42" },
          { text: "Follow / repeat this habit for 30 days", value: "30" },
          { text: "Follow / repeat this habit for 66 days", value: "66" },
          { text: "Follow / repeat this habit for 90 days", value: "90" }
        ],
        dialog: false,
      };
    },
  
    computed: {
      ...mapGetters(
        [
          "categoriesData", 
          "activitiesData", 
          "questionsData", 
         
      ]),
       
      categorySlug() {
        return this.selectedCategorySlug == null ? this.item.category : this.selectedCategorySlug;
      },
      checkActivityCase(){
        return (/\s/g.test(this.item.activity)) ? this.item.activity.replace(/\s+/g, '_').toLowerCase() : this.item.activity.toLowerCase();
      },
        
      checkQuestionType(){
        //let checkActivityCase = (/\s/g.test(this.item.activity)) ? this.item.activity.replace(/\s+/g, '_').toLowerCase() : this.item.activity.toLowerCase();
        return this.questionsData[this.checkActivityCase].map(ques => {
                  let checkOption = (/\s/g.test(ques.option)) ? ques.option.replace(/\s+/g, '-').toLowerCase() : ques.option.toLowerCase();
                  let checkTitle = (/\s/g.test(this.item.title)) ? this.item.title.replace(/\s+/g, '-').toLowerCase() : this.item.title.toLowerCase();
                  
                  if( checkOption == checkTitle){ return false; }
                  else{ return true; }
                }).includes(true);
      },
      questionCustom() {
       return this.selectedActivitySlug == null ? false : this.checkQuestionType;
      },
      questionSlug() {
        if(this.questionCustom == true){
           this.customQuestionOption = this.item.title;
        }
        return this.selectedActivitySlug != null ? this.selectedActivitySlug : ( /\s/g.test(this.item.activity) ? this.item.activity.replace(/\s+/g, '_').toLowerCase() : this.item.activity.toLowerCase() );
      },
      computedDays() {
        return moment(this.item.endsOn).diff(this.item.startsFrom, "days").toString();
      },
      computedstartsFromDate: {
        get: function () {
          return this.startsFromDate != null ?  this.startsFromDate : new Date().toISOString().substr(0, 10);
        },
        set: function (newValue) {
          if(newValue !=  null && newValue != ""){
            this.startsFromDate = newValue;
          }
        }
      },
      computedMinDaysToRepeatValue: {
        get: function () {
          return this.minDaysToRepeatValue != "" ?  this.minDaysToRepeatValue : this.computedDays;
        },
        set: function (newValue) {
          if(newValue !=  null && newValue != ""){
            this.minDaysToRepeatValue = String(newValue);
          }
        }
      },
      computedDateFormattedMomentjs() {
        return this.startsFromDate
          ? moment(this.startsFromDate).format("dddd, MMMM Do YYYY")
          : "";
      }
    },

    methods: {
      chooseCategory(category) {
        this.selectedCategory = category;
        this.selectedCategorySlug = category.slug;
        this.wizardStep++;
      },
      chooseActivity(activity) {
        this.selectedActivity = activity;
        this.selectedActivitySlug = activity.slug;
        this.wizardStep++;
      },
      selectOption(question) {
        if (question !== null) {
          if (question.custom === true) {
            this.selectedMessageOption = this.customQuestionOption;
          } else {
            this.selectedMessageOption = question.option;
          }
          this.wizardStep++;
        }
      },
      selectSchedule() {
        this.calculateScores = true;
        this.endsOn = moment(this.computedstartsFromDate).add(
          parseInt(this.computedMinDaysToRepeatValue),
          "day"
        );
        this.finishButtonDisabledState = false;
      },
      discardConfirmDialog() {
        this.confirmDialog = false;
      },
      updateHabit() {
        const habit = taskStructure();
        habit.id = this.item.id
        habit.title = (this.questionCustom == false ) ? 
        ((this.selectedMessageOption != null) ? this.selectedMessageOption : this.item.title ) :
        ((this.customQuestionOption != null) ? this.customQuestionOption : this.item.title ); // task / habit title,
        habit.parent = "habits";
        habit.icon = (this.selectedCategory != null) ? this.selectedCategory.icon : this.item.icon;
        habit.iconClass = (this.selectedCategory != null) ? this.selectedCategory.iconClass : this.item.iconClass; 
        habit.category = (this.selectedCategory != null) ? this.selectedCategory.slug : this.item.category; // ( Optional ) main-category / general
        habit.activity = (this.selectedActivity != null) ? this.selectedActivity.title : this.item.activity; // ( Optional ) tag for activity
        habit.recurring = true; // Boolean
        habit.startsFrom = (this.startsFromDate != null) ? moment(this.startsFromDate) : this.item.startsFrom;
        habit.endsOn = (this.endsOn != null) ? moment(this.endsOn) : this.item.endsOn; // moment().format('YYYYMMDD') last date
        habit.scores = (this.calculateScores == false) ? this.item.scores : scoreStructure(); // scores template from the schema.js
        habit.createdOn = this.item.createdOn; // date when task was created on
        habit.lastUpdatedOn = moment(); // latest updated date when task status was changed / detail was changed
        this.$store.dispatch("updateHabit", habit);
        
        this.dialog = false;
      },
      classExtraction(item, type) {
        if(type == 'category'){
          if(item.slug == this.item.category)
              return "blue lighten-4"
        }

        if(type == 'activity'){
          if(item.title == this.item.activity)
              return "blue lighten-4"
        }

        if(type == 'question'){
          if(item.title == this.item.title){
            return "blue lighten-4"
          } 
        }
       
      },
     
    }//end method

}
</script>