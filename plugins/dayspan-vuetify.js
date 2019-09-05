import Vue from 'vue';
import DayspanVuetify from 'dayspan-vuetify'

import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'dayspan-vuetify/dist/lib/dayspan-vuetify.min.css'

Vue.use(DayspanVuetify, {
  methods: {
    getDefaultEventColor: () => '#1976d2'
  }
})