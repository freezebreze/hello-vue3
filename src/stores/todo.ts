import { log } from 'console'
import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todoData: [] as TodoItem[],
    id: 1,
  }),
  getters: {
    getTodo(state) {
      return state.todoData ?? []
    },
  },
  actions: {
    // 异步更新 todo
    async updateTodo(todo: TodoItem): Promise<string> {
      return new Promise((resolve) => {
        setTimeout(() => {
          // 这里的 this 是当前的 Store 实例
          this.todoData.push(todo)
          this.id++
          resolve('Async done.')
        }, 1000)
      })
    },
    // 同步更新 todo
    updateTodoSync(todo: TodoItem): string {
      // 这里的 this 是当前的 Store 实例
      this.todoData.push(todo)
      this.id++
      return 'Sync done.'
    },
    editTodoSync(todo: TodoItem): void {
      if (todo.context) return
      this.todoData.filter((v) => {
        if (v.id == todo.id) {
          return todo
        }
      })
    },
    // 删除todo
    removeTodo(todo: TodoItem) {
      this.todoData = this.todoData.filter((v) => v !== todo)
    },
  },
  persist: true,
})
