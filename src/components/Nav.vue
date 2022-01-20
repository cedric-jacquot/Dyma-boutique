<template>
    <!-- Navigation-->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container px-4 px-lg-5">
            <a class="navbar-brand" href="#!">Boutique VueJs</a>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#!"
                            >Home</a
                        >
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#!">About</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a
                            class="nav-link dropdown-toggle"
                            id="navbarDropdown"
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            >Shop</a
                        >
                        <ul
                            class="dropdown-menu"
                            aria-labelledby="navbarDropdown"
                        >
                            <li>
                                <a class="dropdown-item" href="#!"
                                    >All Products</a
                                >
                            </li>
                            <li><hr class="dropdown-divider" /></li>
                            <li>
                                <a class="dropdown-item" href="#!"
                                    >Popular Items</a
                                >
                            </li>
                            <li>
                                <a class="dropdown-item" href="#!"
                                    >New Arrivals</a
                                >
                            </li>
                        </ul>
                    </li>
                </ul>
                <form class="d-flex">
                    <div>
                        <b-button  variant="btn btn-outline-dark mt-auto" v-b-modal.modal-center>
                            <i class="bi-cart-fill me-1"></i>
                            Cart
                            <span
                                class="badge bg-dark text-white ms-1 rounded-pill"
                                >{{ totalCart }}</span
                            >
                        </b-button>

                        <b-modal
                            id="modal-center"
                            centered
                            title="Cart"
                        >
                            <div v-if="totalCart > 0">
                                <div
                                    v-for = "product in cart"
                                    :key = "product.id"
                                    :product = "product"
                                >
                                    <div v-if="product.quantity > 0" class="d-flex d-flex justify-content-between align-items-center m-2 my-4">
                                        <div>
                                            <img class="cart-picture m-0" :src="product.src" alt="">
                                        </div>
                                        <div>
                                            <p class="m-0">{{ product.nom }} 
                                                <span class="text-secondary">{{ product.prix }}€</span>
                                            </p>
                                        </div>
                                        <div class="d-flex justify-content-between">
                                            <button type="button" class="btn btn-outline-secondary btn-sm" @click="quantityMinus(product)">-</button>
                                            <p class="m-0 mx-3">{{ product.quantity }}</p>
                                            <button type="button" class="btn btn-outline-secondary btn-sm" @click="quantityPlus(product)">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div v-else>
                                <p class="m-0">Your cart is empty</p>
                            </div>
                        </b-modal>
                    </div>
                </form>
            </div>
        </div>
    </nav>
</template>

<script>
import { eventBus } from "../main.js";

export default {
    name: 'NavItem',
    data() {
        return {
            cart: [],
            totalCart: 0,
        }
    },
    methods: {
        quantityMinus(product) {
            eventBus.quantityMinus(product);
        }
       ,
        quantityPlus(product) {
            eventBus.quantityPlus(product);
        },
    },
    created() {
        this.cart = eventBus.cart;
        this.totalCart = eventBus.totalCart;
        eventBus.$on('update:cart', (totalCart) => {
            this.totalCart = totalCart;
        });
    },
};
</script>

<style>
.cart-picture {
    margin: 1em;
    margin-right: 2em;
    max-width: 100px;
    max-height: 60px;
}
</style>
