<template>
    <v-app>
        <v-app-bar
            color="red accent-2"
            dark
            app
        >
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="font-weight-bold">QuiSmo</v-toolbar-title>
        </v-app-bar>

        <v-navigation-drawer
            v-model="drawer"
            absolute
            temporary
        >
            <v-list
                nav
                dense
            >
                <v-list-item-group
                v-model="group"
                active-class="red--text text--accent-1"
                >
                    <v-list-item>
                        <v-list-item-title>ホーム</v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-title>禁煙日記</v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-title>欲しいものリスト</v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-title>プロフィール</v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-title>ログアウト</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>

        <v-main class="grey lighten-5">
            <router-view />
        </v-main>
    </v-app>
</template>

<script>
    export default {
        data: () => ({
            drawer: false,
            group: null,
        }),

        watch: {
            group () {
                this.drawer = false
            },
        },
    }
</script>

<style>

</style>