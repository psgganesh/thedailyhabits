<template>
  <div id="atomic-canvas" light>    
    <v-row  class="ma-0 pa-0">
      <v-col  class="ma-0 pa-0">

        <div v-if="showItems">
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
        </div>

        <div v-else>
        </div>
        
          <v-speed-dial
            v-model="fab"
            :top="top"
            :bottom="bottom"
            :right="right"
            :left="left"
            :direction="direction"
            :open-on-hover="hover"
            :transition="transition"
          >
            <template v-slot:activator>
              <v-btn
                v-model="fab"
                color="secondary"
                dark
                fab
              >
                <v-icon dark v-if="fab">mdi-close</v-icon>
                <v-icon light v-else>mdi-plus</v-icon>
              </v-btn>
            </template>
            <v-btn
              fab
              dark
              small
              color="green"
            >
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn
              fab
              dark
              small
              color="indigo"
            >
              <v-icon>mdi-plus</v-icon>
            </v-btn>
            <v-btn
              fab
              dark
              small
              color="red"
            >
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </v-speed-dial>
        

      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
    name: 'home-page',
    components: {

    },
    data: () => ({
      selected: [],
      showItems: false,
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

      direction: 'top',
      fab: false,
      fling: false,
      hover: false,
      tabs: null,
      top: false,
      right: true,
      bottom: true,
      left: false,
      transition: 'slide-y-reverse-transition',
    }),

    computed:{
      
    }
  }
</script>

<style>
  /* This is for documentation purposes and will not be needed in your application */
  #atomic-canvas .v-speed-dial {
    position: absolute;
  }

  #atomic-canvas .v-btn--floating {
    position: relative;
  }
</style>