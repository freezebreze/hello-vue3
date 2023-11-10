<template>
  <div class="todo">
    <form @submit.prevent="addItem" id="todoform">
      <input placeholder="Enter your todo" v-model="newTodo" />
      <ul v-if="filterData.length" class="todos">
        <li
          @click="todo.done = !todo.done"
          @contextmenu.prevent="removeItem(todo)"
          :class="{ completed: todo.done }"
          v-for="todo in filterData"
          :key="todo.id"
        >
          <span>{{ todo.context }}</span>
        </li>
      </ul>
      <ul class="empty" v-else>
        empty todolist
      </ul>
    </form>
    <button v-if="todoData.length" @click="hideCompleted = !hideCompleted">
      {{ hideCompleted ? 'show all' : 'hideCompleted' }}
    </button>
    <small
      >Left click to toggle completed. <br />
      Right click to delete todo</small
    >
  </div>
</template>

<script setup lang="ts">
import { useTodoStore } from '@/stores/todo'
const store = useTodoStore()
const { todoData, id } = storeToRefs(store)
let hideCompleted = ref(false)
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
  background-color: #f5f5f5;
}

#todoform {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 100%;
  width: 400px;
  > input {
    text-align: center;
    border: none;
    color: #444;
    font-size: 2rem;
    padding: 1rem 2rem;
    display: block;
    width: 100%;
    padding: 0;
    ::placeholder {
      color: #d5d5d5;
    }
    :focus {
      outline-color: rgb(179, 131, 226);
    }
  }
}

.todos {
  background-color: #fff;
  padding: 0;
  margin: 0;
  list-style-type: none;
  li {
    border-top: 1px solid #e5e5e5;
    cursor: pointer;
    font-size: 1.5rem;
    padding: 1rem 2rem;
  }
  li.completed {
    color: #b6b6b6;
    text-decoration: line-through;
  }
}

.empty {
  color: #444;
  background-color: #fff;
  padding: 0;
  margin: 0;
  font-size: 1.5rem;
  padding: 1rem 2rem;
  text-align: center;
}
small {
  color: #b5b5b5;
  margin-top: 3rem;
  text-align: center;
}

button {
  width: 400px;
  height: 40px;
  background-color: #fff;
  border: 0;
  border-radius: 5px;
  margin-top: 20px;
  cursor: pointer;
  font-size: 1rem;
}
</style>
