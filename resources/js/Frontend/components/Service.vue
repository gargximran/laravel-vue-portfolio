<template>
    <v-container fluid dark class="grey lighten-5">
        <h2 class="pink--text text-center mt-3">Services</h2>
        <v-row>
            <v-col cols="12">
                <v-btn
                    color="float-right blue--text text-capitalize"
                    to="/skills"
                    router
                    ><span
                        class="text-caption quicksand info--text font-weight-bold"
                        >Go to Skills
                    </span>
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
                :dense="true"
            >
                <v-card class="elevation-2">
                    <v-card-title
                        class="text-h6 text-md-h4 font-weight-bold wordBreak"
                    >
                        <span class="play"> {{ item.title }}</span>
                    </v-card-title>
                    <v-card-text>
                        <span class="quicksand font-italic font-weight-bold">
                            {{ item.desc }}
                        </span>
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
                title: "Application Developement",
                desc:
                    "Creating awesome server side application with Laravel / PHP(oop) / Express.js / NodeJs. Like E-Commerce, Accounting Application, Management(eg. School Management System, Hotel Management System, Hospital Application, Library Management Application, Enventory  Management) etc. All application is fully secure and modern functional as you need."
            },
            {
                icon: "mdi-monitor-dashboard",

                title: "Frontend Developement",
                desc:
                    "Making awesome frontend design as you need. With modern technology of [Vuejs, Bootstrap, Materialize, Vuetify, Vanilla JS]."
            },
            {
                icon: "mdi-book-open-page-variant",

                title: "Singe Page Application",
                desc:
                    "Creating supper fast single page application with Laravel Api and Vue JS with ajax. Now a day Singe Page Application is very much famous for its speed optamization. It run without taking page loading. I will create SPA with laravel Api and VueJs. "
            },
            {
                icon: "mdi-cogs",
                title: "Fixing Problem",
                desc:
                    "I also provide website related support. If your website build with laravel and vuejs and you run into any problem with your website, Then I can fix your website problem. I also help with vanilla js."
            }
        ]
    })
};
</script>
<style scoped>
.wordBreak {
    word-break: normal;
}
</style>
