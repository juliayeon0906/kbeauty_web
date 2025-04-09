import { createRouter } from "vue-router";
import { createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Stylists from "@/views/Stylists.vue";
import Services from "@/views/Services.vue";
import Gallery from "@/views/Gallery.vue";
import Reservation from "@/views/Reservation.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/stylists',
        name: 'Stylists',
        component: Stylists
    },
    {
        path: '/services',
        name: 'Services',
        component: Services,
    },
    {
        path: '/gallery',
        name: 'Gallery',
        component: Gallery,
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/reservation',
        name: 'Reservation',
        component: Reservation
    },
]

const router = createRouter({
    history: createWebHistory('/'),
    routes
})

export default router;