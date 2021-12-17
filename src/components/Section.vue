<template>
  <!-- Section-->
  <section class="py-5">
    <div class="container px-4 px-lg-5 mt-5">
      <p >id : {{ id }}</p>
      <div
        class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center"
      >
        <!-- PRODUCTS -->
        <Products
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </section>
</template>

<script>
import Products from "./Products.vue";

export default {
  name: "Section",
  components: {
    Products,
  },
  data: function () {
    return {
      id: 0,
      products: [
        { id: 1, nom: "iPhone", prix: 10, src: "img/01.png", stars: 1 },
        { id: 2, nom: "AirPods", prix: 20, src: "img/02.png", stars: 2 },
        { id: 3, nom: "MacBook Air", prix: 30, src: "img/03.jpg", stars: 3 },
        { id: 4, nom: "iPad", prix: 40, src: "img/04.png", stars: 4 },
        { id: 5, nom: "Watch", prix: 50, src: "img/05.png", stars: 5 },
      ],
    };
  },
  props: {},
};
</script>
