<template>
  <ul>
    <li v-for="product in products" v-bind:key="product.id">
      {{ product.title }} - {{ product.price }}<br>
      <button @click="addProductToCart(product)" :disabled="!product.inventory">Add to cart</button>
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