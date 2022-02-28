<template>
    <div id='admin-product-form' class="d-flex justify-content-center m-5">
        <AdminProductForm/>
    </div>
</template>

<script>
import AdminProductForm from './AdminProductForm';

export default {
    name: 'Admin',
    components: {
        AdminProductForm,
    },
};
</script>
