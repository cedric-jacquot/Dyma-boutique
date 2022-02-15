<template>
    <div id="app">
        <Products/>
        <Section/>
    </div>
</template>

<script>
import Products from './Shop/Products.vue';
import Section from './Shop/Section.vue';

export default {
    name: "App",
    components: {
        Products,
        Section,
    },
};
</script>
