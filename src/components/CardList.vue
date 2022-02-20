<template>
  <div class="row">
      <div class="col-12">

        <div v-for="(pais, index) in paises" :key="index">
            <Card :pais='pais'></Card>
        </div> 

      </div>
  </div>
</template>

<script>
import Card from './Card.vue'
import { computed, onMounted } from "vue";
import { useStore } from "vuex";  // para acceder  al Store

export default { 
    components: {
        Card,
    },
    setup () {
        const store = useStore()

        // Traigo del store el arreglo de paises
        //const paises = computed(() => { return store.state.paises });
        const paises = computed(() => { return store.getters.topPaisesPoblacion });
        
        onMounted(async() => {
            // Ejecuta la acción del Store
            await store.dispatch('getPaises')
            await store.dispatch('filtrarRegion','')
        })

        // Retorna data, methods, computed, etc...
        return {
            paises,
        }
    }
}
</script>

<style>

</style>