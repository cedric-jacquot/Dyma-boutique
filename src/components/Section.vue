<template>
        <!-- Section-->
        <section class="py-5">
            <div class="container px-4 px-lg-5 mt-5">
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                
                    <!-- ICI LES PRODUITS A LISTER -->
                    <Produit/>
                    <Produit/>
                    <Produit/>
                    <Produit/>
                    <Produit/>
                    <Produit/>
                    <Produit/>
                    <Produit/>
                    <Produit/>
                    <Produit/>
                    <Produit/>
                    <Produit/>
                    <Produit/>
                    <Produit/>
                    <Produit/>
                    <Produit/>

                </div>
            </div>
        </section>
</template>

<script>
import Produit from './Produit.vue';

export default {
  name: 'Section',
  components: {
      Produit,
  },
  props: {
  }
}
</script>
