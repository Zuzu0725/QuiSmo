<template>
    <v-container class="mt-3">
        <v-card
            elevation="2"
            class="mb-3 pa-5"
        >
            <v-card-title class="justify-center pa-0 mb-4">禁煙日記</v-card-title>

            <v-btn
                outlined
                rounded
                color="primary"
                @click="diaryCreate"
            >
                <v-icon>mdi-plus-box-multiple</v-icon>
                新規登録
            </v-btn>
            
            <v-simple-table class="mt-2">
                <template v-slot:default>
                    <thead>
                        <tr>
                            <th class="text-left">
                                日付
                            </th>
                            <th class="text-left">
                                気分
                            </th>
                            <th class="text-left">
                                コメント
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        <tr
                            v-for="diary in diaries"
                            :key="diary.id"
                            @click="showDiary(diary.id)"
                        >
                            <td>{{ diary.date }}</td>
                            <td>
                                <v-icon
                                    v-if="diary.status === 1"
                                    color="red accent-2"
                                >
                                    mdi-emoticon
                                </v-icon>
                                <v-icon
                                    v-else-if="diary.status === 2"
                                    color="grey lighten-1"
                                >
                                    mdi-emoticon-neutral
                                </v-icon>
                                <v-icon
                                    v-else
                                    color="indigo accent-2"
                                >
                                    mdi-emoticon-frown
                                </v-icon>
                            </td>
                            <td>{{ diary.comment }}</td>
                        </tr>
                        
                    </tbody>
                </template>
            </v-simple-table>
            <v-dialog
                v-model="dialog"
                width="500"
            >
                <diary-show
                    :dialogItems="dialogItems"
                    @close="closeDialog"
                    @edit="moveEdit"
                    @delete="deleteDiary"
                ></diary-show>
            </v-dialog>
        </v-card>
    </v-container>
</template>

<script>
import DiaryShow from "../diarys/DiaryShowComponent.vue"

export default {
    components: {
        'diary-show': DiaryShow,
    },
    data() {
        return {
            diaries: [],
            dialogItems: {},
            dialog: false,
        }
    },
    methods: {
        // 日記情報取得
        getDiaries() {
            axios.get('/api/diaries')
                .then((res) => {
                    this.diaries = res.data;
                });
        },
        // 日記作成コンポーネントへの遷移
        diaryCreate() {
            this.$router.push('/diaries/create')
        },
        // 日記詳細ダイアログ
        showDiary(id){
            this.dialog = true
            axios.get('/api/diaries/' + id)
                .then((res) => {
                    this.dialogItems = res.data;
                });
        },
        closeDialog() {
            this.dialog = false
        },
        // 日記編集画面へ遷移
        moveEdit(id) {
            this.$router.push({name: 'diary.edit', params: {diaryId: id}})
        },
        // 日記削除
        deleteDiary(id) {
            axios.delete('/api/diaries/' + id)
                .then((res) => {
                    this.dialog = false;
                    this.getDiaries();
                });
        }
    },
    mounted() {
        this.getDiaries();
    }
}
</script>

<style>

</style>