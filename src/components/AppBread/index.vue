<template>
  <a-breadcrumb style="margin: 16px 0">
    <a-breadcrumb-item v-for="item in route.matched" :key="item">{{
      item.meta.title
    }}</a-breadcrumb-item>
  </a-breadcrumb>
</template>
<script lang='ts'>
import {
  onBeforeMount,
  onMounted,
  reactive,
  toRefs,
  watch
} from '@vue/runtime-core'
import { useRoute } from 'vue-router'
export default {
  name: 'AppBreadCrumb',
  setup() {
    const route = useRoute()
    return {
      route
    }
  }
}
</script>

