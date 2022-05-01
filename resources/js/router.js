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
            path: "/diaries",
            name: "diary",
            component: DiaryComponent
        },
        {
            path: "/diaries/create",
            name: "diary.create",
            component: DiaryCreateComponent
        },
        {
            path: '/diaries/:diaryId',
            name: 'diary.show',
            component: DiaryEditComponent,
            props: true
        },
        {
            path: "/diaries/:diaryId/edit",
            name: "diary.edit",
            component: DiaryEditComponent,
            props: true
        },
    ]
});

export default router;