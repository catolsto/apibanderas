<template>
    <div class="container">
      <h1 class="text-center">Paises Banderas</h1>
      <Continente></Continente>
      <Buscador></Buscador>
      <CardList></CardList>

    </div>
</template>

<script>
import CardList from './components/CardList.vue'
import Continente from './components/Continente.vue'
import Buscador from './components/Buscador.vue'
export default {
  name: 'App',
  components: {
      CardList,
      Continente,
      Buscador,
  }
}
</script>

