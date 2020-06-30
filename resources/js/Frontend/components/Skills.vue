<template
    ><v-container class="fill-height customBackground" fluid dark>
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
                    class="m-5"
                >
                    <v-card>
                        <div class="text-center">
                            <v-progress-circular
                                size="150"
                                class="mt-3"
                                :value="skill.value"
                                width="6"
                                :color="skill.color"
                                >{{ skill.value }}%</v-progress-circular
                            >

                            <h2 class="text-h6">{{ skill.name }}</h2>
                            <p class="text-body-2 pa-2">{{ skill.desc }}</p>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
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
                    "HTML is the markup language that we use to structure and give meaning to our web content, for example defining paragraphs, headings, and data tables, or embedding images and videos in the page."
            },
            {
                value: 85,
                color: "blue",
                name: "CSS",
                desc:
                    "CSS is a language of style rules that we use to apply styling to our HTML content, for example setting background colors and fonts, and laying out our content in multiple columns."
            },
            {
                value: 80,
                color: "#edd420",
                name: "JavaScript",
                desc:
                    "JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else."
            },
            {
                value: 75,
                color: "#8896d1",
                name: "PHP",
                desc:
                    "PHP (recursive acronym for PHP: Hypertext Preprocessor) is a widely-used open source general-purpose scripting language that is especially suited for web development and can be embedded into HTML."
            },
            {
                value: 95,
                color: "#543b79",
                name: "Bootstrap",
                desc:
                    "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components."
            },
            {
                value: 70,
                color: "#e46c73",
                name: "Materialize CSS",
                desc:
                    "Materialize CSS is a UI component library which is created with CSS, JavaScript and HTML. It is created and designed by Google. Materialize CSS is also known as Material Design. ... Google's goal is to develop a system of design that allows for a unified user experience across all their products on any platform."
            },
            {
                value: 75,
                color: "#0865a6",
                name: "jQuery",
                desc:
                    "jQuery is a JavaScript library designed to simplify HTML DOM tree traversal and manipulation, as well as event handling, CSS animation, and Ajax. It is free, open-source software using the permissive MIT License. As of May 2019, jQuery is used by 73% of the 10 million most popular websites. "
            },
            {
                value: 80,
                color: "#41b833",
                name: "VueJs",
                desc:
                    "Vue.js is an open-source model–view–viewmodel JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members coming from various companies such as Netlify and Netguru."
            },
            {
                value: 80,
                color: "#e8372a",
                name: "Laravel",
                desc:
                    "Laravel is a free, open-source PHP web framework, created by Taylor Otwell and intended for the development of web applications following the model–view–controller (MVC) architectural pattern and based on Symfony."
            },
            {
                value: 70,
                color: "#78c1f8",
                name: "Vuetify",
                desc:
                    "Vuetify is a reusable semantic component framework for Vue. js that aims to provide clean, semantic and reusable components. It supports all the modern browsers."
            },
            {
                value: 50,
                color: "#70a660",
                name: "NodeJs",
                desc:
                    "Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside a web browser."
            },
            {
                value: 80,
                color: "#cb3837",
                name: "npm",
                desc:
                    "npm is a package manager for the JavaScript programming language. It is the default package manager for the JavaScript runtime environment Node.js. It consists of a command line client, also called npm, and an online database of public and paid-for private packages, called the npm registry."
            },
            {
                value: 76,
                color: "#000",
                name: "GIT",
                desc:
                    "Git is a distributed version-control system for tracking changes in source code during software development. It is designed for coordinating work among programmers, but it can be used to track changes in any set of files. Its goals include speed, data integrity, and support for distributed, non-linear workflows."
            },
            {
                value: 85,
                color: "#f29111",
                name: "MySQL",
                desc:
                    "MySQL is an open-source relational database management system. Its name is a combination of 'My', the name of co-founder Michael Widenius's daughter, and 'SQL', the abbreviation for Structured Query Language."
            },
            {
                value: 60,
                color: "green",
                name: "MongoDB",
                desc:
                    "MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License."
            }
        ]
    })
};
</script>
<style scoped>
.customBackground {
    background-image: url("/asset/images/wave.svg");

    background-size: contain;
    background-position: bottom;
    background-attachment: fixed;
}
</style>
