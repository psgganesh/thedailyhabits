<template>
  <div>

    <div class="atomic-canvas-list">
      <h2 class="text-white text-center"><a-icon type="pushpin" /> Goals</h2>
        <draggable :list="goals"
          group="atomichabits"
          sort="false"
          class="pane"
          draggable=".item"
          animation="150"
          ghostClass="ghost"
          dragClass="sortable-drag"
        >
        <a-card :title="element.name" class="list-group-item item" :bordered="true" v-for="element in goals" :key="element.name" />
        <div class="create-card-composer" @click="() => showAddNewGoalModal = true">
          <div  class="dark-blue-input"><a-icon type="pushpin" /> Add a new goal</div>
        </div>
      </draggable>
      <div class="align-center">
          <a-modal centered v-model="showAddNewGoalModal" @ok="() => showAddNewGoalModal = false" :header="null" :footer="null" >
            <div>
              <a-icon type="pushpin" /> Add a new goal
            </div>
          </a-modal>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'goals',
  layout: 'simple',
  data() {
    return {
      showAddNewGoalModal: false,
      goals: [
        { 
          id: 0, 
          name: "Need to cultivate habit of book reading", 
          excerpt: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero\'s De Finibus Bonorum et Malorum for use in a type specimen book'
        },
        { 
          id: 1, 
          name: 'Piano practice', 
          excerpt: 'Habitant morbi tristique senectus et netus et. Et molestie ac feugiat sed. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. ' 
        },
        { 
          id: 2, 
          name: 'Sleep early', 
          excerpt: 'In hac habitasse platea dictumst. Ornare arcu odio ut sem nulla pharetra diam. Nullam eget felis eget nunc lobortis mattis. Fermentum posuere urna nec tincidunt praesent semper feugiat nibh sed. Ut aliquam purus sit amet luctus venenatis.' 
        }
      ]
    };
  }
};
</script>
