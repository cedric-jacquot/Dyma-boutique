<template>
    <div id='app'>
        <Nav/>
        <Header/>
        <User/>
        <Admin/>
        <Footer/>
    </div>
</template>

<script>
import Nav from './Nav.vue';
import Header from './features/Header.vue';
import User from './features/User/User.vue';
import Admin from './features/Admin/Admin.vue'
import Footer from './features/Footer.vue';

export default {
    name: 'App',
    components: {
        Nav,
        Header,
        User,
        Admin,
        Footer,
    },
};
</script>
