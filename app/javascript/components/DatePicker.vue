<template>
  <p>
    <el-date-picker
      v-model="date"
    />
  </p>
</template>

<script setup>
import { ref } from 'vue'
import { ElDatePicker } from "element-plus"
import 'element-plus/es/components/date-picker/style/css'

const date = ref()
</script>
