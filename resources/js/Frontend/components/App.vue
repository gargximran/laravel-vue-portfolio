<template>
    <PerfectScrollbar ref="scroll">
        <v-app id="inspire">
            <v-app-bar app color="white" dark v-if="$route.name != 'home'">
                <v-avatar class="mr-3">
                    <img src="gXi/gxi.png" alt="GXI" />
                </v-avatar>
                <v-toolbar-title
                    ><span class="font-weight-bold grey--text text--darken-4"
                        >GargX Imran</span
                    ></v-toolbar-title
                >

                <v-spacer></v-spacer>
                <v-btn
                    v-for="(navBtn, navIndex) in navigationBtn"
                    :key="navIndex"
                    text
                    router
                    active-class=""
                    :to="navBtn.route"
                    class="mr-2 d-none d-md-flex as font-weight-bold grey--text text--darken-3"
                    >{{ navBtn.name }}</v-btn
                >

                <v-app-bar-nav-icon
                    class=" d-md-none d-lg-none d-xl-none grey--text text--darken-3"
                    @click="drawer = true"
                ></v-app-bar-nav-icon>
            </v-app-bar>

            <v-navigation-drawer
                v-model="drawer"
                fixed
                temporary
                v-if="$route.name != 'home'"
            >
                <v-row no-gutters>
                    <v-col cols="12">
                        <v-img src="asset/images/logo.JPG"></v-img>
                    </v-col>
                </v-row>
                <v-list nav dense>
                    <v-list-item-group active-class="grey white--text">
                        <v-list-item
                            class="font-weight-bold grey--text text--darken-3"
                            v-for="(navSide, navsideIndex) in navigationBtn"
                            :key="navsideIndex"
                            :to="navSide.route"
                            router
                        >
                            <v-list-item-icon>
                                <v-icon>{{ navSide.icon }}</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>{{
                                navSide.name
                            }}</v-list-item-title>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-navigation-drawer>

            <v-main>
                <transition name="page" mode="out-in">
                    <router-view></router-view>
                </transition>
            </v-main>
        </v-app>
    </PerfectScrollbar>
</template>

<script>
export default {
    name: "App",

    data: () => ({
        drawer: false,
        navigationBtn: [
            {
                name: "Home",
                route: "/",
                icon: "mdi-home"
            },
            {
                name: "Services",
                route: "/services",
                icon: "mdi-cogs"
            },
            {
                name: "Skills",
                route: "/skills",
                icon: "mdi-sword-cross"
            },
            {
                name: "Portfolio",
                route: "/portfolio",
                icon: "mdi-check-box-multiple-outline"
            },
            {
                name: "Contact",
                route: "/contact",
                icon: "mdi-text-to-speech"
            }
        ]
    }),
    mounted() {
        this.drawer = false;
    },
    watch: {
        $route() {
            this.$refs.scroll.$el.scrollTop = 0;
            this.reEnitialize();
        }
    },
    methods: {
        reEnitialize() {
            this.drawer = false;
        }
    }
};
</script>

<style>
.page-enter-active,
.page-leave-active {
    transition: opacity 0.3s;
}
.page-enter,
.page-leave-to {
    opacity: 0;
}
.ps {
    height: 100vh;
}
</style>
