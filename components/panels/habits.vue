<template>
  <a-col id="habits" :span="6">
    <h2 class="text-white header-15"><a-icon type="retweet" /> Habits</h2>

      <draggable :list="habits"
        group="atomichabits"
        sort="false"
        class="gutter-box"
        draggable=".item"
        animation="150"
        ghostClass="ghost"
        dragClass="sortable-drag"
      >
      <a-card :title="element.name" class="list-group-item item" :bordered="false" style="width: 100%"
        v-for="element in habits"
          :key="element.name">
        {{ element.excerpt }}
      </a-card>
    </draggable>

    <div :style="{ padding: '8px 8px 8px 8px' }" class="dark-blue">
      <div @click="() => showAddNewHabitModal = true" class="dark-blue-input">+ Add another habit</div>
    </div>

    <div class="align-center">
        <a-modal title="Add a habit" centered v-model="showAddNewHabitModal" @ok="() => showAddNewHabitModal = false" :footer="null" >
          <div>
            Add new habit modal
          </div>
        </a-modal>
    </div>

  </a-col>
</template>

<script>
export default {
  name: "habits",
  layout: 'simple',
  data() {
    return {
      showAddNewHabitModal: false,
      habits: [],
      // habits: [
      //   { 
      //     id: 0, 
      //     name: "Need to cultivate habit of book reading", 
      //     excerpt: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero\'s De Finibus Bonorum et Malorum for use in a type specimen book'
      //   },
      //   { 
      //     id: 1, 
      //     name: 'Piano practice', 
      //     excerpt: 'Habitant morbi tristique senectus et netus et. Et molestie ac feugiat sed. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. ' 
      //   },
      //   { 
      //     id: 2, 
      //     name: 'Sleep early', 
      //     excerpt: 'In hac habitasse platea dictumst. Ornare arcu odio ut sem nulla pharetra diam. Nullam eget felis eget nunc lobortis mattis. Fermentum posuere urna nec tincidunt praesent semper feugiat nibh sed. Ut aliquam purus sit amet luctus venenatis.' 
      //   }
      // ]
    };
  }
};
</script>
