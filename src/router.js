import { createRouter, createWebHistory } from "vue-router";
import Home from "./view/home";
const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    // {
    //     path: "/:pathMatch(.*)*",
    //     name: "NotFound",
    //     component: () =>
    //         import ( /*webpackChunkName: "notFound" */ "./view/notFound"),
    // },
];
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});
// router.beforeEach(function(transition) {
//     if (transition.to.path === '/*') {
//         window.location.href = '/404'
//     } else {
//         transition.next()
//     }
// });
export default router;