import { defineStore } from 'pinia'
import { computed, reactive, ref } from 'vue'
import constants from '@/utils/constants'
import { clearLocalStorage, getLocalStorage, saveLocalStorage } from '@/utils/utils'

const ADMIN_INFO_KEY = 'admin_info'

export const useAdminStore = defineStore('admin', () => {
  const token = ref('')
  const admin = reactive({
    id: '',
    userName: '',
    name: '',
    phone: '',
  })

  const getToken = computed(() => {
    if (token.value) {
      return token.value
    }
    return getLocalStorage(constants.USER_TOKEN)
  })

  // 初始化时从localStorage恢复用户信息
  const tokenFromStorage = getLocalStorage(constants.USER_TOKEN)
  if (tokenFromStorage) {
    token.value = tokenFromStorage
    
    // 尝试恢复用户信息
    const adminInfoStr = getLocalStorage(ADMIN_INFO_KEY)
    if (adminInfoStr) {
      try {
        const adminInfo = JSON.parse(adminInfoStr)
        if (adminInfo && typeof adminInfo === 'object') {
          admin.id = adminInfo.id || ''
          admin.userName = adminInfo.userName || ''
          admin.name = adminInfo.name || ''
          admin.phone = adminInfo.phone || ''
        }
      } catch (e) {
        console.error('解析用户信息失败:', e)
      }
    }
  }

  function setAdminInfo(data: any) {
    admin.id = data.id
    admin.userName = data.userName
    admin.name = data.name
    admin.phone = data.phone
    token.value = data.token

    saveLocalStorage(constants.USER_TOKEN, data.token)
    // 同时保存用户信息到localStorage
    saveLocalStorage(ADMIN_INFO_KEY, JSON.stringify({
      id: data.id,
      userName: data.userName,
      name: data.name,
      phone: data.phone
    }))
  }

  function logout() {
    admin.id = ''
    admin.userName = ''
    admin.name = ''
    admin.phone = ''
    token.value = ''

    clearLocalStorage()
  }
  return { token, setAdminInfo, logout, admin, getToken }
})