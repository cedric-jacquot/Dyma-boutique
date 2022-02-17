<template>
    <!-- SectionItem-->
    <section class="py-4">
        <div class="container px-4 px-lg-5">
            <div
                class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center"
            >
                <!-- PRODUCTS -->
                <Products
                    v-for="product in products"
                    :key="product.id"
                    :product="product"
                />
            </div>
        </div>
    </section>
</template>

<script>
import Products from "./Products";
import { eventBus } from "../../../../main";

export default {
    name: "SectionItem",
    components: {
        Products,
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
