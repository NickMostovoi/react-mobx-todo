import { makeAutoObservable } from 'mobx'

class Todo {
    todos = [
        { id: 1, title: 'Hello1', completed: false },
        { id: 2, title: 'Hello2', completed: false }
    ]

    constructor() {
        makeAutoObservable(this)
    }

    createTodo(todo) {
        this.todos.push(todo)
    }

    deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id)
    }

    completeTodo(id) {
        this.todos = this.todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    }
}

const todoStore = new Todo();

export default todoStore;