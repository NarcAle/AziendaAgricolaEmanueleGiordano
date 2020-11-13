<template>
  <div>
    <b-navbar class="navbar" toggleable="lg" type="dark" >
      <b-navbar-brand class="nav-brand" to="/">{{navhome}}</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/"> HOME</b-nav-item>  
          <b-nav-item to="chi-siamo">CHI SIAMO</b-nav-item> 
          <b-nav-item to="cosa-facciamo">COSA FACCIAMO</b-nav-item> 
          <b-nav-item to="galleria">GALLERIA</b-nav-item> 
          <b-nav-item to="contattaci">CONTATTACI</b-nav-item> 
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>

export default {
  name: 'navbar',
  data() {
    return {
      navhome: 'Azienda Agricola Emanuele Giordano',
     
    };
  }
};
</script>

<style lang="sass">
//@import './Navbar'
</style>
