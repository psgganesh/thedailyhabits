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
import { habitImages } from '~/utils/constants'

export default {
  name: 'GoalForm',
  template: 'simple',
  props: {
    goalTemplate: { type: Object, default: null },
  },
  data() {
    return {  
      goal: {
        category: this.goalTemplate.category,
      },
      selectedCategory: null,
      categories: habitImages
    }
  },
  methods: {
    updateGoalCategory(category) {
      this.selectedCategory = category.id
      this.goal.category = category
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

