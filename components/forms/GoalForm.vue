<template>
  <div>
    <h3 class="text-left">Which area will this new habit fall in ?</h3>
    
    <a-row :gutter="16">
      <a-col :span="12" v-for="category in categories" :key="'col_'+category.id" class="py-5 category" @click="updateGoalCategory(category)" :class="[(selectedCategory === category.id) ?  'active' : '' ]">
        <a-card hoverable :key="'card_'+category.id">
          <a-card-meta :title="category.title" :description="category.description" :class="[(selectedCategory === category.id) ?  'active' : '' ]">
            <a-avatar slot="avatar" :src="category.avatar" />
          </a-card-meta>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>
<script>
export default {
  name: 'GoalForm',
  template: 'simple',
  props: {
    goalTemplate: { type: Object, default: null },
  },
  data() {
    return {  
      goal: {
        category: null,
      },
      selectedCategory: null,
      categories: [
        { id: 1, title: 'Health', description: 'Workout / get in shape..', avatar: 'https://img.icons8.com/color/96/000000/heart-health.png' },
        { id: 2, title: 'Sports', description: 'Master swimming, chess..', avatar: 'https://img.icons8.com/color/96/000000/beach-soccer.png' },
        { id: 3, title: 'Nutrition', description: 'Change eating habits..', avatar: 'https://img.icons8.com/color/96/000000/carrot.png' },
        { id: 4, title: 'Quit a bad habit', description: 'Stop smoking, drinking..', avatar: 'https://img.icons8.com/color/96/000000/no-drugs.png' },
        { id: 5, title: 'Study', description: 'Complete a book, novel..', avatar: 'https://img.icons8.com/color/96/000000/courses.png' },
        { id: 6, title: 'Work', description: 'Pick-up / learn a new skill..', avatar: 'https://img.icons8.com/color/96/000000/toolbox.png' },
        { id: 7, title: 'Entertainment', description: 'Learn to dance, act / any art form..', avatar: 'https://img.icons8.com/color/96/000000/tango.png' },
        { id: 8, title: 'Me time', description: 'Read, meditate, take a time-out..', avatar: 'https://img.icons8.com/color/96/000000/ellipsis.png' }
      ]
    }
  },
  methods: {
    updateGoalCategory(category) {
      this.selectedCategory = category.id
      this.goal.category = category.title
      this.$store.commit('SET_NEW_HABIT_GOAL_CATEGORY', this.goal.category)
    }
  }
}
</script>

<style scoped>
.ant-card-meta-detail {
    overflow: visible;
}
.category.active .ant-card {
  background: #f0ffff;
  border: 1px solid #a5d5ff;
}
.my-10 {
  margin:10px 0px;
}
textarea {
  resize: none;
}
</style>

