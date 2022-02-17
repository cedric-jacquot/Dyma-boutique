<template>
    <div id="app">
        <Nav />
        <Header />
        <User />
        <Admin />
        <Footer />
    </div>
</template>

<script>
import Nav from "./Nav";
import Header from "./features/Header";
import User from "./features/User/User";
import Admin from "./features/Admin/Admin";
import Footer from "./features/Footer";

export default {
    name: "App",
    components: {
        Nav,
        Header,
        User,
        Admin,
        Footer,
    },
};
</script>
