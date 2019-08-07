<template>
  <div>
    <div class="atomic-canvas-list-even planboard-list">
      <h2 class="text-white text-center"><a-icon type="trophy" /> Accomplishments</h2>
        <draggable :list="accomplishments"
            group="atomichabits"
            sort="false"
            class="pane"
            draggable=".item"
            animation="150"
            easing="cubic-bezier(1, 0, 0, 1)"
            ghostClass="ghost"
            dragClass="sortable-drag"
          >
        </draggable>
    </div>
  </div>
</template>

<script>
export default {

  name: 'Accomplishments',

  data: function() {
    return {
      accomplishments: []
    }
  },

  beforeCreate: function() {
    // alert('Accomplishments beforeCreate');
  },

  created: function() {
    // alert('Accomplishments created');
  },

  beforeMount: function() {
    // alert('Accomplishments beforeMount');
  },

  mounted: function() {
    // alert('Accomplishments mounted');
  },

  beforeUpdate: function() {
    // alert('Accomplishments beforeUpdate');
  },

  updated: function() {
    // alert('Accomplishments updated');
  },

  beforeDestroy: function() {
    // alert('Accomplishments beforeDestroy');
  },

  destroyed: function() {
    // alert('Accomplishments destroyed');
  }
  
}
</script>