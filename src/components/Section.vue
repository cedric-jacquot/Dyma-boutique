<template>
  <!-- Section-->
  <section class="py-5">
    <div class="container px-4 px-lg-5 mt-5">
      <div
        class="
          row
          gx-4 gx-lg-5
          row-cols-2 row-cols-md-3 row-cols-xl-4
          justify-content-center
        "
      >
        <!-- PRODUCTS -->
        <Produit
          v-for="produit in produits"
          v-bind:key="produit.id"
          v-bind:src="produit.src"
          v-bind:nom="produit.nom"
          v-bind:prix="produit.prix"
        />
      </div>
    </div>
  </section>
</template>

<script>
import Produit from "./Produit.vue";

export default {
  name: "Section",
  components: {
    Produit,
  },
  data: function () {
    return {
      produits: [
        { id: 1, nom: 'nom1', prix: 10, src: 'img/01.jpg' },
        { id: 2, nom: 'nom2', prix: 20, src: 'img/02.jpg' },
        { id: 3, nom: 'nom3', prix: 30, src: 'img/03.jpg' },
        { id: 4, nom: 'nom4', prix: 40 },
      ],
    };
  },
  props: {},
};
</script>
