import Vue from "vue";
import App from "./components/App";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap-icons/font/bootstrap-icons.css";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

export const eventBus = new Vue({
    data: {
        products: [
            {
                id: 1,
                name: "iPhone",
                price: 10,
                src: "img/01.png",
                stars: 1,
                quantity: 0,
            },
            {
                id: 2,
                name: "AirPods",
                price: 20,
                src: "img/02.png",
                stars: 2,
                quantity: 0,
            },
            {
                id: 3,
                name: "MacBookAir",
                price: 30,
                src: "img/03.jpg",
                stars: 3,
                quantity: 0,
            },
            {
                id: 4,
                name: "iPad",
                price: 40,
                src: "img/04.png",
                stars: 4,
                quantity: 0,
            },
            {
                id: 5,
                name: "Watch",
                price: 50,
                src: "img/05.png",
                stars: 5,
                quantity: 0,
            },
        ],
        totalCart: 0,
        cartSum: 0,
        page: "Section",
        id: null,
    },
    methods: {
        addToCart(product) {
            this.products[product.id - 1].quantity =
                this.products[product.id - 1].quantity + 1;
            this.$emit("update:products", this.cartQuantities());
            this.$emit("update:cartSum", this.totalPriceCart());
        },
        cartQuantities() {
            this.totalCart = 0;
            for (const product of this.products) {
                this.totalCart += product.quantity;
            }
            return this.totalCart;
        },
        quantityMinus(product) {
            if (this.products[product.id - 1].quantity > 0) {
                this.products[product.id - 1].quantity =
                    this.products[product.id - 1].quantity - 1;
                this.$emit("update:products", this.cartQuantities());
                this.$emit("update:cartSum", this.totalPriceCart());
            }
        },
        quantityPlus(product) {
            this.addToCart(product);
        },
        totalPriceCart() {
            this.cartSum = 0;
            for (const key of this.products) {
                this.cartSum += key.price * key.quantity;
            }
            return this.cartSum;
        },
        changePage(page) {
            this.page = page;
            this.$emit("update:page", this.page);
        },
        createProduct(product) {
            if (this.id) {
                ++this.id;
            } else {
                this.id = this.products.length + 1;
            }
            this.products.push({
                id: this.id,
                name: product.title,
                price: product.price,
                src: product.picture,
                stars: 0,
                quantity: 0,
            })
            console.log(this.products);
        },
    },
});

new Vue({
    render: (h) => h(App),
}).$mount("#app");
