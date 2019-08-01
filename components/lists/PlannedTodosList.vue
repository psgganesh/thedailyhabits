<template>
  <a-list
    size="small"
    bordered
    :dataSource="data"
  >
    <a-list-item slot="renderItem" slot-scope="item">{{item}}</a-list-item>
  </a-list>
</template>
<script>
const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
]

export default {
  name: 'PlannedTodosList',
  layout: 'simple',
  data () {
    return {
      data,
    }
  },
}
</script>