<template>
  <v-navigation-drawer v-model="drawerState" width="300" :clipped="$vuetify.breakpoint.lgAndUp" app>
    <template v-slot:prepend>
      <v-list-item two-line>
        <v-list-item-avatar>
          <img src="https://randomuser.me/api/portraits/women/81.jpg">
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Jane Smith</v-list-item-title>
          <v-list-item-subtitle>Logged In</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </template>

    <v-divider></v-divider>

    <v-list dense>
      <template v-for="item in items">
        <v-row
          v-if="item.heading"
          :key="item.heading"
          align="center"
        >
          <v-col cols="6">
            <v-subheader v-if="item.heading">
              {{ item.heading }}
            </v-subheader>
          </v-col>
          <v-col
            cols="6"
            class="text-center"
          >
            <a
              href="#!"
              class="body-2 black--text"
            >EDIT</a>
          </v-col>
        </v-row>
        <v-list-group
          v-else-if="item.children"
          :key="item.text"
          v-model="item.model"
          :prepend-icon="item.model ? item.icon : item['icon-alt']"
          append-icon=""
        >
          <template v-slot:activator>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>
                  {{ item.text }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
          <v-list-item
            v-for="(child, i) in item.children"
            :key="i"
            @click="() => { console.log('clicked') }"
          >
            <v-list-item-action v-if="child.icon">
              <v-icon>{{ child.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ child.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-list-item
          v-else
          :key="item.text"
          @click="() => { console.log('clicked') }"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>

    <template v-slot:append>
      <v-divider></v-divider>
      <v-list>
        <template v-for="item in options">
          <v-list-item :key="item.text" @click="() => console.log('clicked')">
            <v-list-item-action><v-icon>{{ item.icon }}</v-icon></v-list-item-action>
            <v-list-item-content><v-list-item-title>{{ item.text }}</v-list-item-title></v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </template>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'NavigationDrawer',
  data () {
    return {
      items: [
        { icon: 'home', text: 'Home' },
        { icon: 'inbox', text: 'Inbox' },
        { icon: 'mdi-calendar', text: 'Upcoming actions' },
        { icon: 'history', text: 'Activity history' },
        { icon: 'settings', text: 'Settings' },
        { icon: 'chat_bubble', text: 'Send feedback' },
        { icon: 'help', text: 'Help' }
      ],
      options: [
        { icon: 'mdi-logout', text: 'Logout' }
      ],
    }
  },
  computed: {
    drawerState: {
        get() { return this.$store.state.drawer; },
        set(value) { this.$store.commit('SET_DRAWER_STATE', value); },
    },
  }
}
</script>