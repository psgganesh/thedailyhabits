<template>
  <div>
    <a-layout-header>
        <div class="logo">
          <a-icon type="crown" /> atomic habits
        </div>
        <a-menu
          theme="dark"
          mode="horizontal"
          :defaultSelectedKeys="['']"
          :style="{ lineHeight: '64px', float: 'right' }"
        >
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
  </div>
</template>

<script>
export default {
  name: 'navbar'
}
</script>

<style>
.logo {
  margin: 0 10px;
  color: #ffffff;
  font-size: 1.3rem;
  float: left;
}
</style>