f<template>
  <div>
    <a-row :gutter="16">
      <a-col :span="24">
        <a-checkbox-group @change="onChange">
        <a-row :gutter="16">
          <a-col :span="10">
            <h3 class="text-left">How frequent would this repeat ?</h3>
            <a-row :gutter="16">
              <a-col :span="12">
                <a-checkbox value="A">Everyday</a-checkbox>
                <a-checkbox value="Sunday">Sunday</a-checkbox>
                <a-checkbox value="Monday">Monday</a-checkbox>
                <a-checkbox value="Tuesday">Tuesday</a-checkbox>
                <a-checkbox value="Wednesday">Wednesday</a-checkbox>
                <a-checkbox value="Thursday">Thursday</a-checkbox>
                <a-checkbox value="Friday">Friday</a-checkbox>
                <a-checkbox value="Saturday">Saturday</a-checkbox>
              </a-col>
            </a-row>
          </a-col>
          <a-col :span="14">
            <h3 class="text-left">For how many days would this habit repeat ?</h3>
            <a-input-number :min="1" :max="10" size="default" /> days
          </a-col>
        </a-row>
      </a-checkbox-group>
      </a-col>
    </a-row>
  </div>
</template>
<script>
export default {
  name: 'SetFrequency',
  template: 'simple',
  methods: {
    onChange (checkedValues) {
      console.log('checked = ', checkedValues)
    },
  }
}
</script>

