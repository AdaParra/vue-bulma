<template>
<div>
    <Header/>
      <Hero/>
      <Cards/>
    <Footer/>  
</div>
</template>

<script>
import Header from '../Shared/Header/Main.vue'
import Hero from '../Shared/Hero/Main.vue'
import Cards from '../Shared/Cards/Main.vue'
import Footer from '../Shared/Footer/Main.vue'

export default {
  name: 'home',
  data () {
    return {
      msg: 'Este es el home 0999'
    }
  },
  components: {
    Header,
    Hero,
    Cards,
    Footer
  }
}
</script>

<style lang="scss" scoped>

  @import '../../scss/main.scss'

</style>
