<!--
 * @Descripttion: 
 * @Author: taoman
 * @Date: 2021-03-01 14:03:44
 * @LastEditors: taoman
 * @LastEditTime: 2021-03-01 16:06:59
-->
<template>
  <a-layout id="app" style="min-height: 100vh">
    <AppSider />
    <a-layout>
      <AppHeader />
      <AppContent />
      <AppFooter />
    </a-layout>
  </a-layout>
</template>

<script>
import AppSider from '/@/components/AppSider/index.vue'
import AppHeader from '/@/components/AppHeader/index.vue'
import AppContent from '/@/components/AppContent/index.vue'
import AppFooter from '/@/components/AppFooter/index.vue'
export default {
  name: 'Layout',
  components: {
    AppSider,
    AppHeader,
    AppContent,
    AppFooter
  },
  data() {
    return {
      collapsed: false,
      selectedKeys: ['1']
    }
  }
}
</script>
