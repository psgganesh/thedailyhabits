<template>
  <ds-calendar-app :calendar="calendar"></ds-calendar-app>
</template>

<script>
import { Calendar } from 'dayspan';

export default {
    name: 'dayspan',
    data: () => ({
      calendar: Calendar.months()
    }),
  }
</script>