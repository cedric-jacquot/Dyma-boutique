<template>
  <div id="app">
    <Nav/>
    <Header/>
    <Section/>
    <Footer/>
  </div>
</template>

<script>
import Nav from './components/Nav.vue';
import Header from './components/Header.vue';
import Section from './components/Section.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Nav,
    Header,
    Section,
    Footer,
  }
}
</script>
