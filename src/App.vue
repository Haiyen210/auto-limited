<template>
  <div id="wrapper" class="wrapper-fluid banners-effect-11">
    <HeaderVue/>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import HeaderVue from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    HeaderVue,
    Footer,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
