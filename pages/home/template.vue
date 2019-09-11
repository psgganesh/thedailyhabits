<template>
  <v-stepper v-model="e6" vertical light class="mt-2">

    <v-stepper-step editable :complete="e6 > 1" step="1" color="secondary">
      Choose Category
    </v-stepper-step>

    <v-stepper-content step="1" color="secondary">
      <!-- <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
      <v-btn color="secondary" @click="e6 = 2">Continue</v-btn> -->

      <v-list-item
        v-for="item in categories"
        :key="item.title"
        @click="chooseCategory(item)"
      >
        <v-list-item-avatar>
          <v-icon
            :class="[item.iconClass]"
            v-text="item.icon"
          ></v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-text="item.title"></v-list-item-title>
          <!-- <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle> -->
        </v-list-item-content>

        <v-list-item-action>
          <!-- <v-btn icon>
            <v-icon color="grey lighten-1">mdi-information</v-icon>
          </v-btn> -->
          <v-chip class="ma-2">{{ item.count }}</v-chip>
        </v-list-item-action>
      </v-list-item>


    </v-stepper-content>

    <v-stepper-step editable :complete="e6 > 2" step="2" color="secondary">
      Choose Activity
    </v-stepper-step>

    <v-stepper-content step="2" color="secondary">
      <!-- <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
      <v-btn color="secondary" @click="e6 = 3">Continue</v-btn>
      <v-btn text>Cancel</v-btn> -->

      <v-list-item
        v-for="item in activities[selectedCategory]"
        :key="item.title"
        @click="e6 = 2"
      >
        <v-list-item-avatar>
          <v-icon
            :class="[item.iconClass]"
            v-text="item.icon"
          ></v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-text="item.title"></v-list-item-title>
          <!-- <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle> -->
        </v-list-item-content>

        <v-list-item-action>
          <!-- <v-btn icon>
            <v-icon color="grey lighten-1">mdi-information</v-icon>
          </v-btn> -->
          <v-chip class="ma-2">{{ item.count }}</v-chip>
        </v-list-item-action>
      </v-list-item>

    </v-stepper-content>

    <v-stepper-step editable :complete="e6 > 3" step="3" color="secondary">
      
    </v-stepper-step>

    <v-stepper-content step="3" color="secondary">
      <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
      <v-btn color="success" @click="e6 = 4">Save</v-btn>
    </v-stepper-content>

    <!-- <v-stepper-step step="4" color="secondary">View setup instructions</v-stepper-step>
    <v-stepper-content step="4">
      <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
      <v-btn color="secondary" @click="e6 = 1">Continue</v-btn>
      <v-btn text>Cancel</v-btn>
    </v-stepper-content> -->

  </v-stepper>
</template>

<script>
export default {
  name: 'TaskTemplateForm',
  data: () => {
    return {
      e6: 1,
      selectedCategory: null,
      categories: [
        { id: 1, icon: 'mdi-heart-pulse', title: 'Health', iconClass: "red accent-4 white--text", count: 12 },
        { id: 2, icon: 'mdi-basketball', title: 'Sports', iconClass: "purple darken-4 white--text", count: 10 },
        { id: 3, icon: 'mdi-food-fork-drink', title: 'Nutrition', iconClass: "purple accent-4 white--text", count: 1 },
        { id: 4, icon: 'mdi-timer', title: 'Quit a bad habit', iconClass: "deep-purple accent-4 white--text", count: 2 },
        { id: 5, icon: 'mdi-book', title: 'Study', iconClass: "cyan darken-4 white--text", count: 3 },
        { id: 6, icon: 'mdi-briefcase', title: 'Work', iconClass: "blue accent-4 white--text", count: 4 },
        { id: 7, icon: 'mdi-music', title: 'Entertainment', iconClass: "teal darken-4 white--text", count: 5 },
        { id: 8, icon: 'mdi-circle-expand', title: 'Me time', iconClass: "pink darken-4 white--text", count: 6 },
        { id: 9, icon: 'mdi-octagram', title: 'General', iconClass: "brown darken-4 white--text", count: 7 }
      ],
      activities: {
        'Health': [
          { icon: 'mdi-label', title: 'Health', iconClass: "red accent-4 white--text" },
          { icon: 'mdi-label', title: 'Sports', iconClass: "red accent-4 white--text" },
          { icon: 'mdi-label', title: 'Nutrition', iconClass: "red accent-4 white--text" },
          { icon: 'mdi-label', title: 'Quit a bad habit', iconClass: "red accent-4 white--text" },
          { icon: 'mdi-label', title: 'Study', iconClass: "red accent-4 white--text" },
          { icon: 'mdi-label', title: 'Work', iconClass: "red accent-4 white--text" },
          { icon: 'mdi-label', title: 'Entertainment', iconClass: "red accent-4 white--text" },
          { icon: 'mdi-label', title: 'Me time', iconClass: "red accent-4 white--text" },
          { icon: 'mdi-label', title: 'General', iconClass: "red accent-4 white--text" }
        ]
      },
    }
  },
  methods: {
    chooseCategory(category) {
      this.selectedCategory = category.title
      this.e6++
      console.log(this.activities[this.selectedCategory].length)
    }
  }
}
</script>