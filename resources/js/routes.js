import Vue from 'vue'
import VueRouter from 'vue-router'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import EventView from './pages/EventView'
import Admin from './pages/Admin'

// Sections
import UserSection from './sections/User'
import UserSectionAdd from './sections/UserAdd'
import EventSection from './sections/Event'
import EventSectionAdd from './sections/EventAdd'
import NewsSection from './sections/News'
import NewsSectionAdd from './sections/NewsAdd'



Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home	
		},
		{
			path: '/about',
			name: 'about',
			component: About	
		},
		{
			path: '/event/:id',
			name: 'event',
			component: EventView	
		},
		{
			path: '/admin',
			name: 'admin',
			component: Admin,
			children: [
				{
					path: '/admin/user',
					component: UserSection
				},
				{
					path: '/admin/event',
					component: EventSection
				},
				{
					path: '/admin/news',
					component: NewsSection
				},
				{
					path: '/admin/addevent',
					component: EventSectionAdd
				},
				{
					path: '/admin/addnews',
					component: NewsSectionAdd
				},
				{
					path: '/admin/adduser',
					component: UserSectionAdd
				}
			]
		},
	]
})

export default router;