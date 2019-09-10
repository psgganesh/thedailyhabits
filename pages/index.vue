<template>
  <div id="atomic-canvas">

    <v-row class="ma-0 pa-0">
      <v-col class="ma-0 pa-0">
        <v-card id="dash-header" class="d-flex" color="primary" outlined tile>
          
        </v-card>
      </v-col>
    </v-row>

    <SpeedDialFab />

    <v-row class="ma-0 pa-0">
      <v-col class="ma-0 pa-0">
          <v-list class="ma-0 pa-0 top-shaped" two-line>
            <v-subheader class="overline">
              <v-icon color="red">mdi-all-inclusive</v-icon>&nbsp;&nbsp;Today
            </v-subheader>
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
import SpeedDialFab from '~/components/SpeedDialFab'

export default {
    name: 'home-page',
    components: {
      SpeedDialFab
    },
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
      ],
    }),

    computed:{
      
    }
  }
</script>
