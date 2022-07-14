<template>
  <div>
    <Header />
    <router-view />
  </div>
</template>
<script>
import Header from "@/components/Header";
export default {
  components: { Header },
};
</script>

<style>
a {
  color: #6c757d !important;
  text-decoration: none !important;
}
a:hover {
  color: #6c757d !important;
  text-decoration: none !important;
}
</style>
