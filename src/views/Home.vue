<template>
  <div class="container">
    <div class="row mt-4">
      <div class="col d-flex justify-content-center">
        <div class="btn-group" role="group" aria-label="Basic outlined example">
          <button
            type="button"
            @click="categoria = null"
            class="btn btn-outline-success"
          >
            TODOS
          </button>
          <button
            type="button"
            @click="categoria = c"
            class="btn btn-outline-success"
            v-for="c in categorias"
            :key="c.id"
          >
            {{ c.nombre }}
          </button>
        </div>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col col-sm-12 mb-2">
        <ol class="list-group">
          <li class="list-group-item fw-bold">
            <i class="bi bi-tag"></i> {{categoria ? categoria.nombre : 'PRODUCTOS'}}
          </li>
        </ol>
      </div>
      <div
        class="col col-md-4 mt-4"
        v-for="(producto, index) in getProductos"
        :key="index"
      >
        <CardProducto :producto="producto" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import CardProducto from "@/components/CardProducto";
export default {
  name: "home-app",
  components: { CardProducto },
  data() {
    return {
      categorias: [],
      categoria: null,
    };
  },
  async created() {
    try {
      await this.fetchProductos();
      const responseCategorias = await this.$http.get(
        "https://api-ecommerce-vue.herokuapp.com/categorias"
      );
      this.categorias = responseCategorias.data;
    } catch (error) {
      console.log(error);
    }
  },
  computed: {
    ...mapGetters(["getProductos"]),
  },
  methods: {
    ...mapActions(["fetchProductos"]),
  },
  watch: {
    async categoria() {
      await this.fetchProductos({
        categoria: this.categoria ? this.categoria.id : this.categoria,
      });
    },
  },
};
</script>

<style></style>
