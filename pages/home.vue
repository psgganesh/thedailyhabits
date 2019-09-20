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
                    <v-progress-linear v-model="power" color="secondary" height="10" reactive ></v-progress-linear>
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
          <v-list id="habitList" class="ma-0 pa-0 top-shaped" two-line>
            <v-subheader class="overline">
              <v-icon color="red">mdi-all-inclusive</v-icon>&nbsp;Today
            </v-subheader>
            <!-- <v-list-item-group v-model="selected" multiple active-class="green--text"> -->
              <v-list-item-group>
              <template v-for="(item, index) in items">
                <v-list-item :key="item.title" @click='() => taskSelected = !taskSelected'>
                  <!-- <template v-slot:default="{ active, toggle }"> -->
                    <!-- <v-list-item-action>
                      <v-checkbox v-model="active" color="success" @click="toggle"></v-checkbox>
                    </v-list-item-action> -->
                    <v-list-item-content>
                      <v-list-item-title v-text="item.title"></v-list-item-title>

                      <!-- <v-list-item-subtitle class="text--primary" v-text="item.headline"></v-list-item-subtitle> -->
                      
                      <div v-if="(item.dayCount.totalDays - item.dayCount.completedDays) <= 7">
                        <v-list-item-subtitle v-text="'Only '+(item.dayCount.totalDays - item.dayCount.completedDays)+' occurances left'"></v-list-item-subtitle>  
                      </div>
                      <div v-else>
                        <v-list-item-subtitle v-text="item.dayCount.completedDays+' / '+item.dayCount.totalDays+' days'"></v-list-item-subtitle>
                      </div>

                    </v-list-item-content>
                    <v-list-item-action>
                      
                    </v-list-item-action>
                  <!-- </template> -->
                </v-list-item>
                <v-divider v-if="index + 1 < items.length" :key="index" ></v-divider>
              </template>
            </v-list-item-group>
          </v-list>
      </v-col>
    </v-row>

    <template>
      <v-dialog v-model='taskSelected' fullscreen hide-overlay transition='dialog-bottom-transition'>
        <v-card max-width="375" class="mx-auto" >
            <v-img src="https://cdn.vuetifyjs.com/images/lists/ali.png" height="300px" dark>
              <v-row class="fill-height">
                <v-card-title class="max-height-50">
                  <v-btn dark icon @click="() => taskSelected = !taskSelected">
                    <v-icon>mdi-chevron-left</v-icon>
                  </v-btn>

                  <div class="flex-grow-1"></div>

                  <v-btn dark icon class="mr-4">
                    <v-icon>mdi-pencil</v-icon>
                  </v-btn>

                  <v-btn dark icon>
                    <v-icon>mdi-trash-can</v-icon>
                  </v-btn>
                </v-card-title>

                <!--
                  <div class="flex-grow-1"></div>
                    <v-card-title class="white--text pl-12 pt-12">
                      <div class="display-1 pl-12 pt-12">Ali Conners</div>
                    </v-card-title>
                -->

              </v-row>
            </v-img>

            <v-list two-line>

              <v-list-item >
                <v-list-item-icon>
                  <v-icon color="blue-grey darken-3">mdi-progress-check</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>I will have breakfast everyday on time</v-list-item-title>
                  <v-list-item-subtitle>Saturday 21 Sep</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-divider inset></v-divider>

              <v-list-item >
                <v-list-item-icon>
                  <v-icon color="blue-grey darken-3">mdi-flag-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>1 session a day</v-list-item-title>
                  <v-list-item-subtitle>15 minutes everyday</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-divider inset></v-divider>

              <v-list-item >
                <v-list-item-icon>
                  <v-icon color="blue-grey darken-3">mdi-bell</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>5 minutes after check-in time</v-list-item-title>
                  <v-list-item-subtitle>Desktop nudge notifications are on</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

            </v-list>

            <v-container fluid class="grey lighten-5">
              <v-row>
                <v-col v-for="n in 4" :key="n" cols="12" sm="3" >
                  <v-card class="pa-2" outlined tile >
                    One of four columns
                  </v-card>
                </v-col>
              </v-row>
            </v-container>

          </v-card>
      </v-dialog>
    </template>
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
      taskSelected: false,
      items: [
        {
          title: 'I will have breakfast everyday on time',
          subtitle: 'Last updated 12 Sep 2019 @ 3:00 AM',
          dayCount: {
            completedDays: 2,
            totalDays: 66
          },
        },
        {
          title: 'Drink 2 bottles of water',
          subtitle: 'Last updated 12 Sep 2019 @ 3:00 AM',
          dayCount: {
            completedDays: 60,
            totalDays: 66
          },
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
