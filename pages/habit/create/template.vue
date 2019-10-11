<template>
  <v-container class="mb-0 pa-0">
    <v-row>
      <v-col>
        <v-stepper v-model="wizardStep" vertical light class="mt-2">
          <v-stepper-step step="1" editable color="secondary">Choose Category</v-stepper-step>
          <v-stepper-content step="1" color="secondary">
            <v-list-item
              v-for="item in categoriesData"
              :key="item.title"
              @click="chooseCategory(item)"
            >
              <v-list-item-avatar>
                <v-icon :class="[item.iconClass]" v-text="item.icon"></v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>
              <v-list-item-action>
                <v-chip class="ma-2">{{ item.count }}</v-chip>
              </v-list-item-action>
            </v-list-item>
          </v-stepper-content>

          <v-stepper-step step="2" editable color="secondary">Choose Activity</v-stepper-step>
          <v-stepper-content step="2" color="secondary">
            <v-list-item
              v-for="item in activitiesData[selectedCategorySlug]"
              :key="item.title"
              @click="chooseActivity(item)"
            >
              <v-list-item-avatar>
                <v-icon :class="[item.iconClass]" v-text="item.icon"></v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-stepper-content>

          <v-stepper-step step="3" editable color="secondary">Select Option</v-stepper-step>
          <v-stepper-content step="3" color="secondary" id="questions_list">
            <v-list label>
              <v-list-item-group color="green">
                <v-list-item
                  v-for="question in questionsData[questionSlug]"
                  :key="question.id"
                  three-line
                  class="outlined mb-2 select-option"
                  @click="selectOption(question)"
                >
                  <v-list-item-content>
                    <v-list-item-title class="subtitle-2 text--black">{{ question.option }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-stepper-content>

          <v-stepper-step step="4" editable color="secondary">Set Schedule</v-stepper-step>
          <v-stepper-content step="4" color="secondary">
            <v-container fluid>
              <v-row>
                <v-col cols="6">
                  <v-menu v-model="datepickerMenu" :close-on-content-click="false" max-width="290">
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        :value="computedDateFormattedMomentjs"
                        label="Start date"
                        readonly
                        solo
                        v-on="on"
                        prepend-inner-icon="mdi-calendar"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="startsFromDate" @change="datepickerMenu = false"></v-date-picker>
                  </v-menu>
                </v-col>
                <v-col cols="6">
                  <v-select
                    :items="items"
                    :item-value="minDaysToRepeatValue"
                    label="Choose, number of days to repeat"
                    solo
                    prepend-inner-icon="mdi-repeat"
                    @change="selectSchedule()"
                  ></v-select>
                </v-col>
              </v-row>
            </v-container>

            <v-btn
              color="success"
              :disabled="finishButtonDisabledState"
              block
              large
              @click="buildHabit"
            >Create habit</v-btn>
          </v-stepper-content>
        </v-stepper>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import moment from "moment";
import { mapGetters } from "vuex";
import { uuidv4 } from "~/utils/helpers";
import { taskStructure, scoreStructure } from "~/utils/schema";

export default {
  name: "TaskTemplateForm",
  layout: "wizard",
  data: () => {
    return {
      datepickerMenu: false,
      loading: false,
      wizardStep: 1,
      selection: 1,
      selectedActivity: null,
      selectedCategorySlug: null,
      selectedCategory: null,
      selectedMessageOption: null,
      finishButtonDisabledState: true,
      startsFromDate: new Date().toISOString().substr(0, 10),
      minDaysToRepeatValue: "21",
      endsOn: null,
      items: [
        { text: "Follow / repeat this habit for 21 days", value: "21" },
        { text: "Follow / repeat this habit for 42 days", value: "42" },
        { text: "Follow / repeat this habit for 30 days", value: "30" },
        { text: "Follow / repeat this habit for 66 days", value: "66" },
        { text: "Follow / repeat this habit for 90 days", value: "90" }
      ]
    };
  },
  methods: {
    chooseCategory(category) {
      this.selectedCategory = category;
      this.selectedCategorySlug = category.slug;
      this.wizardStep++;
    },
    chooseActivity(activity) {
      this.selectedActivity = activity;
      this.wizardStep++;
    },
    selectOption(option) {
      if (option !== null) {
        this.selectedMessageOption = option;
        this.wizardStep++;
      }
    },
    selectSchedule() {
      this.endsOn = moment(this.startsFromDate).add(
        parseInt(this.minDaysToRepeatValue),
        "day"
      );
      this.finishButtonDisabledState = false;
    },
    discardConfirmDialog() {
      this.confirmDialog = false;
    },
    buildHabit() {
      const habit = taskStructure();
      habit.id = uuidv4(); // uuid to be added
      habit.title = this.selectedMessageOption.option; // task / habit title,
      habit.parent = "habits";
      habit.icon = this.selectedCategory.icon;
      habit.iconClass = this.selectedCategory.iconClass;
      habit.category = this.selectedCategory.slug; // ( Optional ) main-category / general
      habit.activity = this.selectedActivity.title; // ( Optional ) tag for activity
      habit.recurring = true; // Boolean
      habit.startsFrom = moment(this.startsFromDate);
      habit.endsOn = moment(this.endsOn); // moment().format('YYYYMMDD') last date
      habit.scores = scoreStructure(); // scores template from the schema.js
      habit.createdOn = moment(); // date when task was created on
      habit.lastUpdatedOn = null; // latest updated date when task status was changed / detail was changed
      this.$store.dispatch("createHabit", habit);
      this.$router.push({ name: "home" });
    }
  },
  computed: {
    ...mapGetters(["categoriesData", "activitiesData", "questionsData"]),
    questionSlug() {
      return this.selectedActivity !== null ? this.selectedActivity.slug : "";
    },
    computedDateFormattedMomentjs() {
      return this.startsFromDate
        ? moment(this.startsFromDate).format("dddd, MMMM Do YYYY")
        : "";
    }
  }
};
</script>