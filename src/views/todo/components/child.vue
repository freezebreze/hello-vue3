<template>
  <div>this is child</div>
  <div>{{ msg }}</div>
</template>

<script setup lang="ts">
defineProps<{ msg: string }>()
</script>

<style lang="less" scoped></style>
