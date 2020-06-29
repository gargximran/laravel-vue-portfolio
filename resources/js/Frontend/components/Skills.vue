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

                    <p class="text-body-2 p-2">{{ skill.desc }}</p>

                    <h2 class="text-h6">{{ skill.name }}</h2>

                    <v-divider></v-divider>
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
                name: "HTML",
                desc:
                    "lorem ipsum dolor emmit and , thi si samply telorem ipsum dolor emmit and , thi si samply telorem ipsum dolor emmit and , thi si samply te"
            },
            {
                value: 85,
                color: "blue",
                name: "CSS",
                desc:
                    "lorem ipsum dolor emmit and , thi si samply telorem ipsum dolor emmit and , thi si samply telorem ipsum dolor emmit and , thi si samply te"
            },
            {
                value: 80,
                color: "#edd420",
                name: "JavaScript",
                desc:
                    "lorem ipsum dolor emmit and , thi si samply telorem ipsum dolor emmit and , thi si samply telorem ipsum dolor emmit and , thi si samply te"
            },
            {
                value: 75,
                color: "#8896d1",
                name: "PHP",
                desc:
                    "lorem ipsum dolor emmit and , thi si samply telorem ipsum dolor emmit and , thi si samply telorem ipsum dolor emmit and , thi si samply te"
            },
            {
                value: 95,
                color: "#543b79",
                name: "Bootstrap",
                desc:
                    "lorem ipsum dolor emmit and , thi si samply telorem ipsum dolor emmit and , thi si samply telorem ipsum dolor emmit and , thi si samply te"
            },
            {
                value: 70,
                color: "#e46c73",
                name: "Materialize CSS",
                desc:
                    "lorem ipsum dolor emmit and , thi si samply telorem ipsum dolor emmit and , thi si samply telorem ipsum dolor emmit and , thi si samply te"
            },
            {
                value: 75,
                color: "#0865a6",
                name: "jQuery",
                desc:
                    "lorem ipsum dolor emmit and , thi si samply telorem ipsum dolor emmit and , thi si samply telorem ipsum dolor emmit and , thi si samply te"
            },
            {
                value: 80,
                color: "#41b833",
                name: "VueJs",
                desc:
                    "lorem ipsum dolor emmit and , thi si samply telorem ipsum dolor emmit and , thi si samply telorem ipsum dolor emmit and , thi si samply te"
            },
            {
                value: 80,
                color: "#e8372a",
                name: "Laravel",
                desc:
                    "lorem ipsum dolor emmit and , thi si samply telorem ipsum dolor emmit and , thi si samply telorem ipsum dolor emmit and , thi si samply te"
            },
            {
                value: 70,
                color: "#78c1f8",
                name: "Vuetify",
                desc:
                    "lorem ipsum dolor emmit and , thi si samply telorem ipsum dolor emmit and , thi si samply telorem ipsum dolor emmit and , thi si samply te"
            },
            {
                value: 50,
                color: "#70a660",
                name: "NodeJs",
                desc:
                    "lorem ipsum dolor emmit and , thi si samply telorem ipsum dolor emmit and , thi si samply telorem ipsum dolor emmit and , thi si samply te"
            },
            {
                value: 80,
                color: "#cb3837",
                name: "npm",
                desc:
                    "lorem ipsum dolor emmit and , thi si samply telorem ipsum dolor emmit and , thi si samply telorem ipsum dolor emmit and , thi si samply te"
            },
            {
                value: 76,
                color: "#000",
                name: "GIT",
                desc:
                    "lorem ipsum dolor emmit and , thi si samply te lorem ipsum dolor emmit and , thi si samply telorem ipsum dolor emmit and , thi si samply te"
            },
            {
                value: 85,
                color: "#f29111",
                name: "MySql",
                desc:
                    "lorem ipsum dolor emmit and , thi si samply te lorem ipsum dolor emmit and , thi si samply telorem ipsum dolor emmit and , thi si samply te"
            },
            {
                value: 60,
                color: "green",
                name: "MongoDB",
                desc:
                    "lorem ipsum dolor emmit and , thi si samply telorem ipsum dolor emmit and , thi si samply telorem ipsum dolor emmit and , thi si samply te"
            }
        ]
    })
};
</script>
<style scoped></style>
