<template>
    <v-container class="pb-5 fill-height customBackground" fluid>
        <v-container class="pb-5 fill-height" dark>
            <v-row>
                <v-col cols="12">
                    <h2 class="pink--text text-center mb-5">Contact Me</h2>
                </v-col>
            </v-row>

            <v-row align="center">
                <v-col cols="12" md="6">
                    <h2 class="text-h4 font-weight-bold mb-2">
                        More About me
                        <v-icon class="blue--text">mdi-check-decagram</v-icon>
                    </h2>
                    <p class="text-body-2 my-4">
                        I am self motivated web developer. I am very passionate
                        about web technology. Always want to make remark of my
                        own work. Always learning with this deep sea of tech.
                    </p>

                    <div class="my-3">
                        <div
                            class="text-body-2 d-inline-block vertical-align-top"
                        >
                            <v-icon>mdi-map-marker-outline</v-icon>
                        </div>
                        <div
                            class=" text-body-2 d-inline-block vertical-align-top"
                        >
                            <span
                                >Savar <br />
                                Dhaka, 1341, <br />
                                Bangladesh</span
                            >
                        </div>
                    </div>

                    <div class="my-3">
                        <div
                            class="text-body-2 d-inline-block vertical-align-top"
                        >
                            <v-icon>mdi-email-mark-as-unread</v-icon>
                        </div>
                        <div
                            class=" text-body-2 d-inline-block vertical-align-top"
                        >
                            <span>gargximran@gmail.com</span>
                        </div>
                    </div>

                    <div class="my-3">
                        <div
                            class="text-body-2 d-inline-block vertical-align-top"
                        >
                            <v-icon>mdi-skype-business</v-icon>
                        </div>
                        <div
                            class=" text-body-2 d-inline-block vertical-align-top"
                        >
                            <span>live:gargximran_1</span>
                        </div>
                    </div>
                    <v-row no-gutters>
                        <v-col cols="12" md="4">
                            <div class="my-3 p-4">
                                <h2 class="subtitle-2 pink--text">
                                    Social Connect...
                                </h2>
                                <v-btn
                                    dark
                                    small
                                    color="primary"
                                    target="_blank"
                                    href="https://facebook.com/gargximran"
                                    fab
                                >
                                    <v-icon dark>mdi-facebook</v-icon>
                                </v-btn>

                                <v-btn
                                    dark
                                    color="primary"
                                    target="_blank"
                                    href="https://www.linkedin.com/in/imran-hossain-b24184131/"
                                    fab
                                    small
                                >
                                    <v-icon class="blue darken-2 white--text"
                                        >mdi-linkedin</v-icon
                                    >
                                </v-btn>

                                <v-btn
                                    dark
                                    target="_blank"
                                    href="https://www.github.com/gargximran"
                                    fab
                                    small
                                >
                                    <v-icon>mdi-git</v-icon>
                                </v-btn>
                            </div>
                        </v-col>

                        <v-col cols="12" md="8">
                            <div class="my-3 p-4">
                                <h2 class="subtitle-2 pink--text">
                                    Hire me...
                                </h2>
                                <v-btn
                                    outlined
                                    light
                                    text
                                    target="_blank"
                                    href="https://www.fiverr.com/gargximran_1"
                                >
                                    fiverr
                                </v-btn>

                                <v-btn
                                    outlined
                                    class="green--text"
                                    target="_blank"
                                    href="https://www.upwork.com/o/profiles/users/~01b6d3fae516401e8b/"
                                    text
                                >
                                    upwork
                                </v-btn>

                                <v-btn
                                    outlined
                                    target="_blank"
                                    class="orange--text"
                                    href="https://www.freelancer.com/u/gargximran"
                                >
                                    Freelancer
                                </v-btn>
                            </div>
                        </v-col>
                    </v-row>
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
                            color="pink"
                            required
                            :rules="nameRules"
                            prepend-icon="mdi-account-outline"
                            v-model="contact.name"
                        ></v-text-field>

                        <v-text-field
                            dense
                            label="Email"
                            color="pink"
                            outlined
                            required
                            :rules="emailRules"
                            prepend-icon="mdi-email-outline"
                            v-model="contact.email"
                        ></v-text-field>

                        <v-textarea
                            outlined
                            :rules="textRules"
                            label="Say something..."
                            prepend-icon="mdi-card-text-outline"
                            v-model="contact.message"
                            color="pink"
                        ></v-textarea>
                        <v-row no-gutters>
                            <v-col cols="12" class="pl-5 ml-3">
                                <v-btn
                                    dark
                                    :loading="loading"
                                    color="pink"
                                    @click.prevent="sendmail"
                                    >Send
                                    <v-icon dark class="ml-1"
                                        >mdi-email-send-outline</v-icon
                                    ></v-btn
                                >
                            </v-col>
                        </v-row>
                    </v-form>
                </v-col>
            </v-row>
        </v-container>
    </v-container>
</template>

<script>
export default {
    name: "Contact",

    data: () => ({
        contact: {
            name: null,
            email: null,
            message: null
        },
        loading: false,
        nameRules: [v => !!v || "Name is required"],
        emailRules: [
            v => !!v || "E-mail is required",
            v =>
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                    v
                ) || "E-mail must be valid"
        ],
        textRules: [v => !!v || "Leave a message for me."]
    }),
    methods: {
        sendmail() {
            if (this.$refs.contact.validate()) {
                this.loading = true;
                setTimeout(() => {
                    this.loading = false;
                    this.contact.name = null;
                    this.contact.email = null;
                    this.contact.message = null;
                    Toast.fire({
                        icon: "success",
                        title: "Message Sent Successfully!",
                        customClass: {
                            title: "text-subtitle-2"
                        }
                    });

                    this.$refs.contact.reset();
                }, 3000);
            }
        }
    }
};
</script>

<style scoped>
.vertical-align-top {
    vertical-align: text-top;
}

.customBackground {
    background-image: url("/asset/images/wave.svg");

    background-size: contain;
    background-position: bottom;
    background-attachment: fixed;
}
</style>
