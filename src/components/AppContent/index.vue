<!--
 * @Descripttion: 
 * @Author: taoman
 * @Date: 2021-03-01 15:10:03
 * @LastEditors: taoman
 * @LastEditTime: 2021-03-03 11:13:06
-->
<template>
  <a-layout-content style="margin: 0 16px">
    <!-- <a-breadcrumb style="margin: 16px 0">
      <a-breadcrumb-item>User</a-breadcrumb-item>
      <a-breadcrumb-item>Bill</a-breadcrumb-item>
    </a-breadcrumb> -->
    <AppBreadCrumb />
    <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
      <router-view />
    </div>
  </a-layout-content>
</template>

<script lang=ts>
import { defineComponent, ref } from 'vue'
import AppBreadCrumb from '/@/components/AppBread/index.vue'
export default defineComponent({
  name: 'AppContent',
  components: {
    AppBreadCrumb
  }
})
</script>

<style lang='less' scoped></style>