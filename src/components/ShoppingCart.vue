<template>
    <div class="cart">
        <h2>Your Cart</h2>
        <p v-show="!cartProducts.length">
            <i>Please add some products to cart.</i>
        </p>
        <ul>
            <li v-for="product in cartProducts" :key="product.id">
                {{ product.title }} - {{ product.price }} x {{ product.quantity }}
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: mapGetters(['cartProducts']),
}
</script>