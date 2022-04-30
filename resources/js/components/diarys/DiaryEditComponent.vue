<template>
    <v-container class="mt-3">
        <v-card
            elevation="2"
            class="pa-5"
        >
            <v-card-title class="justify-center pa-0 mb-5">日記編集</v-card-title>

            <v-form>
                <v-menu
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                >
                    <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                            v-model="date"
                            label="日付"
                            prepend-icon="mdi-calendar"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                        ></v-text-field>
                    </template>
                    <v-date-picker
                        v-model="date"
                        no-title
                        scrollable
                        color="red accent-2"
                    >
                        <v-spacer></v-spacer>
                        <v-btn
                            text
                            color="primary"
                            @click="menu = false"
                        >
                            Cancel
                        </v-btn>
                        <v-btn
                            text
                            color="primary"
                            @click="$refs.menu.save(date)"
                        >
                            OK
                        </v-btn>
                    </v-date-picker>
                </v-menu>

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
export default {
    props: {
        id: Number,
        date: String,
        status: Number,
        comment: String
    },
    data() {
        return {
            menu: false
        }
    }
    
}

</script>

<style>

</style>