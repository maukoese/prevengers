import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: "Home",
		component: Home,
		meta: {
			title: "Home",
		},
	},
	{
		path: "/about",
		name: "About",
		component: () => import("../views/About.vue"),
		meta: {
			title: "About",
		},
	},
	{
		path: "/team",
		name: "Team",
		component: () => import("../views/Team.vue"),
		meta: {
			title: "Team",
		},
	},
	{
		path: "/powers",
		name: "Powers",
		component: () => import("../views/Powers.vue"),
		meta: {
			title: "Powers",
		},
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

router.beforeEach((to, from, next) => {
	const nearestWithTitle = to.matched
		.slice()
		.reverse()
		.find((r) => r.meta && r.meta.title);
	if (nearestWithTitle) {
		document.title = `${nearestWithTitle.meta.title} - ${process.env.VUE_APP_NAME}`;
	}

	next();
});

export default router;
