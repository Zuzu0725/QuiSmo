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
            dialog: false,
            dialogItems: {
                id: Number,
                date: String,
                status: Number,
                comment: String
            },
            diaryIndex: -1,
            diaries: [
                {
                    id: 1,
                    date: '2022-04-17',
                    status: 1,
                    comment: '問題なし'
                },
                {
                    id: 2,
                    date: '2022-04-18',
                    status: 2,
                    comment: '食後に吸いたくなった'
                },
                {
                    id: 3,
                    date: '2022-04-19',
                    status: 3,
                    comment: '飲みの場で吸ってしまった'
                }
            ]
        }
    },
    methods: {
        diaryCreate() {
            this.$router.push('/diary/create')
        },
        showDiary(id){
            this.dialog = true
            this.diaryIndex = id -1
            this.dialogItems.id = this.diaries[this.diaryIndex].id
            this.dialogItems.date = this.diaries[this.diaryIndex].date
            this.dialogItems.status = this.diaries[this.diaryIndex].status
            this.dialogItems.comment = this.diaries[this.diaryIndex].comment
        },
        closeDialog() {
            this.dialog = false
        },
        moveEdit(id) {
            this.diaryIndex = id -1
            this.$router.push({
                name: 'diary.edit',
                params: {
                    id: this.diaries[this.diaryIndex].id,
                    date: this.diaries[this.diaryIndex].date,
                    status: this.diaries[this.diaryIndex].status,
                    comment: this.diaries[this.diaryIndex].comment,
                }
            })
        }
    }
}
</script>

<style>

</style>