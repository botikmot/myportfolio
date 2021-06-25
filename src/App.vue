<template>
  <Header />
  <router-view/>
</template>

<script>
import Header from './components/layouts/Header.vue'
export default {
  components: {
    Header
  }
}
</script>

<style>
body {
  font-family: 'Poppins', sans-serif !important;
}
</style>