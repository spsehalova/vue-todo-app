<script setup>
import { useTodoStore } from '@/stores/counter';
import Todo from '@/components/Todo.vue'

const props = defineProps(['type']) //: type: 'done'|'pending'
const todos = useTodoStore()

function flipATodo(id) {
	console.log(id)
	todos.flip(id)
}

</script>

<template>
	 <div>
		<ul>
			<Todo v-if="props.type == 'pending'" v-for="todoP in todos.pending" :key="todoP.$id" :contents="todoP" @flip="flipATodo" />
			<Todo v-else-if="props.type == 'done'" v-for="todoD in todos.done" :key="todoD.$id" :contents="todoD" @flip="flipATodo" />
		</ul>
	</div>
</template>