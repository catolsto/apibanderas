<template>
  <div class="card">
      <div class="card-body">
          <h4 class="card-title text-center">{{pais.name.common}}</h4>
          <p class="card-text">
              {{pais.flag}}
              <span class="badge badge-danger d-block mb-1 p-3">Población: {{ numeroFormato(pais.population) }}</span>
              <span class="badge badge-warning d-block mb-1">Capital: {{pais.capital}}</span>
              <span class="badge badge-warning d-block mb-1">Región: {{pais.region}}</span>
          </p>
      </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
export default {
    props: ['pais'],
    setup() {
        const numeroFormato = (num) => {
            return new Intl.NumberFormat("de-DE").format(num)
        }
        return { numeroFormato,  }
    }
}
</script>

<style>

</style>