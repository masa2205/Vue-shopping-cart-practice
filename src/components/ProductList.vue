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
import shop from '@/api/shop.js'
export default {
  name: 'ProductList',
  props: {
    msg: String
  },
  data(){
    return {
      products : [],
    }
  },
  created(){
    shop.getProducts( products => this.products = products);
  }
}
</script>