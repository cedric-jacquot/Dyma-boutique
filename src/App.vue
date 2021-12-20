<template>
  <div id="app">
    <Nav :cart="cart"/>
    <Header/>
    <Section :cart="cart"/>
    <Footer/>
  </div>
</template>

<script>
import Nav from './components/Nav.vue';
import Header from './components/Header.vue';
import Section from './components/Section.vue';
import Footer from './components/Footer.vue';
import { eventBus } from "./main.js";


export default {
  name: 'App',
  components: {
    Nav,
    Header,
    Section,
    Footer,
  },
  created() {
    this.cart = eventBus.cart;
    eventBus.$on('update:cart', (cart) => {
    this.cart = cart;
    })
  },
}
</script>
