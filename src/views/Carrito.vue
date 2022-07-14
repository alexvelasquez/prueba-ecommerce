<template>
  <div class="container">
    <div class="card mt-5">
      <div class="card-header">Carrito</div>
      <ul class="list-group list-group-flush">
        <li
          v-for="(carrito, index) in getCarrito"
          :key="index"
          class="list-group-item"
        >
          <router-link :to="`/producto/${carrito.id}`">
            <div class="d-flex justify-content-between align-items-center">
              <div>
                <h6>{{ carrito.nombre }}</h6>
                <h6>$ {{ carrito.precio }}</h6>
              </div>
              <i
                @click.stop.prevent="removeItemCarrito(carrito.id)"
                class="bi bi-trash-fill"
                style="color: red; cursor: pointer"
              ></i>
            </div>
          </router-link>
        </li>
        <li  class="list-group-item">
          <div class="d-flex justify-content-end">
            TOTAL: {{total}}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "carrito-app",
  computed: {
    ...mapGetters(["getCarrito"]),
    total(){
      let resultado = 0;
      this.getCarrito.forEach(carrito => {
          resultado += carrito.precio
      });
      return resultado;
    }
  },
  methods: {
    ...mapMutations(["removeItemCarrito"]),
  },
};
</script>

<style>

</style>