<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <ProductList msg="Shopping Cart Example"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductList from '@/components/ProductList.vue'

export default {
  name: 'Home',
  components: {
    ProductList
  }
}
</script>
