<template>
  <form
    @submit.prevent=""
    class="flex flex-col items-center justify-center sticky"
  >
    <div class="flex justify-center items-center gap-2 w-[46rem]">
      <input
        placeholder="输入您的待办事项"
        v-model="message"
        class="p-4 focus:outline-none rounded-2 bg-gray-500 w-full border outline-none text-gray-300 hover:bg-gray-800 not-italic text-base placeholder:italic placeholder:text-slate-400"
      />
      <button
        id="todo-submit"
        type="submit"
        @click="add"
        class="flex w-[98px] hover:cursor-pointer text-center items-center justify-center text-sm p-4 text-[#F2F2F2] bg-[#1E6F9F] hover:bg-cyan-800 rounded-2 border-0"
      >
        <span class="mr-2">新增</span>
        <img src="@/assets/icons/plus.svg" alt="add button" />
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
const message = ref('')
const emit = defineEmits<{
  (e: 'add-item', message: string): void
}>()
function add() {
  emit('add-item', message.value)
  message.value = ''
}
</script>

<style lang="less" scoped></style>
