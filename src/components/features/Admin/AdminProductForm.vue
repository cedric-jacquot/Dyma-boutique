<template>
    <form @submit.prevent="trySubmit" class="d-flex flex-column w-25">
        <h4>Ajouter un produit :</h4>
        <div class="form-group my-2">
            <label>Image</label>
            <input v-model="form.picture" type="text" class="form-control" />
        </div>
        <div class="form-group my-2">
            <label>Titre</label>
            <input v-model="form.title" type="text" class="form-control" />
        </div>
        <div class="form-group my-2">
            <label>Description</label>
            <textarea
                v-model="form.description"
                class="form-control"
            ></textarea>
        </div>
        <div class="form-group my-2">
            <label>Prix</label>
            <input
                v-model.number="form.price"
                type="number"
                class="form-control"
            />
        </div>
        <ul v-if="errors.length" class="text-danger">
            <li v-for="error in errors" :key="error">
                {{ error }}
            </li>
        </ul>
        <button class="btn btn-primary mt-4">Ajouter</button>
        <pre>
            {{ form }}
            {{ errors }}
        </pre>
    </form>
</template>

<script>
import { eventBus } from "../../../main";
export default {
    name: "AdminProductForm",
    data() {
        return {
            form: {
                picture: "",
                title: "",
                description: "",
                price: "",
            },
            errors: [],
            product: {},
        };
    },
    methods: {
        trySubmit() {
            if (this.isValid()) {
                (this.product = {
                    nom: this.form.title,
                    prix: this.form.price,
                    src: this.form.picture,
                }),
                eventBus.createProduct(this.product);
                //console.log(this.form);
            }
        },
        isValid() {
            this.errors = [];
            if (!this.form.picture) {
                this.errors.push("picture error");
            }
            if (!this.form.title) {
                this.errors.push("title error");
            }
            if (!this.form.description) {
                this.errors.push("description error");
            }
            if (!this.form.price) {
                this.errors.push("price error");
            }
            return this.errors.length > 0 ? false : true;
        },
    },
};
</script>
