<template>
    <v-container class="mt-3">
        <v-card
            elevation="2"
            class="pa-5"
        >
            <v-card-title class="justify-center pa-0 mb-5">日記登録</v-card-title>

            <v-form
                ref="form"
                @submit.prevent
            >
                <v-menu
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                >
                    <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                            v-model="diary.date"
                            label="日付"
                            prepend-icon="mdi-calendar"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                        ></v-text-field>
                    </template>
                    <v-date-picker
                        v-model="diary.date"
                        no-title
                        scrollable
                        color="red accent-2"
                    ></v-date-picker>
                </v-menu>

                <p class="mb-0" style="color: #616161;">気分</p>
                <v-btn-toggle
                    color="primary"
                    dense
                    group
                    v-model="diary.status"
                >
                    <v-btn icon value="1">
                        <v-icon>mdi-emoticon</v-icon>
                    </v-btn>
                    <v-btn icon value="2">
                        <v-icon>mdi-emoticon-neutral</v-icon>
                    </v-btn>
                    <v-btn icon value="3">
                        <v-icon>mdi-emoticon-frown</v-icon>
                    </v-btn>
                </v-btn-toggle>
                <v-textarea
                    label="コメント"
                    prepend-icon="mdi-comment"
                    v-model="diary.comment"
                ></v-textarea>
                
                    <v-btn
                        depressed
                        color="primary"
                        @click="submit"
                    >
                        登録する
                    </v-btn>
                    <v-btn
                        depressed
                        class="ml-2"
                    >
                        キャンセル
                    </v-btn>
            </v-form>
        </v-card>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            diary: {
                date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            },
            menu: false,
        }
    },
    methods: {
        submit() {
            axios.post('/api/diaries', this.diary)
                .then((res) => {
                    this.$router.push('/diaries');
                })
        }
    }
}
</script>

<style>

</style>