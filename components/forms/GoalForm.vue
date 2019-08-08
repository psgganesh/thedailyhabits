<template>
  <div>
    <a-row :gutter="16">
      <a-col :span="24">
        <a-input size="large" placeholder="Name your goal"/>
      </a-col>
    </a-row>
    <a-row :gutter="16" class="my-10">
      <a-col :span="24">
        <a-textarea size="large" placeholder="Goal description (optional)" :rows="3" />
      </a-col>
    </a-row>
    <h3 class="text-left">Which area does this goal focus on ?</h3>
    <a-row :gutter="16">
      <a-col :span="12" v-for="category in categories" :key="'col_'+category.id" class="py-5 category" @click="selectCategory(category.id)" :class="[(selectedCategory === category.id) ?  'active' : '' ]">
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
  data() {
    return {
      selectedCategory: null,
      categories: [
        { id: 1, title: 'Quit a bad habit', description: 'Stop smoking, drinking..', avatar: 'https://img.icons8.com/color/96/000000/no-drugs.png' },
        { id: 2, title: 'Sports', description: 'Master swimming, chess..', avatar: 'https://img.icons8.com/color/96/000000/beach-soccer.png' },
        { id: 3, title: 'Nutrition', description: 'Change eating habits..', avatar: 'https://img.icons8.com/color/96/000000/carrot.png' },
        { id: 4, title: 'Health', description: 'Workout / get in shape..', avatar: 'https://img.icons8.com/color/96/000000/heart-health.png' },
        { id: 5, title: 'Study', description: 'Complete a book, novel..', avatar: 'https://img.icons8.com/color/96/000000/courses.png' },
        { id: 6, title: 'Work', description: 'Pick-up / learn a new skill..', avatar: 'https://img.icons8.com/color/96/000000/toolbox.png' },
        { id: 7, title: 'Entertainment', description: 'Learn to dance, act / any art form..', avatar: 'https://img.icons8.com/color/96/000000/tango.png' },
        { id: 8, title: 'Other', description: 'Add your custom goal to achieve..', avatar: 'https://img.icons8.com/color/96/000000/ellipsis.png' }
      ]
    }
  },
  methods: {
    selectCategory(category) {
      this.selectedCategory = category;
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

