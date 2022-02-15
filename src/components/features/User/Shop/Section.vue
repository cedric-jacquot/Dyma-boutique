<template>
    <!-- SectionItem-->
    <section class="py-4">
        <div class="container px-4 px-lg-5">
            <div
                class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center"
            >
                <!-- PRODUCTS -->
                <ProductsItem
                    v-for="product in products"
                    :key="product.id"
                    :product="product"
                />
            </div>
        </div>
    </section>
</template>

<script>
import ProductsItem from "./Products.vue";
import { eventBus } from "../../../../main.js";

export default {
    name: "SectionItem",
    components: {
        ProductsItem,
    },
    data() {
        return {
            products: [],
        };
    },
    created() {
        this.products = eventBus.products;
    },
};
</script>
