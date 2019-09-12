<template>
  <div>
    <v-stepper v-model="wizardStep" vertical light class="mt-2">

      <v-stepper-step step="1" editable color="secondary">Choose Category</v-stepper-step>
      <v-stepper-content step="1" color="secondary">
        <v-list-item v-for="item in categories" :key="item.title" @click="chooseCategory(item)">
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
        <v-list-item v-for="item in activities[selectedCategorySlug]" :key="item.title" @click="chooseActivity(item)">
          <v-list-item-avatar>
            <v-icon :class="[item.iconClass]" v-text="item.icon" ></v-icon>
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
            <v-list-item v-for="question in questions[questionSlug]" :key="question.id" three-line class="outlined mb-2 select-option" @click="selectOption(question)">
              <v-list-item-content>
                <v-list-item-title class="subtitle-2 text--black">{{ question.option }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
        <v-btn color="success" :disabled="finishButtonDisabledState" block large>Finish</v-btn>
      </v-stepper-content>

    </v-stepper>
  </div>
</template>

<script>
export default {
  name: 'TaskTemplateForm',
  data: () => {
    return {
      loading: false,
      wizardStep: 1,
      selection: 1,
      selectedActivity: null,
      selectedCategorySlug: null,
      finishButtonDisabledState: true,
      categories: [
        { id: 1, icon: 'mdi-heart-pulse', title: 'Health', slug: 'health', iconClass: "red accent-4 white--text", count: 12 },
        { id: 2, icon: 'mdi-basketball', title: 'Sports', slug: 'sports', iconClass: "purple darken-4 white--text", count: 10 },
        { id: 3, icon: 'mdi-food-fork-drink', title: 'Nutrition', slug: 'nutrition', iconClass: "purple accent-4 white--text", count: 1 },
        { id: 4, icon: 'mdi-timer', title: 'Quit a bad habit', slug: 'quit_a_bad_habit', iconClass: "deep-purple accent-4 white--text", count: 2 },
        { id: 5, icon: 'mdi-book', title: 'Study', slug: 'study', iconClass: "cyan darken-4 white--text", count: 3 },
        { id: 6, icon: 'mdi-briefcase', title: 'Work', slug: 'work', iconClass: "blue accent-4 white--text", count: 4 },
        { id: 7, icon: 'mdi-music', title: 'Entertainment', slug: 'entertainment', iconClass: "teal darken-4 white--text", count: 5 },
        { id: 8, icon: 'mdi-circle-expand', title: 'Me time', slug: 'me_time', iconClass: "pink darken-4 white--text", count: 6 },
        { id: 9, icon: 'mdi-octagram', title: 'General', slug: 'general', iconClass: "brown darken-4 white--text", count: 7 }
      ],
      activities: {
        'health': [
          { id: '1-1', icon: 'mdi-checkbox-blank-circle-outline', title: 'Breakfast', slug: 'breakfast', iconClass: "blue-grey accent-4 white--text" },
          { id: '1-2', icon: 'mdi-checkbox-blank-circle-outline', title: 'Hot & Cold Shower', slug: 'hot-cold-shower', iconClass: "blue-grey accent-4 white--text" },
          { id: '1-3', icon: 'mdi-checkbox-blank-circle-outline', title: 'Sleep Early', slug: 'sleep-early', iconClass: "blue-grey accent-4 white--text" },
          { id: '1-4', icon: 'mdi-checkbox-blank-circle-outline', title: 'Taking Medicines', slug: 'take-meds', iconClass: "blue-grey accent-4 white--text" },
          { id: '1-5', icon: 'mdi-checkbox-blank-circle-outline', title: 'Taking Supplements', slug: 'take-supplements', iconClass: "blue-grey accent-4 white--text" },
          { id: '1-6', icon: 'mdi-checkbox-blank-circle-outline', title: 'Wake Up Early', slug: 'wake-up-early', iconClass: "blue-grey accent-4 white--text" },
          { id: '1-7', icon: 'mdi-checkbox-blank-circle-outline', title: 'Cut Nails', slug: 'cut-nails', iconClass: "blue-grey accent-4 white--text" },
          { id: '1-8', icon: 'mdi-checkbox-blank-circle-outline', title: 'Groom Hair', slug: 'groom-hair', iconClass: "blue-grey accent-4 white--text" },
          { id: '1-9', icon: 'mdi-checkbox-blank-circle-outline', title: 'Groom Beard', slug: 'groom-beard', iconClass: "blue-grey accent-4 white--text" }
        ]
      },
      questions: {
        'breakfast': [
          { id:'1-1-1', option: 'I will be having breakfast on time on all working-days (5 days only)' },
          { id:'2-1-1', option: 'I will be having breakfast on time everyday' }
        ]
      }
    }
  },
  methods: {
    chooseCategory(category) {
      this.selectedCategorySlug = category.slug
      this.wizardStep++
    },
    chooseActivity(activity) {
      this.selectedActivity = activity
      this.wizardStep++
    },
    selectOption(option) {
      if(option !== null)
        this.finishButtonDisabledState = false
    },
    discardConfirmDialog() {
      this.confirmDialog = false
    }
  },
  computed: {
    questionSlug() {
      return (this.selectedActivity !== null) ? this.selectedActivity.slug : ''
    }
  }
}
</script>