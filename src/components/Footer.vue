<template>
  <div class="version">
    <a target="_blank" class="copyright" href="https://github.com/lw3574910958-sys/myapp-admin"
      >@2025-{{ currentYear }} myapp-admin
    </a>
    <a target="_blank" class="version" href="https://github.com/lw3574910958-sys/myapp-admin"
      >公众号: myapp-admin
    </a>
  </div>
</template>

<script setup lang="ts">
import dayjs from 'dayjs'
const currentYear = dayjs().format('YYYY')
</script>
