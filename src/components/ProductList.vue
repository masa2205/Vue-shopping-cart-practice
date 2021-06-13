<template>
  <ul>
    <li v-for="product in products" :key="product.id">
      {{ product.title }} - {{ product.price }}<br>
      <button @click="addProductToCart(product)">Add to cart</button>
    </li>
  </ul>
</template>

<script>
import {mapState} from 'vuex'
export default {
  computed: mapState(['products']),
  created(){
    this.$store.dispatch('getAllProducts')
  }
}
</script>