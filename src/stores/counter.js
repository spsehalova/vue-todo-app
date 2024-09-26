import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todos', () => {
	const todos = ref({}) //: { [id: string]: { $id: string, title: string, done: boolean } }

	const arrayed = computed(() => Object.values(todos.value) ?? [])
	const done = computed(() => arrayed.value.filter(todo => todo.done) ?? 0)
	const pending = computed(() => arrayed.value.filter(todo => !todo.done) ?? 0)
	const count = computed(() => arrayed.value.length)

	function flip(id) {
		if (todos.value.hasOwnProperty(id))
			todos.value[id].done = !todos.value[id].done

		console.log(todos.value[id])
	}
	function put(data) {
		let id = Math.random().toString(16).slice(2)

		if (data.hasOwnProperty("title")) {
			data.done = false
			data.$id = id

			todos.value[id] = data
		}
	}
	function edit(id, data) {
		if (todos.hasOwnProperty(id))
			todos.value[id] = Object.assign(todos[id], data)
	}

	return { todos, arrayed, done, pending, count, flip, put, edit }
})
