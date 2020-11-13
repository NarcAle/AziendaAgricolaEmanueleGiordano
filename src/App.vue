<template>
  <div id="app">
    <div id="nav">
      <Header />
      <navbar class="nav-bar"></navbar>
    </div>
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header/Header.vue'
import Footer from './components/Footer/Footer.vue';
import navbar from './components/Navbar/Navbar.vue';
export default {
  components: {
    Header,
    navbar,
    Footer,
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
