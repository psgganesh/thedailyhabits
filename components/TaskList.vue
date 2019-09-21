<template>
  <v-row class="ma-0 pa-0">
    <v-col class="ma-0 pa-0">
      <v-list id="habitList" class="ma-0 pa-0" two-line>
        <v-subheader class="overline">
          <v-icon color="red">mdi-all-inclusive</v-icon>&nbsp;Today
        </v-subheader>
        <!-- <v-list-item-group v-model="selected" multiple active-class="green--text"> -->
        <v-list-item-group>
          <template v-for="(item, index) in items">
            <v-list-item :key="item.title" @click="() => taskSelected = !taskSelected">
              <!-- <template v-slot:default="{ active, toggle }"> -->
              <!-- <v-list-item-action>
                      <v-checkbox v-model="active" color="success" @click="toggle"></v-checkbox>
              </v-list-item-action>-->
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>

                <!-- <v-list-item-subtitle class="text--primary" v-text="item.headline"></v-list-item-subtitle> -->

                <div v-if="(item.dayCount.totalDays - item.dayCount.completedDays) <= 7">
                  <v-list-item-subtitle
                    v-text="'Only '+(item.dayCount.totalDays - item.dayCount.completedDays)+' occurances left'"
                  ></v-list-item-subtitle>
                </div>
                <div v-else>
                  <v-list-item-subtitle
                    v-text="item.dayCount.completedDays+' / '+item.dayCount.totalDays+' days'"
                  ></v-list-item-subtitle>
                </div>
              </v-list-item-content>
              <v-list-item-action></v-list-item-action>
              <!-- </template> -->
            </v-list-item>
            <v-divider v-if="index + 1 < items.length" :key="index"></v-divider>
          </template>
        </v-list-item-group>
      </v-list>
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: "task-list",
  props: {
    items: { type: Array, default: null }
  }
};
</script>