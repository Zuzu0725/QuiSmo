import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import HomeComponent from "./components/HomeComponent.vue";
import DiaryComponent from "./components/diarys/DiaryComponent.vue";

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeComponent
        },
        {
            path: "/diary",
            name: "diary",
            component: DiaryComponent
        }
    ]
});

export default router;