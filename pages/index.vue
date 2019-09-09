<template>
  <div class="yellow lighten-1">

    <v-container fluid class="yellow lighten-1">
      <v-row no-gutters>
        <v-col cols="12">
          <v-card class="pa-2" >
            <v-text-field label="Solo" single-line hide-details solo flat placeholder="Add a task, press enter to save."></v-text-field>
            <v-card-actions>
              <v-btn icon>
                <v-icon>mdi-repeat</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-row  class="ma-0 pa-0">
      <v-col  class="ma-0 pa-0">
        <v-list class="ma-0 pa-0" two-line>
          <v-list-item-group v-model="selected" multiple active-class="green--text">
            <template v-for="(item, index) in items">
              <v-list-item :key="item.title">
                <template v-slot:default="{ active, toggle }">
                  <v-list-item-action>
                    <v-checkbox
                      v-model="active"
                      color="success"
                      @click="toggle"
                    ></v-checkbox>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title v-text="item.title"></v-list-item-title>
                    <v-list-item-subtitle class="text--primary" v-text="item.headline"></v-list-item-subtitle>
                    <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
                  </v-list-item-content>
                </template>
              </v-list-item>
              <v-divider
                v-if="index + 1 < items.length"
                :key="index"
              ></v-divider>
            </template>
          </v-list-item-group>
        </v-list>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
    name: 'home-page',
    data: () => ({
      selected: [],
      items: [
        {
          action: '15 min',
          headline: 'Brunch this weekend?',
          title: 'Ali Connors',
          subtitle: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
        },
        {
          action: '2 hr',
          headline: 'Summer BBQ',
          title: 'me, Scrott, Jennifer',
          subtitle: "Wish I could come, but I'm out of town this weekend.",
        },
        {
          action: '6 hr',
          headline: 'Oui oui',
          title: 'Sandra Adams',
          subtitle: 'Do you have Paris recommendations? Have you ever been?',
        },
        {
          action: '12 hr',
          headline: 'Birthday gift',
          title: 'Trevor Hansen',
          subtitle: 'Have any ideas about what we should get Heidi for her birthday?',
        },
        {
          action: '18hr',
          headline: 'Recipe to try',
          title: 'Britta Holt',
          subtitle: 'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
        },
        {
          action: '6 hr',
          headline: 'Oui oui2',
          title: 'Sandra Adams2',
          subtitle: 'Do you have Paris recommendations? Have you ever been?',
        },
        {
          action: '12 hr',
          headline: 'Birthday gift2',
          title: 'Trevor Hansen2',
          subtitle: 'Have any ideas about what we should get Heidi for her birthday?',
        },
        {
          action: '18hr',
          headline: 'Recipe to try2',
          title: 'Britta Holt2',
          subtitle: 'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
        },
      ],
    }),
  }
</script>