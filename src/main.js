import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

export const eventBus = new Vue({
  data: {
    cart: [],
  },
  created() {
    this.$on('update:cart', (cart) => {
      this.cart = cart;
    })
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
