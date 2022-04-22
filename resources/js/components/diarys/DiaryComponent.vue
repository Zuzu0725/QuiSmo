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
                        v-for="diary in diarys"
                        :key="diary.id"
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
        </v-card>
    </v-container>
</template>

<script>

export default {
    data() {
        return {
            diarys: [
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
        }
    }
}
</script>

<style>

</style>