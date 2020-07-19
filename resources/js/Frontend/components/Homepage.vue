<template>
    <v-container fluid dark class="fill-height customBackground">
        <v-row align="center">
            <v-col cols="12">
                <h1 class="heading text-center text-xs-h2 play">IMRAN</h1>

                <vue-typed-js
                    :strings="[
                        'frontend developer',
                        'backend developer',
                        'freelancer',
                        'programmer',
                        'web developer',
                        'full stack developer'
                    ]"
                    :typeSpeed="50"
                    :backSpeed="40"
                    :backDelay="700"
                    :cursorChar="'_'"
                    :shuffle="true"
                    @onComplete="goToNext()"
                    @onTypingPaused="goToNext()"
                >
                    <p class="text-md-h2 text-xs-h5 white--text text-center">
                        <span class="play">I am a </span>
                        <span class="play pink--text typing"></span>
                    </p>
                </vue-typed-js>
            </v-col>
        </v-row>

        <v-card-text style="position: relative">
            <v-btn
                class="button"
                to="/services"
                absolute
                router
                dark
                fab
                top
                color="pink"
            >
                <v-icon>mdi-arrow-right</v-icon>
            </v-btn>
        </v-card-text>
    </v-container>
</template>
<script>
import Vue from "vue";
import VueTypedJs from "vue-typed-js";

Vue.use(VueTypedJs);

export default {
    name: "Homepage",
    methods: {
        goToNext() {
            setTimeout(() => {
                this.$router.push({ name: "service" });
            }, 2000);
        }
    }
};
</script>
<style scoped>
.typed-element {
    display: block;
}
.customBackground {
    background-image: url("/asset/images/bg.jpg");
    background-size: cover;
    background-position: center;
}
.heading {
    color: #fff;
    font-size: 9em;
    font-weight: normal;
    font-family: "Roboto", sans-serif;
}

@media only screen and (max-width: 450px) {
    .heading {
        font-size: 5em;
    }
}

.button {
    left: 50%;
    transform: translateX(-50%);
}
</style>
