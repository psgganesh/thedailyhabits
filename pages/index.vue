<template>
  <div id="content">
    <a-row :gutter="16">
      <a-col class="gutter-row" :span="6">
        <h2 class="text-white"><a-icon type="border" /> Todos</h2>
        <div class="gutter-box">
          <a-card title="Card title" :bordered="false" style="width: 100%">
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </a-card>
        </div>
      </a-col>
      <a-col class="gutter-row" :span="6">
        <h2 class="text-white"><a-icon type="reload" /> Routine tasks</h2>
        <div class="gutter-box">
          <a-card title="Card title" :bordered="false" style="width: 100%">
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </a-card>
        </div>
      </a-col>
      <a-col class="gutter-row" :span="6">
        <h2 class="text-white"><a-icon type="check" /> Completed tasks</h2>
        <div class="gutter-box">
          <a-card title="Card title" :bordered="false" style="width: 100%">
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </a-card>
        </div>
      </a-col>
      <a-col class="gutter-row" :span="6">
        <h2 class="text-white"><a-icon type="crown" /> Rewards</h2>
        <div class="gutter-box">
          <a-card title="Card title" :bordered="false" style="width: 100%">
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </a-card>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  name: 'homePage',
  layout: 'default'
}
</script>

<style>
.gutter-row {
  margin: 20px 0px;
}
.gutter-box {
  background: #ffffff4a;
  padding: 15px;
}
.ant-card {
  margin-bottom: 15px;
}
#content {
  background: #0e477b;
  padding: 0 20px;
  height: 100vh;
}
.text-white {
  color: #fff;
}
.list {
  background: #fff;
}
</style>
