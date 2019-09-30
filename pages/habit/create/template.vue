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
          <v-stepper-content step="3" color="secondary" class="ma-2 pa-2" id="questions_list">
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
            <v-btn
              color="success"
              :disabled="finishButtonDisabledState"
              block
              large
              @click="buildHabit"
            >Finish</v-btn>
            <!-- {{ selectedCategorySlug }} - {{ selectedActivity?.title }} - {{ selectedMessageOption?.option }} -->
          </v-stepper-content>
        </v-stepper>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import moment from "moment";
import { mapGetters } from "vuex";
import { taskStructure, scoreStructure } from "~/utils/schema";

export default {
  name: "TaskTemplateForm",
  layout: "wizard",
  data: () => {
    return {
      loading: false,
      wizardStep: 1,
      selection: 1,
      selectedActivity: null,
      selectedCategorySlug: null,
      selectedCategory: null,
      selectedMessageOption: null,
      finishButtonDisabledState: true
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
        this.finishButtonDisabledState = false;
      }
    },
    discardConfirmDialog() {
      this.confirmDialog = false;
    },
    buildHabit() {
      const habit = taskStructure();
      habit.id = null; // uuid to be added
      habit.title = this.selectedMessageOption.option; // task / habit title,
      habit.parent = "habits";
      habit.icon = this.selectedCategory.icon;
      habit.iconClass = this.selectedCategory.iconClass;
      habit.category = this.selectedCategory.slug; // ( Optional ) main-category / general
      habit.activity = this.selectedActivity.title; // ( Optional ) tag for activity
      habit.recurring = false; // Boolean
      habit.startsFrom = moment().format("YYYYMMDD");
      habit.endsOn = null; // moment().format('YYYYMMDD') last date until when the task is to be repeated
      habit.score = scoreStructure();
      habit.createdOn = null; // date when task was created on
      habit.lastUpdatedOn = null; // latest updated date when task status was changed / detail was changed
      this.$store.dispatch("createHabit", habit);
      this.$router.push({ name: "home" });
    }
  },
  computed: {
    ...mapGetters(["categoriesData", "activitiesData", "questionsData"]),
    questionSlug() {
      return this.selectedActivity !== null ? this.selectedActivity.slug : "";
    }
  }
};
</script>