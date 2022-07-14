<template>
  <router-link :to="`/producto/${producto.id}`">
    <div class="card">
      <img :src="producto.imagen" class="card-img-top" />
      <div class="card-body">
        <div class="d-flex justify-content-between">
          <h5 class="card-title">$ {{ producto.precio | currency }}</h5>
          <span style="cursor: pointer">
            <i
              v-if="!esFavorito(producto.id)"
              class="bi bi-heart"
              @click.stop.prevent="addFavorite(producto)"
            ></i>
            <i
              v-else
              class="bi bi-heart-fill"
              @click.stop.prevent="removeFavorite(producto.id)"
            ></i>
          </span>
        </div>
        <div>
          <p>{{ producto.nombre }}</p>
          <p>Publicado: {{ producto.fecha_publicacion }}</p>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  name: "Producto-app",
  props: {
    producto: {
      type: Object,
    },
  },
  filters: {
    currency(value) {
      return new Intl.NumberFormat().format(value);
    },
  },
  computed: {
    ...mapGetters(["getFavoritos"]),
  },
  methods: {
    ...mapMutations(["addFavorite", "removeFavorite"]),
    esFavorito(id) {
      return this.getFavoritos.find((f) => f.id == id);
    },
  },
};
</script>

<style>
.card-img-top {
  height: 200px;
}
</style>
