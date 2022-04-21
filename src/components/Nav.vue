<template>
    <!-- Navigation-->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container px-4 px-lg-5">
            <a class="navbar-brand" href="#!">Boutique VueJs</a>
            <button
                class="navbar-toggler"
                v-trigger-collapse="'navbar-collapse'"
                type="button"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbar-collapse">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                    <li class="nav-item">
                        <a
                            class="nav-link"
                            :class="{ active: page === 'Section' }"
                            @click="changePage('Section')"
                            >Home</a
                        >
                    </li>
                    <li class="nav-item">
                        <a
                            class="nav-link"
                            :class="{ active: page === 'Admin' }"
                            @click="changePage('Admin')"
                            >Admin</a
                        >
                    </li>
                </ul>
                <!-- Button trigger modal -->
                <button
                    v-trigger-cartModal="'cart-modal'"
                    type="button"
                    class="btn btn-outline-dark"
                    @click="addElementBackground"
                >
                    Cart
                    <span class="badge bg-dark text-white ms-1 rounded-pill">
                        {{ totalCart }}
                    </span>
                </button>
            </div>
            <!-- Modal -->
            <div class="modal fade" id="cart-modal">
                <div class="modal-dialog modal-dialog modal-dialog-centered">
                    <div id="modal-content" class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">
                                Cart
                            </h5>
                            <button
                                id="close-button"
                                type="button"
                                class="btn-close"
                                @click="modalClose"
                            ></button>
                        </div>
                        <div class="modal-body">
                            <div v-if="totalCart > 0">
                                <div
                                    v-for="product in products"
                                    :key="product.id"
                                    :product="product"
                                >
                                    <div
                                        v-if="product.quantity > 0"
                                        class="d-flex d-flex justify-content-between align-items-center m-2 my-4"
                                    >
                                        <div>
                                            <img
                                                class="cart-picture m-0"
                                                :src="product.src"
                                                alt=""
                                            />
                                        </div>
                                        <div>
                                            <p class="m-0">
                                                {{ product.name }}
                                                <span class="text-secondary"
                                                    >{{ product.price }}€</span
                                                >
                                            </p>
                                        </div>
                                        <div
                                            class="d-flex justify-content-between"
                                        >
                                            <button
                                                type="button"
                                                class="btn btn-secondary btn-sm"
                                                @click="quantityMinus(product)"
                                            >
                                                -
                                            </button>
                                            <p class="m-0 mx-3 pt-1">
                                                {{ product.quantity }}
                                            </p>
                                            <button
                                                type="button"
                                                class="btn btn-secondary btn-sm"
                                                @click="quantityPlus(product)"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex flex-row-reverse">
                                    <p class="m-0 fs-5 align-bottom">
                                        TOTAL : {{ cartSum }} €
                                    </p>
                                </div>
                            </div>
                            <div v-else>
                                <p class="m-0">Your cart is empty</p>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary">
                                Order
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import { eventBus } from "../main";

export default {
    name: "NavItem",
    data() {
        return {
            products: [],
            totalCart: 0,
            cartSum: 0,
            page: eventBus.page,
        };
    },
    methods: {
        quantityMinus(product) {
            eventBus.quantityMinus(product);
        },
        quantityPlus(product) {
            eventBus.quantityPlus(product);
        },
        changePage(page) {
            eventBus.changePage(page);
        },
        addElementBackground() {
            // create new div element
            let newDiv = document.createElement("div");
            newDiv.classList.add("modal-backdrop", "fade", "show");
            newDiv.id = "modal-background";
            // add element in DOM BODY
            document.body.append(newDiv);
            // test if user click on modal
            const modalContent = document.getElementById("modal-content");
            window.addEventListener("click", (e) => {
                if (!modalContent.contains(e.target)) {
                    modalContent.style.transform = "scale(1.01, 1.01)";
                    setTimeout(() => {
                        modalContent.style.transform = "scale(1, 1)";
                    }, 100);
                }
            e.stopPropagation;
            });
        },
        modalClose() {
            document.getElementById("modal-background").remove();
            const cartModal = document.getElementById("cart-modal");
            cartModal.classList.remove("show");
            cartModal.style.opacity = "0";
            cartModal.style.display = "none";
            document.body.style.overflow = "scroll";
        },
    },
    created() {
        this.products = eventBus.products;
        eventBus.$on("update:products", (totalCart) => {
            this.totalCart = totalCart;
        });
        eventBus.$on("update:cartSum", (cartSum) => {
            this.cartSum = cartSum;
        });
        eventBus.$on("update:page", (page) => {
            this.page = page;
        });
    },
    directives: {
        triggerCollapse: {
            inserted(el, binding) {
                window.addEventListener("click", () => {
                    nav.classList.remove("show");
                });
                const nav = document.querySelector("#" + binding.value);
                el.addEventListener("click", (e) => {
                    if (nav.classList.contains("show")) {
                        nav.classList.remove("show");
                    } else {
                        nav.classList.add("show");
                    }
                    e.stopPropagation();
                });
            },
        },
        triggerCartModal: {
            inserted(el, binding) {
                const cart = document.querySelector("#" + binding.value);
                el.addEventListener("click", () => {
                    if (!cart.classList.contains("show")) {
                        cart.classList.add("show");
                        cart.style.opacity = "100";
                        cart.style.display = "block";
                        document.body.style.overflow = "hidden";
                    }
                });
            },
        },
    },
};
</script>

<style scoped>
.cart-picture {
    margin: 1em;
    margin-right: 2em;
    max-width: 100px;
    max-height: 60px;
}

a {
    cursor: pointer;
}
</style>
