<template>
  <div>

    <div class="atomic-canvas-list goals-list">
      <h2 class="text-white text-center"><a-icon type="pushpin" /> Goals</h2>
        <draggable :list="goals"
          group="atomichabits"
          sort="false"
          class="pane"
          draggable=".item"
          animation="150"
          easing="cubic-bezier(1, 0, 0, 1)"
          ghostClass="ghost"
          dragClass="sortable-drag"
        >
        <a-card :title="element.name" class="list-group-item item" :bordered="true" v-for="element in goals" :key="element.name" />
        <div class="create-card-composer" @click="() => showAddNewGoalModal = true">
          <div  class="dark-blue-input"><a-icon type="pushpin" /> Add a new goal</div>
        </div>
      </draggable>
      <div class="align-center">
          <a-modal centered v-model="showAddNewGoalModal" @ok="() => showAddNewGoalModal = false" :header="null" :footer="null" :closable="false" >
            <a-form :layout="formLayout" :form="form" @submit="addNewGoal" >
              <a-form-item label="Goal" :label-col="{ span: 24 }" :wrapper-col="{ span: 24 }">
                <a-input v-decorator="[ 'goal', {rules: [{ required: true, message: 'Please input your goal!' }]}]" onValuesChange="" />
              </a-form-item>
              <a-form-item label="Description" :label-col="{ span: 12 }" :wrapper-col="{ span: 24 }">
                <a-textarea v-decorator="[ 'description', {rules: [{ required: true, message: 'Just describe your goal in just at-least 2 sentences!' }]}]" onValuesChange="" :autosize="{ minRows: 2, maxRows: 6 }" />
              </a-form-item>
              <a-form-item :wrapper-col="{ span: 24, offset: 0 }">
                <a-button type="primary" block html-type="submit" :size="large"> Submit </a-button>
              </a-form-item>
            </a-form>
          </a-modal>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Goals',
  layout: 'simple',
  data() {
    return {
      formLayout: 'vertical',
      form: this.$form.createForm(this),
      showAddNewGoalModal: false,
      goals: [
        { 
          name: "Need to cultivate habit of book reading", 
          excerpt: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero\'s De Finibus Bonorum et Malorum for use in a type specimen book'
        },
        { 
          name: 'Piano practice', 
          excerpt: 'Habitant morbi tristique senectus et netus et. Et molestie ac feugiat sed. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. ' 
        },
        { 
          name: 'Sleep early', 
          excerpt: 'In hac habitasse platea dictumst. Ornare arcu odio ut sem nulla pharetra diam. Nullam eget felis eget nunc lobortis mattis. Fermentum posuere urna nec tincidunt praesent semper feugiat nibh sed. Ut aliquam purus sit amet luctus venenatis.' 
        }
      ]
    };
  },
  methods: {
    validateForm(){

    },
    addNewGoal(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    }
  }
};
</script>
