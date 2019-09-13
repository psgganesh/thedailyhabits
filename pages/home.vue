<template>
  <div id="atomic-canvas" :class="backdropColor">

    <v-row class="ma-0 pa-0">
      <v-col class="ma-0 pa-0">
        <v-card id="dash-header" class="d-flex text-center" :color="dashColor" outlined tile>
          <v-list-item three-line>
            <v-list-item-content>

              <v-list-item-title class="display-1">
                <v-icon class="pa-3" light>mdi-chevron-left-circle</v-icon>
                {{ today }}
                <v-icon class="pa-3" light>mdi-chevron-right-circle</v-icon>
              </v-list-item-title>
              
              <v-list-item-subtitle>
                <v-row class="ma-4 pa-0">
                  <v-col cols="6" class="ma-0 pa-0">
                    <span class="font-weight-bold overline">Tasks</span>
                    <div class="display-1 py-3"> 0 / 10</div>
                  </v-col>
                  <v-col cols="6" class="ma-0 pa-0">
                    <span class="font-weight-bold overline">Goals</span>
                    <div class="display-1 py-3"> 0 / 10</div>
                  </v-col>
                </v-row>
              </v-list-item-subtitle>

              <v-list-item-subtitle>
                <v-row class="ma-0 pa-0">
                  <v-col cols="12" class="ma-0 pa-0">
                    <v-progress-linear v-model="power" color="secondary" height="15" reactive ></v-progress-linear>
                  </v-col>
                </v-row>
              </v-list-item-subtitle>

            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>

    <SpeedDialFab />

    <v-row class="ma-0 pa-0">
      <v-col class="ma-0 pa-0">
          <v-list class="ma-0 pa-0 top-shaped" two-line>
            <v-subheader class="overline">
              <v-icon color="red">mdi-all-inclusive</v-icon>&nbsp;Today
            </v-subheader>
            <v-list-item-group v-model="selected" multiple active-class="green--text">
              <template v-for="(item, index) in items">
                <v-list-item :key="item.title">
                  <template v-slot:default="{ active, toggle }">
                    <v-list-item-action>
                      <v-checkbox v-model="active" color="success" @click="toggle"></v-checkbox>
                    </v-list-item-action>
                    <v-list-item-content>
                      <v-list-item-title v-text="item.title"></v-list-item-title>
                      <!-- <v-list-item-subtitle class="text--primary" v-text="item.headline"></v-list-item-subtitle> -->
                      <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
                    </v-list-item-content>
                  </template>
                </v-list-item>
                <v-divider v-if="index + 1 < items.length" :key="index" ></v-divider>
              </template>
            </v-list-item-group>
          </v-list>
      </v-col>
    </v-row>

  </div>
</template>

<script>
import SpeedDialFab from '~/components/SpeedDialFab'
import moment from 'moment'

export default {
    name: 'home-page',
    components: {
      SpeedDialFab
    },
    data: () => ({
      power: 78,
      selected: [],
      today: moment().format('DD  MMM Y'),
      items: [
        {
          title: 'I will have breakfast everyday on time',
          subtitle: 'Last updated 12 Sep 2019 @ 3:00 AM',
        },
        {
          title: 'Drink 2 bottles of water',
          subtitle: 'Last updated 12 Sep 2019 @ 3:00 AM',
        }
      ],
    }),
    created() {
      // console.log(this.$router)
    },
    computed:{
      dashColor() {
        return (this.$device.isMobile) ? 'primary' : 'white'
      },
      backdropColor() {
        return (this.$device.isMobile) ? 'bg-mobile' : 'bg-default'
      }
    }
  }
</script>
