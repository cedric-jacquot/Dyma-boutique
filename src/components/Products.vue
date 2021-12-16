<template>
    <div class="col mb-5">
        <div class="card h-100">
            <!-- Product image-->
            <div v-if="product.src">
                <img class="card-img-top p-3" :src="product.src" alt="nom"/>
            </div>
            <div v-else>
                <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
            </div>
            <!-- Product details-->
            <div class="card-body p-4">
                <div class="text-center">
                    <!-- Product name-->
                    <h5 class="fw-bolder">
                        <p>{{ product.nom }}</p>
                    </h5>
                    <!-- Product reviews-->
                    <div class="d-flex justify-content-center small text-warning mb-2">
                            <div v-for="star in product.stars" :key="star.id">
                                <div class="bi-star-fill"></div>
                            </div>
                            <div v-for="star in 5-product.stars" :key="star.id">
                                <div class="bi-star"></div>
                            </div>
                    </div>
                    <!-- Product price-->
                    <p>{{ product.prix }}€</p>
                </div>
            </div>
            <!-- Product actions-->
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <p>id: {{ product.id }}</p>
                <div @click="addToCart(product.id)" class="text-center"><a class="btn btn-outline-dark mt-auto">Add to cart</a></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Produit',
  methods: {
      addToCart(id) {
          this.$emit('addToCart', id);
      }
  },
  props: [
      'product',
    ],
}
</script>

<style>
    img {
        max-height: 150px;
        max-width: 100%;
    }
</style>
