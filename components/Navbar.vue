<template>
  <a-layout-header>
      <div class="logo">
        <a-icon type="crown" /> atomic habits
      </div>
      <a-menu
        theme="dark"
        mode="horizontal"
        :defaultSelectedKeys="['']"
        :style="{ lineHeight: '48px', float: 'right'}"
      >
        <a-menu-item key="shop">
          <a-icon type="shop" />Marketplace
        </a-menu-item>
        <a-sub-menu>
          <span slot="title" class="submenu-title-wrapper"><a-icon type="user" />Shankar</span>
          <a-menu-item key="setting:1"><a-icon type="idcard" /> Profile</a-menu-item>
          <a-menu-item key="setting:2"><a-icon type="setting" /> Preferences</a-menu-item>
        </a-sub-menu>
        <a-menu-item key="signout">
          <a-icon type="logout" />Signout
        </a-menu-item>
      </a-menu>
  </a-layout-header>
</template>

<script>
export default {
  name: 'navbar'
}
</script>

<style>
#components-layout-top .logo {
  /* width: 120px; */
  /* height: 31px; */
  /* background: rgba(255,255,255,.2); */
  /* margin: 8px 12px 8px 12px; */
  margin-left: 10px;
  margin-right: 10px;
  color: #ffffff;
  font-size: 1.3rem;
  float: left;
}
.ant-layout-header {
  background: #001529;
  padding: 0 20px;
  height: 48px;
  line-height: 48px;
}
.ant-menu.ant-menu-dark .ant-menu-item-selected {
  background-color: transparent;
  border-bottom: 3px solid;
}
</style>
