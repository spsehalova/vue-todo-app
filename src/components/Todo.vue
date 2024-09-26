<script setup>
import { computed } from 'vue'
const emit = defineEmits([ 'flip' ])
const props = defineProps([ "contents" ])

const todoStyle = computed(() => {
	if (props.contents.done) 
		return { mark: "x", class: "line-through decoration-cyan-400 decoration-2" }
	
	return { mark: " ", class: "" }
})

function flip() {
	emit('flip', props.contents.$id)
}

</script>

<template>
	<li v-bind:class="todoStyle.class">
		<span @click="flip()"> <code>[{{ todoStyle.mark }}]</code> {{ props.contents.title }} </span>
	</li> 
</template>