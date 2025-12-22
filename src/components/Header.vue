<template>
  <div class="header">
    <div class="header-menu">
      <div class="header-logo">
        <img src="@/assets/login/logo.png" />
        <div class="header-title">MyApp Admin</div>
      </div>
      <div class="header-rinfo">
        当前用户:
        <span>{{ admin.userName }}</span>
        <span class="header-exit">
          <a @click="loginOut()">退出登录</a>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { adminApi } from '@/api/admin-api'
import { useAdminStore } from '@/stores/admin'
import { storeToRefs } from 'pinia'

const adminStore = useAdminStore()
const { admin } = storeToRefs(adminStore)

async function loginOut() {
  try {
    await adminApi.logout()
    window.location.href = '/login'
  } catch (error) {
    console.error(error)
  } finally {
    useAdminStore().logout()
  }
}
</script>
