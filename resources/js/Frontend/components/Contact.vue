<template>
    <v-container class="pb-5 fill-height grey lighten-5" fluid>
        <v-container class="pb-5 fill-height" dark>
            <v-row>
                <v-col cols="12">
                    <h2 class="pink--text text-center mb-5">Contact Me</h2>
                </v-col>
            </v-row>

            <v-row align="center">
                <v-col cols="12" md="6">
                    <h2 class="text-h4 font-weight-bold mb-2">
                        <span class="play">More About me</span>
                        <v-icon class="pink--text">mdi-check-decagram</v-icon>
                    </h2>
                    <p class="text-body-2 my-4 ">
                        <span class="quicksand font-italic font-weight-bold">
                            I am self motivated web developer. I am very
                            passionate about web technology. Always want to make
                            remark of my own work. Always learning with this
                            deep sea of tech.
                        </span>
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
                            <span class="quicksand font-italic font-weight-bold"
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
                            <span class="quicksand font-italic font-weight-bold"
                                >gargximran@gmail.com</span
                            >
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
                            <span class="quicksand font-italic font-weight-bold"
                                >live:gargximran_1</span
                            >
                        </div>
                    </div>
                    <v-row no-gutters>
                        <v-col cols="12" md="4">
                            <div class="my-3 p-4">
                                <h2 class="text-subtitle-2 pink--text">
                                    <span class="play font-weight-bold"
                                        >Social Connect...</span
                                    >
                                </h2>
                                <v-btn
                                    dark
                                    small
                                    color="pink"
                                    target="_blank"
                                    href="https://facebook.com/gargximran"
                                    fab
                                >
                                    <v-icon dark>mdi-facebook</v-icon>
                                </v-btn>

                                <v-btn
                                    dark
                                    color="pink"
                                    target="_blank"
                                    href="https://www.linkedin.com/in/imran-hossain-b24184131/"
                                    fab
                                    small
                                >
                                    <v-icon class="pink">mdi-linkedin</v-icon>
                                </v-btn>

                                <v-btn
                                    color="pink"
                                    target="_blank"
                                    href="https://www.github.com/gargximran"
                                    fab
                                    small
                                >
                                    <v-icon class="white--text">mdi-git</v-icon>
                                </v-btn>
                            </div>
                        </v-col>

                        <v-col cols="12" md="8">
                            <div class="my-3 p-4">
                                <h2 class="subtitle-2 pink--text">
                                    <span class="play font-weight-bold"
                                        >Hire me...</span
                                    >
                                </h2>
                                <v-btn
                                    class="primary quicksand"
                                    text
                                    small
                                    target="_blank"
                                    href="https://www.fiverr.com/gargximran_1"
                                >
                                    fiverr
                                </v-btn>

                                <v-btn
                                    class="primary quicksand"
                                    small
                                    target="_blank"
                                    href="https://www.upwork.com/o/profiles/users/~01b6d3fae516401e8b/"
                                >
                                    upwork
                                </v-btn>

                                <v-btn
                                    class="primary quicksand"
                                    small
                                    target="_blank"
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
                        <span class="play">Direct Message!</span>
                        ..<v-icon class="black--text">mdi-lead-pencil</v-icon>
                    </h2>
                    <v-form ref="contact">
                        <v-text-field
                            dense
                            label="Name"
                            outlined
                            color="pink"
                            class="quicksand font-italic font-weight-bold"
                            required
                            :rules="nameRules"
                            prepend-icon="mdi-account-outline"
                            v-model="contact.name"
                        ></v-text-field>

                        <v-text-field
                            dense
                            label="Email Address"
                            color="pink"
                            class="quicksand font-italic font-weight-bold"
                            outlined
                            required
                            :rules="emailRules"
                            prepend-icon="mdi-email-outline"
                            v-model="contact.email"
                        ></v-text-field>

                        <v-textarea
                            class="quicksand font-italic"
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
                                    class="quicksand"
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
import Vue from "vue";
import VueFbCustomerChat from "vue-fb-customer-chat";
Vue.use(VueFbCustomerChat, {
    page_id: 101533644958334,
    theme_color: "#e91e63",
    locale: "en_US"
});
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
</style>
