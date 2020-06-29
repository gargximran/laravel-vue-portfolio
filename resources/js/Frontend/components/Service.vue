<template>
    <v-container fluid dark>
        <h2 class="pink--text text-center mt-3">Services</h2>
        <v-row>
            <v-col cols="12">
                <v-btn
                    color="float-right blue--text text-capitalize"
                    to="/skills"
                    router
                    ><span>Go to Skills </span>
                    <v-icon>mdi-directions</v-icon></v-btn
                >
            </v-col>
        </v-row>

        <v-divider></v-divider>
        <v-timeline>
            <v-timeline-item
                v-for="(item, xx) in treeview"
                :key="xx"
                :icon="item.icon"
                fill-dot
                :icon-color="item.iconColor ? item.iconColor : ''"
            >
                <span slot="opposite">{{ item.opposite }}</span>
                <v-card class="elevation-2">
                    <v-card-title class="text-subtitle-2 text-md-h4">{{
                        item.title
                    }}</v-card-title>
                    <v-card-text>
                        {{ item.desc }}
                    </v-card-text>
                </v-card>
            </v-timeline-item>
        </v-timeline>
        <v-divider></v-divider>
    </v-container>
</template>
<script>
export default {
    name: "Service",
    data: () => ({
        treeview: [
            {
                icon: "mdi-laravel",
                iconColor: "#ff2d20",
                opposite: "Backend Dev",
                title: "Laravel Developement",
                desc:
                    "Creating awesome backend of any web with Laravel / PHP(oop) / Express.js / NodeJs"
            },
            {
                icon: "mdi-monitor-dashboard",
                iconColor: "",
                opposite: "Frontend Dev",
                title: "VueJs Developement",
                desc:
                    "Making awesome frontend design as you need. The technology I am very comportable to use is [Vuejs, Bootstrap, Materialize, Vuetify, Vanilla JS]"
            },
            {
                icon: "mdi-book-open-page-variant",
                iconColor: "red",
                opposite: "SPA",
                title: "Singe Page Application",
                desc:
                    "Creating supper fast single page application with laravel and vuejs. Now a day Spa is very much famous for its speed optamization. It run without taking page loading. I will create SPA with laravel Api and VueJs "
            },
            {
                icon: "mdi-cogs",
                iconColor: "yellow",
                opposite: "Support",
                title: "Fixing Problem",
                desc:
                    "I also provide website related support. If your website build with laravel and vuejs and you run into any problem with your website, Then I can fix your website problem. I also help with vanilla js."
            }
        ]
    })
};
</script>
<style scoped></style>
