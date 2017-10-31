<template>
<div>
  <Header></Header>
  <h1 class="title">Hola Mundo</h1>
  <Footer></Footer>
</div>
</template>

<script>

import Header from '../Shared/Header/Main.vue'
import Footer from '../Shared/Footer/Main.vue'

export default {
  name: 'home',
  data () {
    return {
      msg: 'Home'
    }
  },
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss" scoped>

  @import '../../scss/main.scss'

</style>
