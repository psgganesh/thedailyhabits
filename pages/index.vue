<template>
  <div id="content">
    <a-row :gutter="16" class="gutter-row">
      <a-col id="habits" :span="6">
        <h2 class="text-white header-15"><a-icon type="retweet" /> Habits</h2>
        <div class="gutter-box">
          <a-card title="Card title" :bordered="false" style="width: 100%">
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </a-card>
        </div>
      </a-col>
      <a-col id="plans" :span="6">
        <h2 class="text-white header-15"><a-icon type="highlight" /> Plans</h2>
        <div class="gutter-box">
          <a-card title="Card title" :bordered="false" style="width: 100%">
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </a-card>
        </div>
      </a-col>
      <a-col id="routines" :span="6">
        <h2 class="text-white header-15"><a-icon type="reload" /> Daily actions</h2>
        <div class="gutter-box">
          <a-card title="Card title" :bordered="false" style="width: 100%">
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </a-card>
        </div>
      </a-col>
      <a-col id="completed" :span="6">
        <h2 class="text-white header-15"><a-icon type="crown" /> Completed actions</h2>
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
#habits {
  /* background: #ff000075; */
  height: 100vh;
}
#plans {
  /* background: #ff00c34a; */
  height: 100vh;
}
#routines {
  /* background: #0400004a; */
  height: 100vh;
}
#completed {
  background:#00a7ff4a;
  height: 100vh;
}

.header-15 {
  padding: 10px 0px;
  text-align: center;
}
.gutter-row {
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px 0px;
}
.gutter-box {
  /* background: #ffffff4a; */
  padding: 15px;
  height: 100vh;
}
.ant-card {
  margin-bottom: 15px;
}
#content {
  background: #0e477b;
  padding: 0px;
  height: 100vh;
}
.text-white {
  color: #fff;
}
.list {
  background: #fff;
}
</style>
