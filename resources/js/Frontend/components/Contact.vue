<template>
    <v-container class="pb-5" dark>
        <h2 class="pink--text text-center mb-5">Contact Me</h2>

        <v-row>
            <v-col cols="12" md="6">
                <h2 class="text-h4 font-weight-bold mb-2">
                    More About me
                    <v-icon class="blue--text">mdi-check-decagram</v-icon>
                </h2>
                <p class="text-body-2 my-4">
                    I am self motivated web developer. I am very passionate
                    about web technology. Always want to make remark of my own
                    work. Always learning with this deep sea of tech.
                </p>

                <div class="my-3">
                    <div class="text-body-2 d-inline-block vertical-align-top">
                        <v-icon>mdi-map-marker-outline</v-icon>
                    </div>
                    <div class=" text-body-2 d-inline-block vertical-align-top">
                        <span
                            >Savar <br />
                            Dhaka, 1341, <br />
                            Bangladesh</span
                        >
                    </div>
                </div>

                <div class="my-3">
                    <div class="text-body-2 d-inline-block vertical-align-top">
                        <v-icon>mdi-email-mark-as-unread</v-icon>
                    </div>
                    <div class=" text-body-2 d-inline-block vertical-align-top">
                        <span>gargximran@gmail.com</span>
                    </div>
                </div>

                <div class="my-3">
                    <div class="text-body-2 d-inline-block vertical-align-top">
                        <v-icon>mdi-skype-business</v-icon>
                    </div>
                    <div class=" text-body-2 d-inline-block vertical-align-top">
                        <span>live:gargximran_1 (Skype)</span>
                    </div>
                </div>
            </v-col>

            <v-divider vertical inset></v-divider>
            <v-col cols="12" md="5">
                <h2 class="text-h4 font-weight-bold mb-5">
                    Drop a line for me! <v-icon>mdi-lead-pencil</v-icon>
                </h2>
                <v-form ref="contact">
                    <v-text-field
                        dense
                        label="Name"
                        outlined
                        required
                    ></v-text-field>

                    <v-text-field
                        dense
                        label="Email"
                        outlined
                        required
                    ></v-text-field>

                    <v-textarea outlined label="Say something..."></v-textarea>
                    <v-btn dark color="pink"
                        >Send <v-icon dark>mdi-heart</v-icon></v-btn
                    >
                </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "Contact",

    data: () => ({})
};
</script>

<style scoped>
.vertical-align-top {
    vertical-align: text-top;
}
</style>
