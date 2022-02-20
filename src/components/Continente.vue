<template>
    <div class="text-center">
        <h4>Filtrar por Contientes</h4>
        <div class="btn-group mb-2" >
            <button type="button" @click="filtro('Americas')" class="btn btn-dark">AM</button>
            <button type="button" @click="filtro('Europe')" class="btn btn-dark">EU</button>
            <button type="button" @click="filtro('Asia')" class="btn btn-dark">AS</button>
            <button type="button" @click="filtro('Oceania')" class="btn btn-dark">OC</button>
            <button type="button" @click="filtro('Africa')" class="btn btn-dark">AF</button>
            <button type="button" @click="filtro('')" class="btn btn-dark">ALL</button>
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex'
export default {
    setup () {
       const store = useStore()
       const filtro = (region) => {
           store.dispatch('filtrarRegion', region)
       }

       return { filtro }
    }
}
</script>

