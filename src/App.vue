<template>
    <div id="app">
        <NavItem/>
        <HeaderItem />
        <SectionItem/>
        <FooterItem />
    </div>
</template>

<script>
import NavItem from "./components/Nav.vue";
import HeaderItem from "./components/Header.vue";
import SectionItem from "./components/Section.vue";
import FooterItem from "./components/Footer.vue";

export default {
    name: "App",
    components: {
        NavItem,
        HeaderItem,
        SectionItem,
        FooterItem,
    },
};
</script>
