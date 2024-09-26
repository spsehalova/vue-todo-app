<script setup>
import { ref } from "vue"
import { useTodoStore } from '@/stores/counter';

const todos = useTodoStore()
const todoTitle = ref("")

function CreateToDo() {
	if (todoTitle.length === 0) return null;
	todos.put({ title: todoTitle.value })

	todoTitle.value = ""
}

function CancelToDoCreation() {
	todoTitle.value = ""
}
</script>

<template>
    <div class="flex mb-2">

        <div>
            <span>{{ [ `⭕️ ${todos.pending?.length ?? 0}`, `❌ ${todos.done?.length ?? 0}`, `🔲 ${todos.count ?? 0}`, ].join(' • ') }}</span>
        </div>

        <input 
			v-model="todoTitle" 
			type="text" 
			class="bg-cyan-100 mx-2 px-2 flex-auto rounded-full text-cyan-900"
            placeholder="Whatcha' wanna do next?" 
			@keyup.enter="CreateToDo"
            @keyup.esc="CancelToDoCreation"
		>

        <button class="bg-cyan-100 px-2 rounded-full text-cyan-900" @click="CreateToDo">Add</button>
    </div>
</template>