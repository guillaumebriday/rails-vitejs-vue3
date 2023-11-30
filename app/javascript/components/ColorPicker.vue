<template>
  <p>
    <el-color-picker
      v-model="color"
    />
  </p>
</template>

<script setup>
import { ref } from 'vue'
import { ElColorPicker } from "element-plus"
import 'element-plus/es/components/color-picker/style/css'

const color = ref()
</script>
