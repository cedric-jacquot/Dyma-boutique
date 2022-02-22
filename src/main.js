import Vue from 'vue';
import App from './components/App';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import "bootstrap-icons/font/bootstrap-icons.css";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

export const eventBus = new Vue({
    data: {
        cart: [
            { id: 1, nom: "iPhone", prix: 10, src: "img/01.png", quantity: 0 },
            { id: 2, nom: "AirPods", prix: 20, src: "img/02.png", quantity: 0 },
            { id: 3, nom: "MacBookAir", prix: 30, src: "img/03.jpg", quantity: 0 },
            { id: 4, nom: "iPad", prix: 40, src: "img/04.png", quantity: 0 },
            //{ id: 5, nom: "Watch", prix: 50, src: "img/05.png", quantity: 0 },
        ],
        products: [
            { id: 1, nom: "iPhone", prix: 10, src: "img/01.png", stars: 1 },
            { id: 2, nom: "AirPods", prix: 20, src: "img/02.png", stars: 2 },
            { id: 3, nom: "MacBookAir", prix: 30, src: "img/03.jpg", stars: 3 },
            { id: 4, nom: "iPad", prix: 40, src: "img/04.png", stars: 4 },
            //{ id: 5, nom: "Watch", prix: 50, src: "img/05.png", stars: 5 },
        ],
        totalCart: 0,
        cartSum: 0,
    },
    methods: {
        addToCart(product) {
            this.cart[product.id - 1].quantity = this.cart[product.id - 1].quantity + 1;
            this.$emit("update:cart", this.cartQuantities());
            this.$emit("update:cartSum", this.totalPriceCart());
        },
        cartQuantities() {
            this.totalCart = 0;
            for (const product of this.cart) {
                this.totalCart += product.quantity;
            }
            return this.totalCart;
        },
        quantityMinus(product) {
            if (this.cart[product.id - 1].quantity > 0) {
                this.cart[product.id - 1].quantity = this.cart[product.id - 1].quantity - 1;
                this.$emit("update:cart", this.cartQuantities());
                this.$emit("update:cartSum", this.totalPriceCart());
            }
        },
        quantityPlus(product) {
            this.addToCart(product);
        },
        totalPriceCart() {
            this.cartSum = 0;
            for (const key of this.cart) {
                this.cartSum += key.prix * key.quantity;
            }
            return this.cartSum;
        },
    },
});

new Vue({
    render: (h) => h(App),
}).$mount("#app");
