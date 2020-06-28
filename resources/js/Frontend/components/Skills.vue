<template>
    <v-container fluid dark>
        <h2 class="pink--text text-center mt-3">Skills</h2>

        <v-row>
            <v-col cols="12">
                <v-btn
                    color="float-left blue--text text-capitalize"
                    @click="$router.go(-1)"
                >
                    <v-icon class="mdi-flip-h">mdi-directions</v-icon
                    ><span>Back to service </span></v-btn
                >
            </v-col>
        </v-row>

        <v-row align="center" justify="center">
            <v-col
                cols="12"
                xs="4"
                sm="4"
                md="3"
                v-for="(skill, key) in skills"
                :key="key"
                class="mt-5"
            >
                <div class="text-center">
                    <v-progress-circular
                        size="150"
                        class="mb-1"
                        :value="skill.value"
                        width="6"
                        :color="skill.color"
                        >{{ skill.value }}%</v-progress-circular
                    >
                    <v-divider></v-divider>
                    <h2 class="text-h6">{{ skill.name }}</h2>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    name: "Skill",
    data: () => ({
        skills: [
            {
                value: 90,
                color: "#e44d26",
                name: "HTML"
            },
            {
                value: 85,
                color: "blue",
                name: "CSS"
            },
            {
                value: 80,
                color: "#edd420",
                name: "JavaScript"
            },
            {
                value: 75,
                color: "#8896d1",
                name: "PHP"
            },
            {
                value: 95,
                color: "#543b79",
                name: "Bootstrap"
            },
            {
                value: 70,
                color: "#e46c73",
                name: "Materialize CSS"
            },
            {
                value: 75,
                color: "#0865a6",
                name: "jQuery"
            },
            {
                value: 80,
                color: "#41b833",
                name: "VueJs"
            },
            {
                value: 80,
                color: "#e8372a",
                name: "Laravel"
            },
            {
                value: 70,
                color: "#78c1f8",
                name: "Vuetify"
            },
            {
                value: 50,
                color: "#70a660",
                name: "NodeJs"
            },
            {
                value: 80,
                color: "#cb3837",
                name: "npm"
            },
            {
                value: 76,
                color: "#000",
                name: "GIT"
            },
            {
                value: 85,
                color: "#f29111",
                name: "MySql"
            },
            {
                value: 60,
                color: "green",
                name: "MongoDB"
            }
        ]
    })
};
</script>
<style scoped></style>
