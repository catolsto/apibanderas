<template>
  <div class="form-group">
    <input type="text"
      class="form-control" 
      placeholder="Buscar por nombre"
      v-model="texto"
      @keyup="procesarTexto"
      >
  </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
    setup() {
        const store = useStore()
        const texto = ref('')
        const procesarTexto = () => {
            store.dispatch('buscarPais',texto.value)
        }
        return { texto, procesarTexto }
    }
}
</script>

