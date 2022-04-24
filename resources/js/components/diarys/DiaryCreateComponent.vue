<template>
    <v-container class="mt-3">
        <v-card
            elevation="2"
            class="pa-5"
        >
            <v-card-title class="justify-center pa-0 mb-5">日記登録</v-card-title>

            <v-form>
                <DatePicker />

                <p class="mb-0" style="color: #616161;">気分</p>
                <v-btn-toggle
                    color="primary"
                    dense
                    group
                >
                    <v-btn icon>
                        <v-icon>mdi-emoticon</v-icon>
                    </v-btn>
                    <v-btn icon>
                        <v-icon>mdi-emoticon-neutral</v-icon>
                    </v-btn>
                    <v-btn icon>
                        <v-icon>mdi-emoticon-frown</v-icon>
                    </v-btn>
                </v-btn-toggle>
                <v-textarea
                    label="コメント"
                    prepend-icon="mdi-comment"
                ></v-textarea>
                
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
    date() {
        return {
        }
    }
}
</script>

<style>

</style>