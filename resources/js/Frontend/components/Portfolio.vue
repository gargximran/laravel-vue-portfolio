<template>
    <v-container fluid class="grey lighten-5">
        <h2
            class="pink--text text-center mt-3 text-subtitle-2 quicksand font-italic text-decoration-underline"
        >
            What they are saying about me?
        </h2>

        <v-row>
            <v-col cols="12">
                <InfiniteSlideBar duration="30s">
                    <div class="d-flex">
                        <v-img
                            dark
                            max-width="700"
                            lazy-src=""
                            src="asset/images/review/1.JPG"
                        ></v-img>

                        <v-img dark src="asset/images/review/2.JPG"></v-img>
                    </div>
                </InfiniteSlideBar>
            </v-col>
        </v-row>
        <v-divider></v-divider>
        <h2 class="pink--text text-center mt-3">My Works</h2>

        <v-row>
            <v-col cols="12" align="center">
                <v-btn
                    class="ma-1 quicksand font-weight-bold"
                    small
                    v-on:click="setFilter('ALL')"
                >
                    ALL
                </v-btn>
                <v-btn
                    small
                    v-for="(category, categoryIndex) in projectsCategory"
                    :key="categoryIndex"
                    @click="setFilter(category)"
                    class="ma-1 quicksand font-weight-bold"
                >
                    {{ category }}
                </v-btn>
            </v-col>
        </v-row>

        <transition-group class="projects" name="projects">
            <v-col
                cols="6"
                sm="6"
                lg="3"
                md="4"
                class="project"
                v-for="project in projects"
                v-if="
                    currentFilter === project.category ||
                        currentFilter === 'ALL'
                "
                :key="project.title"
            >
                <v-card href="">
                    <v-img
                        class="white--text align-end"
                        lazy-src="asset/images/mock/loading.gif"
                        :src="project.image"
                    >
                        <v-card-title>{{ project.title }}</v-card-title>
                    </v-img>

                    <v-card-subtitle class="pb-0">{{
                        project.category
                    }}</v-card-subtitle>
                </v-card>
            </v-col>
        </transition-group>

        <v-divider></v-divider>
    </v-container>
</template>
<script>
import InfiniteSlideBar from "vue-infinite-slide-bar";
export default {
    name: "Portfolio",
    components: {
        InfiniteSlideBar
    },
    data: () => ({
        currentFilter: "ALL",
        projects: [
            {
                title: "E-Business",
                image: "asset/images/mock/1.jpg",
                category: "Laravel"
            },
            {
                title: "Homecure",
                image: "asset/images/mock/2.png",
                category: "Vue Js"
            },

            {
                title: "mdProt",
                image: "asset/images/mock/3.jpg",
                category: "Vue Js"
            },
            {
                title: "Ui King",
                image: "asset/images/mock/4.jpg",
                category: "Vue Js"
            },
            {
                title: "PHPtravels",
                image: "asset/images/mock/5.jpg",
                category: "Laravel"
            }
        ]
    }),
    computed: {
        projectsCategory() {
            let arr = [];
            let i = 0;
            for (i = 0; i < this.projects.length; i++) {
                if (arr.indexOf(this.projects[i].category) == -1) {
                    arr.push(this.projects[i].category);
                }
            }

            return arr;
        }
    },
    methods: {
        setFilter: function(filter) {
            this.currentFilter = filter;
        }
    }
};
</script>
<style scoped>
.projects {
    margin-top: 25px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.projects-enter {
    transform: scale(0.5) translatey(-80px);
    opacity: 0;
}

.projects-leave-to {
    transform: translatey(30px);
    opacity: 0;
}

.projects-leave-active {
    position: absolute;
    z-index: -1;
}

.project {
    transition: all 0.35s ease-in-out;
    border-radius: 3px;
}
</style>
