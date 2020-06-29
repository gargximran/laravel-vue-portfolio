<template>
    <div>
        <h2 class="pink--text text-center mt-3 text-subtitle-2">
            What they are saying about me?
        </h2>

        <v-row>
            <v-col cols="12">
                <InfiniteSlideBar duration="30s">
                    <div class="d-flex">
                        <v-img
                            dark
                            max-width="700"
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
                <v-btn v-on:click="setFilter('ALL')">
                    <span>ALL</span>
                </v-btn>
                <v-btn
                    v-for="(category, categoryIndex) in projectsCategory"
                    :key="categoryIndex"
                    @click="setFilter(category)"
                    class="mr-1"
                >
                    <span>{{ category }}</span>
                </v-btn>
            </v-col>
        </v-row>
        <v-container fluid>
            <transition-group class="projects" name="projects">
                <v-col
                    cols="6"
                    sm="4"
                    lg="2"
                    md="2"
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
                            height="200px"
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
        </v-container>

        <v-divider></v-divider>
    </div>
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
                title: "Artwork",
                image: "https://picsum.photos/g/200?image=122",
                category: "ART"
            },
            {
                title: "Charcoal",
                image: "https://picsum.photos/g/200?image=116",
                category: "ART"
            },
            {
                title: "Sketching",
                image: "https://picsum.photos/g/200?image=121",
                category: "DOODLES"
            },
            {
                title: "Acrillic",
                image: "https://picsum.photos/g/200?image=133",
                category: "WORKSHOPS"
            },
            {
                title: "Pencil",
                image: "https://picsum.photos/g/200?image=134",
                category: "DOODLES"
            },
            {
                title: "Pen",
                image: "https://picsum.photos/g/200?image=115",
                category: "ART"
            },
            {
                title: "Inking",
                image: "https://picsum.photos/g/200",
                category: "WORKSHOPS"
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
