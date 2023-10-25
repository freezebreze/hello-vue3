<template>
  <div class="todo">
    <div>
      <input placeholder="输入一些想法之类的吧" v-model="newTodo" />
      <button @click="addItem">+</button>
    </div>
    <div v-if="filterData.length">
      <ul>
        <li v-for="todo in filterData" :key="todo.id">
          <span>{{ todo.id }}</span>
          <input type="checkbox" v-model="todo.done" />
          <span :class="{ done: todo.done }">{{ todo.context }}</span>
          <button @click="removeItem(todo)">X</button>
        </li>
      </ul>
    </div>
    <div v-else>还没有待办事项，感觉添加一条代办事项吧~</div>
    <button @click="hideCompleted = !hideCompleted">
      {{ hideCompleted ? '展示所有' : '隐藏完成' }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { useTodoStore } from '@/stores/todo'
const store = useTodoStore()
const { todoData, id } = storeToRefs(store)
const hideCompleted = ref(false)
const newTodo = ref('')

let filterData = computed(() => {
  return hideCompleted.value
    ? todoData.value.filter((item) => !item.done)
    : todoData.value
})
function addItem(): void {
  if (!newTodo.value) {
    alert('请输入要代办的事项')
    return
  }
  let item: TodoItem = {
    id: id.value,
    context: newTodo.value,
    done: false,
  }
  newTodo.value = ''
  store.updateMessageSync(item)
}
function removeItem(todo: TodoItem) {
  // todoData.value = todoData.value.filter((item) => item.id != todo.id)
  store.removeTodo(todo)
}
</script>

<style lang="less" scoped>
.todo {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--c-text);
  padding: calc(var(--w-space) * 3) 0;
  margin: 0 auto;
}
</style>
