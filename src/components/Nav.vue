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
                                >{{ cart.length }}</span
                            >
                        </b-button>

                        <b-modal
                            id="modal-center"
                            centered
                            title="BootstrapVue"
                        >
                            <pre class="my-4">{{ cart }}</pre>
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
        }
    },
    created() {
        this.cart = eventBus.cart;
        eventBus.$on('update:cart', (cart) => {
            this.cart = cart;
        });
    },
};
</script>
