import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import HomeComponent from "./components/HomeComponent.vue";
import DiaryComponent from "./components/diarys/DiaryComponent.vue";
import DiaryCreateComponent from "./components/diarys/DiaryCreateComponent.vue";

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
        },
        {
            path: "/diary/create",
            name: "diary.create",
            component: DiaryCreateComponent
        },
    ]
});

export default router;