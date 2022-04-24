<template>
    
        <v-card>
            <v-toolbar
                color="grey lighten-3"
                flat
            >
                <v-toolbar-title>{{ dialogItems.date }}</v-toolbar-title>
            </v-toolbar>
            <v-container class="pa-4">
                <div class="mb-2">
                    気分：
                    <v-icon
                        v-if="dialogItems.status === 1"
                        color="red accent-2"
                    >
                        mdi-emoticon
                    </v-icon>
                    <v-icon
                        v-else-if="dialogItems.status === 2"
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
                </div>
                <div class="mb-4">
                    コメント：
                    {{ dialogItems.comment }}
                </div>
                <v-card-actions class="pa-0">
                    <v-btn
                        color="primary"
                        text
                        @click="$emit('edit', dialogItems.id)"
                        class="pa-0"
                    >
                        編集する
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="primary"
                        text
                        @click="$emit('close')"
                        class="pa-0"
                    >
                        閉じる
                    </v-btn>
                </v-card-actions>
            </v-container>
        </v-card>
</template>

<script>
export default {
    props: {
        dialogItems: Object,
    },
}
</script>

<style>

</style>