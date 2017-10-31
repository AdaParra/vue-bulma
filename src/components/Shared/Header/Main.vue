<template>

<div class="container is-fullhd">
  <nav class="navbar is-transparent" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item">
        <img src="./assets/logo-4.png" width="160px" alt="Bulma and vuejs">
      </a>
      <button class="button navbar-burger" :data-target="dataTarget">
        <span> </span>
        <span> </span>
        <span> </span>
      </button>
    </div>

    <div class="navbar-menu" :id="idnavMenu">
      
      <div class="navbar-start">

          <router-link :to="{ name: 'Home'}" class="navbar-item">
            Inicio
          </router-link>

          <router-link :to="{ name: 'Projects' }" class="navbar-item">
            Proyectos
          </router-link>

          <a class="navbar-item">
            ¿Como Funciona?
          </a>

          <a class="navbar-item">
            Preguntas Frecuentes
          </a>
      </div>
  
    <div class="navbar-end">
        <a class="navbar-item">
          <div class="buttons">
            <span class="button is-success">Registrate</span>
          </div>
        </a>
        <a class="navbar-item">
          <div class="buttons">
            <span class="button is-info">Iniciar Sesión</span>
          </div>
        </a>
      </div>
    </div>
  </nav>
</div>


</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      msg: 'Este es el header de Shared.....',
      dataTarget: 'navMenu',
      idnavMenu: 'navMenu'
    }
  },
  methods: {
    navbarMenu () {
      console.log('Hello')
      document.addEventListener('DOMContentLoaded', function () {
        // Get all "navbar-burger" elements
        var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0)
        console.log($navbarBurgers)
        // Check if there are any navbar burgers
        if ($navbarBurgers.length > 0) {
          // Add a click event on each of them
          $navbarBurgers.forEach(function ($el) {
            console.log($el)
            $el.addEventListener('click', function () {
              // Get the target from the "data-target" attribute
              var target = $el.dataset.target
              var $target = document.getElementById(target)
              // Toggle the class on both the "navbar-burger" and the "navbar-menu"
              $el.classList.toggle('is-active')
              $target.classList.toggle('is-active')
            })
          })
        }
      })
    }
  },
  created: function () {
    this.navbarMenu()
    console.log('llamo?')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

  @import '../../../scss/main.scss'

</style>

<style type="text/css">

  .container-logo{
    background: #004892;
    height: 57px;
    width: 180px;
    margin-right: 30px;
  }

  .navbar-item{
    padding-top: 0px;
  }

 
</style>