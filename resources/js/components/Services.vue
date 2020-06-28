<template>
    <div class="card bg-dark">
        <div class="card-body">
            <h5 class="card-title text-center">Service Section Content</h5>
            <hr />

            <table class="table table-bordered table-dark">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th scope="col">Icon Name @pe-7-stroke</th>
                        <th scope="col">Edit</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(service, index) in services" :key="index">
                        <th scope="row">{{ service.id }}</th>
                        <td>{{ service.title }}</td>
                        <td>{{ service.description }}</td>
                        <td>{{ service.icon }}</td>
                        <td>
                            <button
                                @click="openEditModal(service)"
                                class="btn btn-warning btn-sm"
                                data-toggle="modal"
                                data-target="#serviceEditModal"
                            >
                                Edit
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- Modal -->

        <div
            class="modal fade"
            id="serviceEditModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
        >
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content bg-secondary">
                    <div class="modal-header">
                        <h5 class="modal-title">
                            Edit Service
                        </h5>
                        <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label>Title</label>
                            <input
                                type="text"
                                class="form-control bg-dark"
                                v-model="edit.title"
                            />
                        </div>

                        <div class="form-group">
                            <label>Icon</label>
                            <input
                                type="text"
                                class="form-control bg-dark"
                                v-model="edit.icon"
                            />
                        </div>

                        <div class="form-group">
                            <label
                                >Description
                                <sup class="text-danger"
                                    >(max 15 words)</sup
                                ></label
                            >
                            <textarea
                                class="form-control bg-dark"
                                v-model="edit.description"
                            ></textarea>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button
                            type="button"
                            class="btn btn-secondary"
                            data-dismiss="modal"
                            id="closeEditServiceModal"
                        >
                            Close
                        </button>
                        <button
                            type="button"
                            class="btn btn-primary"
                            @click="save"
                        >
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Services",
    data: () => ({
        edit: {
            id: null,
            title: null,
            description: null,
            icon: null
        }
    }),
    created() {
        this.$store.dispatch("GET_ALL_SERVICE_SECTION_CONTENT_FROM_SERVER");
    },
    computed: {
        services() {
            return this.$store.getters.GET_SERVICE_CONTENT;
        }
    },
    watch: {},
    methods: {
        openEditModal(service) {
            this.edit.id = service.id;
            this.edit.title = service.title;
            this.edit.description = service.description;
            this.edit.icon = service.icon;
        },
        save() {
            document.getElementById("closeEditServiceModal").click();
            axios
                .post("/api/admin/service/" + this.edit.id, {
                    title: this.edit.title,
                    desc: this.edit.description,
                    icon: this.edit.icon
                })
                .then(res => {})
                .catch(err => {})
                .then(() => {
                    this.$store.dispatch(
                        "GET_ALL_SERVICE_SECTION_CONTENT_FROM_SERVER"
                    );
                });
        }
    }
};
</script>
