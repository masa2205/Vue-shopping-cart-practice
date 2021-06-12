<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <hr>
    <h2>Products</h2>
    <template>
      <ul>
        <li v-for="product in products" :key="product.id">
          {{ product.title }} - {{ product.price }}
        </li>
      </ul>
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'ProductList',
  props: {
    msg: String
  },
  computed: mapState(['products']),
  created(){
    this.$store.dispatch('getAllProducts')
  }
}
</script>