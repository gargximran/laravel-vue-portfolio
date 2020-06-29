<template>
    <v-app id="inspire">
        <v-app-bar app color="teal" dark v-if="$route.name != 'home'">
            <v-avatar class="mr-3">
                <img src="asset/images/logo.JPG" alt="GXI" />
            </v-avatar>
            <v-toolbar-title>GargX Imran</v-toolbar-title>

            <v-spacer></v-spacer>
            <v-btn
                v-for="(navBtn, navIndex) in navigationBtn"
                :key="navIndex"
                text
                router
                active-class="pink"
                :to="navBtn.route"
                class="mr-2 d-none d-md-flex"
                >{{ navBtn.name }}</v-btn
            >

            <v-app-bar-nav-icon
                class=" d-md-none d-lg-none d-xl-none"
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
                <v-list-item-group
                    active-class="deep-purple--text text--accent-4"
                >
                    <v-list-item
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

            <div v-if="$route.name != 'home'">
                <!-- Load Facebook SDK for JavaScript -->
                <div id="fb-root"></div>

                <!-- Your Chat Plugin code -->
                <div
                    class="fb-customerchat"
                    attribution="setup_tool"
                    page_id="101533644958334"
                    theme_color="#ff5ca1"
                    logged_in_greeting="Hey! How can I help you?"
                    logged_out_greeting="Hey! How can I help you?"
                ></div>
            </div>
        </v-main>

        <v-footer app color="teal" dark v-if="$route.name != 'home'">
            <div class="subtitle-2">@2020</div>
        </v-footer>
    </v-app>
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
        $route: "reEnitialize"
    },
    methods: {
        reEnitialize() {
            this.drawer = false;
        }
    }
};
</script>

<style scoped>
.page-enter-active,
.page-leave-active {
    transition: opacity 0.3s, transform 0.4s;
}
.page-enter,
.page-leave-to {
    opacity: 0;
    transform: scale(0);
}
</style>
