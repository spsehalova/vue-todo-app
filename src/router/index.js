import { createRouter, createWebHashHistory } from 'vue-router'
import TodoView from '@/views/TodoView.vue'
import NotFound from '@/views/404.vue'

const router = createRouter({
	history: createWebHashHistory(import.meta.env.BASE_URL),

	routes: [
		{
			path: '/',
			name: 'home',
			redirect: "/todos"
		},
		{
			path: "/pending",
			name: 'pending',
			component: TodoView,
			props: { type: 'pending' }
		},
		{
			path: '/done',
			name: 'done',
			props: { type: 'done' },
			component: TodoView
		},
		{ 
			path: '/:pathMatch(.*)*', 
			name: 'NotFound', 
			component: NotFound 
		},
	],

	linkActiveClass: "active",
})

export default router
