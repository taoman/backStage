<!--
 * @Descripttion: 
 * @Author: taoman
 * @Date: 2021-03-01 14:03:44
 * @LastEditors: taoman
 * @LastEditTime: 2021-03-04 09:51:10
-->
<template>
  <a-layout-sider v-model:collapsed="collapsed" theme="light" collapsible>
    <Logo :show-title="!collapsed" />
    <!-- <a-menu v-model:selectedKeys="selectedKeys" mode="inline">
      <a-menu-item key="1">
        <pie-chart-outlined />
        <span>Option 1</span>
      </a-menu-item>
      <a-menu-item key="2">
        <desktop-outlined />
        <span>Option 2</span>
      </a-menu-item>
      <a-sub-menu key="sub1">
        <template #title>
          <user-outlined />
          <span>User</span>
        </template>
        <a-menu-item key="3">Tom</a-menu-item>
        <a-menu-item key="4">Bill</a-menu-item>
        <a-menu-item key="5">Alex</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <template #title>
          <team-outlined />
          <span>Team</span>
        </template>
        <a-menu-item key="6">Team 1</a-menu-item>
        <a-menu-item key="8">Team 2</a-menu-item>
      </a-sub-menu>
    </a-menu> -->
    <a-menu
      :default-selected-keys="['1']"
      :default-open-keys="['2']"
      mode="inline"
      :inline-collapsed="collapsed"
      @click="onMenuClick"
    >
      <template v-for="item in asyncRouter" :key="item.path">
        <template v-if="!item.children">
          <a-menu-item :key="item.path + '$' + item.name">
            <PieChartOutlined />
            <span>{{ item.meta.title }}</span>
          </a-menu-item>
        </template>
        <template v-else>
          <sub-menu :menu-info="item" :key="item.path" />
        </template>
      </template>
    </a-menu>
  </a-layout-sider>
</template>

<script>
import Logo from '/@/components/Logo.vue'
import { defineComponent, onMounted, ref } from 'vue'
import {
  // menu
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined,
  TeamOutlined,
  FileOutlined,
  MailOutlined
} from '@ant-design/icons-vue'
import { asyncRouter } from '/@/router/asyncRouter'

const SubMenu = {
  name: 'SubMenu',
  props: {
    menuInfo: {
      type: Object,
      default: () => ({})
    },
    parentsPath: {
      type: String,
      default: () => ''
    }
  },
  template: `
    <a-sub-menu :key="menuInfo.path" v-bind="$attrs">
      <template #title>
        <span>
          <MailOutlined /><span>{{ menuInfo.meta.title }}</span>
        </span>
      </template>
      <template v-for="item in menuInfo.children" :key="item.path">
        <template v-if="!item.children && !item.meta.hidden">
          <a-menu-item :key="parentsPath + item.path  + '$' + item.name">
            <PieChartOutlined />
            <span>{{ item.meta.title }}</span>
          </a-menu-item>
        </template>
        <template v-else-if="!item.meta.hidden">
          <sub-menu :menu-info="item" :parentsPath="parentsPath +'/' +  item.path" :key="parentsPath +'/' + item.path" />
        </template>
      </template>
    </a-sub-menu>
  `,
  components: {
    PieChartOutlined,
    MailOutlined
  }
}
export default defineComponent({
  name: 'AppSider',
  components: {
    'sub-menu': SubMenu,
    Logo,
    PieChartOutlined
    // DesktopOutlined,
    // UserOutlined,
    // TeamOutlined
  },
  setup() {
    return { asyncRouter }
  },
  data() {
    return {
      collapsed: false,
      selectedKeys: ['1']
    }
  },
  methods: {
    onMenuClick(event) {
      const pathAndName = event.key.split('$')
      const name = pathAndName[1]
      this.$router.push({
        name
      })
    }
  }
})
</script>
