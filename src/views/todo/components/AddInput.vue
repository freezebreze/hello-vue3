<template>
  <form class="w-full flex justify-center" @submit.prevent="">
    <div class="inline-flex gap-2 items-stretch justify-stretch flex-1">
      <input
        placeholder="输入您的待办事项"
        v-model="message"
        class="p-4 focus:outline-none rounded-2 bg-gray-500 w-full border outline-none text-gray-300 hover:bg-gray-800 not-italic text-base placeholder:italic placeholder:text-slate-400"
      />
      <button
        id="todo-submit"
        type="submit"
        @click="add"
        class="inline-flex w-24 hover:cursor-pointer items-center justify-center text-sm p-4 text-[#F2F2F2] bg-[#1E6F9F] hover:bg-cyan-800 rounded-2 border-0"
      >
        <span class="sm:mr-2">新增</span>
        <img
          class="hidden sm:block"
          src="@/assets/icons/plus.svg"
          alt="add button"
        />
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
