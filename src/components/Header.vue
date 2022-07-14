<template>
  <nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <router-link to="/" style="text-decoration:none" class="text-green">ecommerce</router-link>
    <div class="d-flex">
      <input v-model="busqueda" class="form-control me-2" @keyup.enter="fetchProductos({nombre:busqueda})" placeholder="Buscar" aria-label="Search" style="width:500px">
      <button class="btn btn-outline-success" type="button" @click="fetchProductos({nombre:busqueda})">Buscar</button>
    </div>
    <div>
        <button @click="$router.push('/favoritos')" type="button" class="btn btn-secondary btn-sm me-2"><i class="bi bi-heart-fill"></i> {{getFavoritos.length}}</button>
        <button @click="$router.push('/carrito')" type="button" class="btn btn-secondary btn-sm"><i class="bi bi-cart-fill"></i> {{getCarrito.length}}</button>
    </div>
  </div>
</nav>
</template>

<script>
import {mapGetters, mapActions} from "vuex"
export default {
    name:'Header-app',
    data(){
      return {
        busqueda:null,
      }
    },
    computed:{
      ...mapGetters(['getCarrito','getFavoritos'])
    },
    methods:{
      ...mapActions(['fetchProductos'])
    }
}
</script>

<style>

</style>