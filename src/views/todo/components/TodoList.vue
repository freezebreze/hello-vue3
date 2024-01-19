<template>
  <div class="flex flex-col flex justify-center content-center my-16 w-full">
    <div class="justify-between items-end inline-flex mb-6">
      <span class="text-[#4EA8DE] text-sm font-bold">任务总数:{{ total }}</span>
      <span class="text-indigo-400 text-sm font-bold"
        >已完成:{{ completeNum }} / {{ total }}</span
      >
    </div>
    <div class="flex flex-col gap-3">
      <label
        v-for="item in data"
        :key="item.id"
        class="cursor-pointer p-4 transition ease-in-out delay-150 bg-[#262626] rounded-2 shadow border border-white justify-start items-center gap-3 inline-flex"
      >
        <input
          type="checkbox"
          class="checkbox"
          :checked="item.done"
          @click="done(item)"
        />
        <span
          class="text-[#F2F2F2] break-words overflow-y-auto grow"
          :class="item.done ? 'line-through' : ''"
          >{{ item.context }}</span
        >
        <img
          class="w-6 h-6"
          @click="remove(item)"
          src="@/assets/icons/trash.svg"
          alt="log"
        />
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ data: TodoItem[] }>()
const emit = defineEmits<{
  (e: 'remove-item', item: TodoItem): void
}>()
function remove(item: TodoItem) {
  emit('remove-item', item)
}
function done(item: TodoItem) {
  item.done = !item.done
}
let total = computed(() => props.data.length)
let completeNum = computed(() => {
  let result = 0
  props.data.forEach((item) => {
    if (item.done === true) {
      result++
    }
  })
  return result
})
</script>

<style lang="less" scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
