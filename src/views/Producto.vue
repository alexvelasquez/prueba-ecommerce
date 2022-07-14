<template>
  <div class="container">
    <div class="card mt-5">
      <div class="card-header">PRODUCTO</div>
      <div class="card-body">
        <div class="d-flex justify-content-between">
          <div class="d-flex">
            <img :src="producto.imagen" style="height: 200px" alt="" />
            <div class="d-flex flex-column ms-3" style="max-width: 600px">
              <h5>{{ producto.nombre }}</h5>
              <h5>${{ producto.precio }}</h5>
              <p>{{ producto.descripcion }}</p>
            </div>
          </div>
          <div class="d-flex align-items-start">
            <button
              @click="addItemCarrito(producto)"
              v-if="!estaAgregado(producto)"
              type="button"
              class="btn btn-outline-success btn-sm"
            >
              <i class="bi bi-plus"></i>
              <i class="bi bi-cart-fill"></i>
            </button>
            <button
              @click="removeItemCarrito(producto.id)"
              v-else
              type="button"
              class="btn btn-outline-success btn-sm"
            >
              <i class="bi bi-dash"></i>
              <i class="bi bi-cart-fill"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  name: "producto-app",
  props: ["id"],
  data() {
    return {
      producto: {},
    };
  },
  async created() {
    try {
      const response = await this.$http.get(
        `https://api-ecommerce-vue.herokuapp.com/productos/${this.id}`
      );
      this.producto = response.data;
    } catch (error) {
      console.log(error);
    }
  },
  computed: {
    ...mapGetters(["getCarrito"]),
  },
  methods: {
    ...mapMutations(["addItemCarrito","removeItemCarrito"]),
    estaAgregado(producto) {
      return this.getCarrito.find((f) => f.id == producto.id);
    },
  },
};
</script>

<style></style>
