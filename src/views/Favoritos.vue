<template>
  <div class="container">
    <div class="card mt-5">
      <div class="card-header">FAVORITOS</div>
      <ul class="list-group list-group-flush">
        <li
          v-for="(favorito, index) in getFavoritos"
          :key="index"
          class="list-group-item"
        >
          <router-link :to="`/producto/${favorito.id}`">
            <div class="d-flex justify-content-between align-items-center">
              <div>
                <h6>{{ favorito.nombre }}</h6>
                <h6>$ {{ favorito.precio }}</h6>
              </div>
              <i
                @click.stop.prevent="removeFavorite(favorito.id)"
                class="bi bi-trash-fill"
                style="color: red; cursor: pointer"
              ></i>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "favoritos-app",
  computed: {
    ...mapGetters(["getFavoritos"]),
  },
  methods: {
    ...mapMutations(["removeFavorite"]),
  },
};
</script>

<style></style>
