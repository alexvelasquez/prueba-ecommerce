import Vue from 'vue'
import Vuex from 'vuex'
import http from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productos:[],
    carrito: JSON.parse(localStorage.getItem('carrito')) || [],
    favoritos: []
  },
  getters: {
    getProductos(state) {
      return state.productos
    },
    getCarrito(state) {
      return state.carrito
    },
    getFavoritos(state) {
      return state.favoritos
    }
  },
  mutations: {
    setProductos(state,value){
      state.productos = value
    },
    addItemCarrito(state, value) {
      state.carrito.push(value);
      localStorage.setItem('carrito',JSON.stringify(state.carrito))
    },
    removeItemCarrito(state, value) {
      state.carrito = state.carrito.filter(p=>p.id != value)
      localStorage.setItem('carrito',JSON.stringify(state.carrito))
    },

    addFavorite(state, value) {
      state.favoritos.push(value);
    },
    removeFavorite(state, value) {
      state.favoritos = state.favoritos.filter(f=>f.id != value)
    },

  },
  actions: {
    async fetchProductos({commit},filtro = {}){
      const response = await http.get(
        `https://api-ecommerce-vue.herokuapp.com/productos`,
        { params:filtro }
      );
      commit('setProductos',response.data)
    }
  },
  modules: {
  }
})
