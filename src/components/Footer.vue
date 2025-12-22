<template>
  <div class="version">
    <span target="_blank" class="copyright"> @{{ currentDate }} myapp-admin </span>
    <a target="_blank" class="version" href="https://github.com/lw3574910958-sys/myapp-admin-vue"
      >github: myapp-admin
    </a>
  </div>
</template>

<script setup lang="ts">
import dayjs from 'dayjs'
const currentDate = dayjs().format('YYYY-MM-DD')
</script>
