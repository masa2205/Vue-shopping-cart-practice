import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import shop from '@/api/shop.js'

export default new Vuex.Store({
  state: {
    products: [],
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    }
  },
  actions: {
    getAllProducts(context){
      shop.getProducts(products => {
        context.commit('setProducts', products);
      })
    }
  },
  modules: {
  }
})
