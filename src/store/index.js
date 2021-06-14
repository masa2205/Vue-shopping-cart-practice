import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import shop from '@/api/shop.js'

export default new Vuex.Store({
  state: {
    products: [],
    items: [],
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    pushProductToCart(state,product){
      state.items.push({
        id: product.id,
        quantity: 1
      })
    },
    incrementItemQuantity(state,{id}){
      const carItem=state.items.find(item => item.id === id);
      carItem.quantity++;
    }
  },
  actions: {
    getAllProducts({commit}){
      shop.getProducts(products => {
        commit('setProducts', products);
      })
    },
    addProductToCart({state,commit},product){
      const carItem = state.items.find(item => item.id === product.id);
      if(!cartItem){
        commit('pushProductToCart',product)
      }else{
        commit('incrementItemQuantity', carItem);
      }
    }
  },
  modules: {
  },
  getters: {
    cartProducts: state =>{
      return state.items.map(item =>{
        const product = state.products.find(product => product.id===item.id)
        return{
          title: product.title,
          price: product.price,
          quantity: item.quantity
        }
      })
    }
  },
})
