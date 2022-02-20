import { createStore } from 'vuex'

export default createStore({
  state: {
    paises: [],
    paisesFiltrados: [],
  },
  mutations: {
    setPaises(state, payload) {
      state.paises = payload
    },
    setpaisesFiltrados(state, payload) {
      state.paisesFiltrados = payload
    },

  },
  actions: {
      // Consumimos la API
      async getPaises({commit }) {
          try {
            const res = await fetch('https://restcountries.com/v3.1/all')
            const data = await res.json()
            commit ('setPaises', data)
          } catch (error) {
            console.log(error)
          }
      },
      filtrarRegion ({commit,state},region) {
          const filtro = state.paises.filter( pais => 
            pais.region.includes(region)
          )
          commit ('setpaisesFiltrados', filtro)
      },
      buscarPais({commit,state},texto) {
        const filtro = state.paises.filter((pais) => {
          let nombreApi = pais.name.common.toLowerCase();
          let nombreInput  = texto.toLowerCase();
          if (nombreApi.includes(nombreInput)) {
            return pais;
          }
        });
        commit ('setpaisesFiltrados', filtro)
      }
  },
  getters: {
    topPaisesPoblacion(state) {
      return state.paisesFiltrados.sort((a,b) => 
        a.population < b.population ? 1 : -1)
    }
  },
  modules: {
  }
})
