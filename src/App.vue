<template>
  <div id="app">
    <h1>Shopping Cart Example</h1>
    <hr>
    <h2>Products</h2>
    <ProductList/>
    <ShoppingCart/>
  </div>
</template>

<script>
import ProductList from "./components/ProductList.vue"
import ShoppingCart from "./components/ShoppingCart.vue"

export default {
  components: { ProductList , ShoppingCart }
}
</script>t