<template>
    <div class="card bg-dark">
        <div class="card-body">
            <h5 class="card-title">Home Content</h5>
            <hr />

            <table class="table table-bordered table-dark">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Sub title</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(home, index) in getAllHome" :key="index">
                        <th scope="row">{{ home.id }}</th>
                        <td v-if="!showInput">{{ home.NameHeading }}</td>
                        <td v-else>
                            <input
                                type="text"
                                v-model="edit.NameHeading"
                                class="form-control bg-secondary"
                            />
                        </td>
                        <td v-if="!showInput">{{ home.TitleHeading }}</td>
                        <td v-else>
                            <input
                                type="text"
                                v-model="edit.TitleHeading"
                                class="form-control bg-secondary"
                            />
                        </td>

                        <td>
                            <button
                                v-if="!showInput"
                                @click="showInput = true"
                                class="btn btn-sm btn-warning"
                            >
                                Edit
                            </button>
                            <button
                                @click="save"
                                v-else
                                class="btn btn-sm btn-info"
                            >
                                Save
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    name: "Home",
    data: () => ({
        showInput: false,
        edit: {
            id: null,
            NameHeading: null,
            TitleHeading: null
        }
    }),
    created() {
        this.$store.dispatch("GET_ALL_HOME_CONTENT_FROM_SERVER");
    },
    computed: {
        getAllHome() {
            return this.$store.getters.GET_HOME_CONTENT;
        }
    },
    watch: {
        getAllHome(v) {
            this.edit.NameHeading = v[0].NameHeading;
            this.edit.id = v[0].id;
            this.edit.TitleHeading = v[0].TitleHeading;
        }
    },
    methods: {
        save() {
            axios
                .post("/api/admin/home/" + this.edit.id, {
                    NameHeading: this.edit.NameHeading,
                    TitleHeading: this.edit.TitleHeading
                })
                .then(res => {})
                .catch(err => {})
                .then(v => {
                    this.$store.dispatch("GET_ALL_HOME_CONTENT_FROM_SERVER");
                    this.showInput = false;
                });
        }
    }
};
</script>
