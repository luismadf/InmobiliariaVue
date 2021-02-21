import { createStore } from "vuex";

export default createStore({
  state: {
    casasDB: [
      {
        nombre: "Casa en el Campo",
        ubicacion: "Ohio",
        banos: 3,
        habitaciones: 2,
        cochera: 2,
        precio: 50.0,
        imagen: "casa1.jpg",
      },
      {
        nombre: "Casa en la Ciudad",
        ubicacion: "Washington",
        banos: 3,
        habitaciones: 2,
        cochera: 2,
        precio: 50.0,
        imagen: 'url("../assets/img/casa2.jpg")',
      },
      {
        nombre: "Casa en la Ciudad",
        ubicacion: "New York",
        banos: 3,
        habitaciones: 2,
        cochera: 2,
        precio: 50.0,
        imagen: 'url("../assets/img/casa3.jpg")',
      },
      {
        nombre: "Casa en la Ciudad",
        ubicacion: "New York",
        banos: 3,
        habitaciones: 2,
        cochera: 2,
        precio: 50.0,
        imagen: 'url("../assets/img/casa3.jpg")',
      },
    ],
    casas: [],
  },
  mutations: {
    mostrarCasas(state) {
      state.casas = state.casasDB;
      console.log(state.casas);
    },
    filtrar(state, payload) {
      const resultado = state.casasDB.filter(
        (casa) => casa.ubicacion === payload
      );
      if (resultado.length) {
        state.casas = resultado;
      } else {
        state.casas = state.casasDB;
        console.log(resultado);
      }
    },
  },
  actions: {
    mostrarCasas({ commit }) {
      commit("mostrarCasas");
    },
    filtrarCasas({ commit }, estado) {
      commit("filtrar", estado);
    },
  },
  modules: {},
});
