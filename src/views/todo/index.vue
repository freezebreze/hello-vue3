<template>
  <div class="w-full h-full flex-col items-center justify-center">
    <div class="m-2 gap-3 flex">
      <ToggleTheme @start-drive="actionDrive"></ToggleTheme>
    </div>
    <Logo class="my-16"></Logo>

    <div class="flex flex-col items-center justify-center p-3">
      <AddInput
        class="w-[22rem] sm:w-[46rem]"
        id="todoinput"
        @add-item="addItem"
      ></AddInput>
      <div
        class="flex flex-col items-center justify-center w-[22rem] sm:w-[46rem] my-16 overflow-x-hidden overflow-y-auto"
      >
        <div
          id="drive-input"
          v-if="!isDrive"
          class="flex items-center justify-center mt16 w-full"
        >
          <label
            class="cursor-pointer w-full p-4 transition ease-in-out delay-150 bg-[#262626] rounded-2 shadow border border-white justify-start items-center gap-3 inline-flex"
          >
            <input type="checkbox" class="checkbox" />
            <span class="text-[#F2F2F2] break-words overflow-y-auto grow"
              >这是一个示例</span
            >
            <img
              id="drive-trash"
              class="w-6 h-6"
              src="@/assets/icons/trash.svg"
              alt="log"
            />
            <img
              id="drive-edit"
              class="w-6 h-6"
              src="@/assets/icons/edit.svg"
              alt="log"
            />
          </label>
        </div>
        <TodoList
          v-else-if="todoData.length"
          @remove-item="removeItem"
          @edit-item="editItem"
          :data="listdata"
        ></TodoList>
        <div
          v-else
          class="w-full h-full flex flex-col items-center justify-center my-16 gap-4"
        >
          <img src="../../assets/img/Clipboard.png" alt="Clipboard" />
          <p class="text-zinc-500 text-base font-bold leading-snug">
            您还没有创建有任何待办事项
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTodoStore } from '@/stores/todo'
import ToggleTheme from '@/components/ToggleTheme.vue'
import AddInput from './components/AddInput.vue'
import TodoList from './components/TodoList.vue'
import Logo from './components/Logo.vue'
import { driver } from 'driver.js'
import 'driver.js/dist/driver.css'
import { useStorage } from '@/hooks'
const store = useTodoStore()
const { storage } = useStorage()
const { todoData, id } = storeToRefs(store)
const listdata = computed(() =>
  todoData.value.sort((pre, cur) => {
    return cur.id - pre.id
  }),
)
const isDrive = ref(storage.get('todo-driver'))
// let hideCompleted = ref(false)
const msg = useMessage()
const driverObj = driver({
  showProgress: true,
  allowClose: false,
  steps: [
    {
      popover: {
        title: '小软任务计划',
        description: '欢迎来到小软任务计划列表，接下来将为你介绍使用方式',
        nextBtnText: '下一步',
        prevBtnText: '前一步',
      },
    },
    {
      popover: {
        title: '持久化存储',
        description: '数据保存在浏览器刷新也不会丢失',
        nextBtnText: '下一步',
        prevBtnText: '前一步',
      },
    },
    {
      element: '#theme',
      popover: {
        title: '深色模式',
        description: '点击切换深色模式',
        nextBtnText: '下一步',
        prevBtnText: '前一步',
      },
    },
    {
      element: '#drive-help',
      popover: {
        title: '操作提示',
        description: '点击显示操作提示',
        nextBtnText: '下一步',
        prevBtnText: '前一步',
      },
    },
    {
      element: '#todoinput',
      popover: {
        title: '输入',
        description: '在这里输入待办事项',
        prevBtnText: '前一步',
        nextBtnText: '下一步',
        side: 'top',
        align: 'center',
      },
    },
    {
      element: '#todo-submit',
      popover: {
        title: '提交',
        description: '点击按钮或者回车提交输入',
        prevBtnText: '前一步',
        nextBtnText: '下一步',
      },
    },
    {
      element: '#drive-input',
      popover: {
        title: '事项',
        description: '单击完成该事项',
        prevBtnText: '前一步',
        nextBtnText: '下一步',
        side: 'bottom',
        align: 'center',
      },
    },
    {
      element: '#drive-edit',
      popover: {
        title: '编辑',
        description: '单击修改内容',
        prevBtnText: '前一步',
        nextBtnText: '下一步',
        side: 'bottom',
        align: 'center',
      },
    },
    {
      element: '#drive-trash',
      popover: {
        title: '删除',
        description: '单击移除该事项',
        prevBtnText: '前一步',
        nextBtnText: '完成',
        side: 'bottom',
        align: 'center',
        onNextClick: () => {
          isDrive.value = true
          storage.set('todo-driver', true)
          driverObj.moveNext()
        },
      },
    },
  ],
})

onMounted(() => {
  if (!isDrive.value) {
    driverObj.drive()
  }
})
function addItem(message: string): void {
  if (message === '') {
    msg.info('请输入要待办的事项', {
      duration: 2000,
      // closable: true,
    })
    return
  }
  let item: TodoItem = {
    id: id.value,
    context: message,
    done: false,
    time: new Date().getTime(),
  }
  store.updateTodoSync(item)
}
function actionDrive() {
  isDrive.value = false
  driverObj.drive()
}
function removeItem(todo: TodoItem) {
  // todoData.value = todoData.value.filter((item) => item.id != todo.id)
  store.removeTodo(todo)
}
function editItem(todo: TodoItem) {
  store.editTodoSync(todo)
}
</script>

<style lang="less" scoped></style>
