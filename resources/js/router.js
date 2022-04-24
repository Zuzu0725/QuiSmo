import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import HomeComponent from "./components/HomeComponent.vue";
import DiaryComponent from "./components/diarys/DiaryComponent.vue";
import DiaryCreateComponent from "./components/diarys/DiaryCreateComponent.vue";
import DiaryEditComponent from "./components/diarys/DiaryEditComponent.vue";

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
        {
            path: "/diary/edit/:id",
            name: "diary.edit",
            component: DiaryEditComponent,
            props: route => ({
                id: route.params.id,
                date: route.params.date,
                status: route.params.status,
                comment: route.params.comment
            })
        },
    ]
});

export default router;