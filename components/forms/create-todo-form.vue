<template>
  <a-form
    :form="form"
    @submit="handleSubmit"
  >
    <a-form-item
      v-for="(k, index) in form.getFieldValue('keys')"
      :key="k"
      v-bind="index === 0 ? formItemLayout : formItemLayoutWithOutLabel"
      :required="false"
    >
      <a-input
        v-decorator="[
          `names[${k}]`,
          {
            validateTrigger: ['change', 'blur'],
            rules: [{
              required: true,
              whitespace: true,
              message: 'Please input a todo item or delete this field.',
            }],
          }
        ]"
        placeholder="Add a new action step"
        style="width: 95%; margin-right: 8px"
        size="large"
      />
      <a-icon
        v-if="form.getFieldValue('keys').length > 1"
        class="dynamic-delete-button"
        type="delete"
        :disabled="form.getFieldValue('keys').length === 1"
        @click="() => remove(k)"
      />
    </a-form-item>
    <a-form-item v-bind="formItemLayoutWithOutLabel">
      <a-button
        type="dashed"
        style="width: 100%; height: 40px;"
        @click="add"
      >
        <a-icon type="plus" /> Add a new action step
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script>
let id = 0;
export default {
  name: 'create-todo-form',
  data () {
    return {
      formItemLayout: {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 24 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 24 },
        },
      },
      formItemLayoutWithOutLabel: {
        wrapperCol: {
          xs: { span: 24, offset: 0 },
          sm: { span: 24, offset: 0 },
        },
      },
    };
  },
  beforeCreate () {
    this.form = this.$form.createForm(this);
    this.form.getFieldDecorator('keys', { initialValue: [], preserve: true });
  },
  methods: {
    remove  (k) {
      const { form } = this;
      // can use data-binding to get
      const keys = form.getFieldValue('keys');
      // We need at least one passenger
      if (keys.length === 1) {
        return;
      }

      // can use data-binding to set
      form.setFieldsValue({
        keys: keys.filter(key => key !== k),
      });
    },

    add  () {
      const { form } = this;
      // can use data-binding to get
      const keys = form.getFieldValue('keys');
      const nextKeys = keys.concat(++id);
      // can use data-binding to set
      // important! notify form to detect changes
      form.setFieldsValue({
        keys: nextKeys,
      });
    },

    handleSubmit  (e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
  },
};
</script>
<style>
.dynamic-delete-button {
  cursor: pointer;
  position: relative;
  top: 4px;
  font-size: 24px;
  color: #999;
  transition: all .3s;
}
.dynamic-delete-button:hover {
  color: #777;
}
.dynamic-delete-button[disabled] {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>