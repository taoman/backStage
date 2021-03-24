<!--
 * @Descripttion: 
 * @Author: taoman
 * @Date: 2021-03-01 14:45:01
 * @LastEditors: taoman
 * @LastEditTime: 2021-03-15 15:19:12
-->
<template>
  <a-layout-header style="background: #fff; padding: 0">
    <a-row type="flex" justify="end" align="middle">
      <a-col class="mr-3">
        <a-avatar
          src="https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1220668820,4241881064&fm=26&gp=0.jpg"
        >
          <template #icon>
            <UserOutlined />
          </template>
        </a-avatar>
      </a-col>
      <a-col class="mr-3">
        <a-dropdown>
          <a class="ant-dropdown-link" @click.prevent>
            taoman
            <DownOutlined />
          </a>
          <template #overlay>
            <a-menu>
              <a-menu-item @click="$router.push('/login')">
                退出登录
              </a-menu-item>
              <a-menu-item> 修改密码 </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </a-col>
    </a-row>
  </a-layout-header>
</template>

<script lang=ts>
import { DownOutlined, UserOutlined } from '@ant-design/icons-vue'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'AppHeader',
  components: {
    DownOutlined,
    UserOutlined
  }
})
</script>

<style lang='less' scoped></style>