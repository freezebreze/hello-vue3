<template>
  <div class="flex flex-col flex justify-center content-center w-full">
    <div class="justify-between items-end inline-flex mb-6">
      <span class="text-[#4EA8DE] text-sm font-bold">任务总数:{{ total }}</span>
      <span class="text-indigo-400 text-sm font-bold"
        >已完成:{{ completeNum }} / {{ total }}</span
      >
    </div>
    <div class="flex flex-col gap-3">
      <transition-group name="list">
        <label
          v-for="item in data"
          :key="item.id"
          class="cursor-pointer p-4 dark:bg-[#262626] dark:text-[#F2F2F2] bg-slate-200 hover:bg-slate-100 dark:hover:bg-slate-400 text-black rounded-2 shadow border border-white justify-start items-center gap-3 inline-flex"
        >
          <input
            type="checkbox"
            class="checkbox"
            :checked="item.done"
            @click="done(item)"
          />
          <span
            class="break-words overflow-y-auto grow"
            :class="item.done ? 'line-through' : ''"
            >{{ item.context }}</span
          >
          <img
            class="w-6 h-6"
            @click.prevent="remove(item)"
            src="@/assets/icons/trash.svg"
            alt="log"
          />
          <img
            class="w-6 h-6"
            @click.prevent="openModal(item)"
            src="@/assets/icons/edit.svg"
            alt="log"
          />
        </label>
      </transition-group>
    </div>
  </div>
  <n-modal v-model:show="showModal" transform-origin="center">
    <n-card
      style="width: 600px"
      title="编辑"
      :bordered="false"
      role="dialog"
      aria-modal="true"
      :closable="true"
      :on-close="closeModal"
      :size="isDesktop ? 'huge' : 'small'"
    >
      <n-input
        type="text"
        :default-value="curEdit.context"
        size="large"
        round
        :on-input="(v) => (editMsg = v)"
      />
      <template #footer>
        <div class="flex items-center justify-center">
          <n-button attr-type="submit" @click="updateMessage" size="large"
            >保存</n-button
          >
        </div>
      </template>
    </n-card>
  </n-modal>
</template>

<script setup lang="ts">
import { isMobile } from '@bassist/utils'
const props = defineProps<{ data: TodoItem[] }>()
const emit = defineEmits<{
  (e: 'remove-item', item: TodoItem): void
  (e: 'edit-item', item: TodoItem): void
  (e: 'close-model'): void
}>()
const showModal = ref(false)
const isDesktop = ref(true)
const editMsg = ref('')
const msg = useMessage()
let curEdit = reactive({} as TodoItem)
function updateMessage() {
  if (editMsg.value == '') {
    msg.info('请输入修改后的待办事项', {
      duration: 2000,
      // closable: true,
    })
    return
  }
  curEdit.context = editMsg.value
  emit('edit-item', curEdit)
  showModal.value = false
}
function openModal(item: TodoItem) {
  curEdit = item
  isDesktop.value = isMobile() ? false : true
  showModal.value = true
}
function remove(item: TodoItem) {
  emit('remove-item', item)
}
function done(item: TodoItem) {
  item.done = !item.done
}
function closeModal() {
  showModal.value = false
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
.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
