<template>
    <v-container fluid dark class="fill-height customBackground">
        <v-row align="center">
            <v-col cols="12">
                <h1 class="heading text-center text-xs-h2">IMRAN</h1>
                <p class="text-md-h2 text-xs-h5 white--text text-center">
                    Backend & Frontend Dev Maybe!
                </p>
            </v-col>
        </v-row>

        <v-card-text style="position: relative">
            <v-btn
                class="button"
                to="/services"
                absolute
                dark
                fab
                bottom
                color="pink"
            >
                <v-icon>mdi-arrow-down</v-icon>
            </v-btn>
        </v-card-text>
    </v-container>
</template>
<script>
export default {
    name: "Homepage"
};
</script>
<style scoped>
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
