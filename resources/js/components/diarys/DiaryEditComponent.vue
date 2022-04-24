<template>
    <v-container class="mt-3">
        <v-card
            elevation="2"
            class="pa-5"
        >
            <v-card-title class="justify-center pa-0 mb-5">日記編集</v-card-title>

            <v-form>
                <DatePicker />

                <p class="mb-0" style="color: #616161;">気分</p>
                <v-btn-toggle
                    color="primary"
                    dense
                    group
                >
                    <v-btn
                        icon
                        v-bind:class="(status === 1) ? 'v-item-active v-btn--active' : ''"
                    >
                        <v-icon>mdi-emoticon</v-icon>
                    </v-btn>
                    <v-btn
                        icon
                        v-bind:class="(status === 2) ? 'v-item-active v-btn--active' : ''"
                    >
                        <v-icon>mdi-emoticon-neutral</v-icon>
                    </v-btn>
                    <v-btn
                        icon
                        v-bind:class="(status === 3) ? 'v-item-active v-btn--active' : ''"
                    >
                        <v-icon>mdi-emoticon-frown</v-icon>
                    </v-btn>
                </v-btn-toggle>
                <v-textarea
                    label="コメント"
                    prepend-icon="mdi-comment"
                    v-model="comment"
                >
                </v-textarea>
                <v-btn
                    depressed
                    color="primary"    
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
import DatePicker from "../layouts/DatePickerComponent.vue"
export default {
    components: {
        DatePicker
    },
    props: {
        id: Number,
        date: String,
        status: Number,
        comment: String
    }
    
}

</script>

<style>

</style>