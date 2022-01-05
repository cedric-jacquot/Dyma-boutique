import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

export const eventBus = new Vue({
    data: {
        cart: [],
        products: [
            { id: 1, nom: "iPhone", prix: 10, src: "img/01.png", stars: 1 },
            { id: 2, nom: "AirPods", prix: 20, src: "img/02.png", stars: 2 },
            { id: 3, nom: "MacBook Air", prix: 30, src: "img/03.jpg", stars: 3 },
            { id: 4, nom: "iPad", prix: 40, src: "img/04.png", stars: 4 },
            { id: 5, nom: "Watch", prix: 50, src: "img/05.png", stars: 5 },
          ],
    },
    methods: {
        addToCart(product) {
            this.cart = [...this.cart, product];
            this.$emit('update:cart', this.cart.slice());
        }
    },
});

new Vue({
    render: (h) => h(App),
}).$mount("#app");
