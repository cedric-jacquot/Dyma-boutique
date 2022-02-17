<template>
    <div id="app">
        <Products/>
        <Section/>
    </div>
</template>

<script>
import Products from './Shop/Products';
import Section from './Shop/Section';

export default {
    name: "App",
    components: {
        Products,
        Section,
    },
};
</script>
