<template>
    <div id="app">
        <Nav />
        <Header />
        <component :is='page'></component>
        <Footer />
    </div>
</template>

<script>
import { eventBus } from "../main";

import Admin from "./features/Admin/Admin";
import Footer from "./features/Footer";
import Header from "./features/Header";
import Nav from "./Nav";
import Section from "./features/User/Shop/Section.vue";

export default {
    name: "App",
    components: {
        Admin,
        Footer,
        Header,
        Nav,
        Section,
    },
    data() {
        return {
            page: eventBus.page,
        }
    },
    created() {
        eventBus.$on('update:page', (page) => {
            this.page = page;
        })
    },
};
</script>
