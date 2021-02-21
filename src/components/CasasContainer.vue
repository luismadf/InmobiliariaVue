<template>
  <div class="casas-container">
    <div class="our-houses">
      <h3>Nuestras Casas.</h3>
    </div>
    <p>
      Las mejores casas a tu alcance, para que vivas la vida de tus sueños.
    </p>
    <!--           <div class="our-houses-filter">

            <form>
              <select name="" id="min-filter">
                <option value="50000">50.000</option>
                <option value="100000">100.000</option>
                <option value="200000">200.000</option>
                <option value="300000">300.000</option>
                <option value="400000">400.000</option>
                <option value="500000">500.000</option>
              </select>
              <select name="" id="max-filter">
                <option value="50000">50.000</option>
                <option value="100000">100.000</option>
                <option value="200000">200.000</option>
                <option value="300000">300.000</option>
                <option value="400000">400.000</option>
                <option value="500000">500.000</option>
              </select>
            </form>
          </div> -->
    <select @change="filtrarCasas(estado)" v-model="estado">
      <option value="" selected>
        Selecciona tu Ubicacion Preferida.
      </option>
      <option
        v-for="(casa, index) in casasDB"
        :key="index"
        :value="casa.ubicacion"
        >{{ casa.ubicacion }}</option
      >
    </select>
  </div>
  <div class="casas-slider">
    <div v-for="(casa, index) in casas" :key="index" class="card">
      <img src="../assets/img/casa2.jpg" alt="" />
      <div class="card-text">
        <p class="titulo">{{ casa.nombre }}</p>
        <div class="ubicacion-container">
          <div class="ubicacion">
            <p>{{ casa.ubicacion }}, U.S.A.</p>
          </div>
          <div class="precio">
            <p>$50.000</p>
          </div>
        </div>
        <div class="detalles">
          <ul>
            <li><i class="fas fa-toilet"></i> 3</li>
            <li><i class="fas fa-bed"></i> 2</li>
            <li><i class="fas fa-car"></i> 2</li>
          </ul>
        </div>
        <a href="#" class="boton-ver-mas">Más Información</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  Data() {
    return {
      estado: "",
    };
  },
  methods: {
    ...mapActions(["mostrarCasas", "filtrarCasas"]),
  },
  computed: {
    ...mapState(["casasDB", "casas"]),
  },
  created() {
    this.mostrarCasas();
  },
};
</script>

<style scoped>
.card {
  position: relative;
  display: flex;
  justify-content: center;
  max-width: 400px;
  min-width: 400px;
  height: 400px;
  margin-right: 40px;
  margin-bottom: 200px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.16);
  border-radius: 5px;
}

.card img {
  width: 100%;
  height: 100%;
  border-radius: 5px;
}

.card .card-text {
  position: absolute;
  top: 310px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 85%;
  min-height: 100px;
  max-width: 300px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.16);
  padding: 25px;
}

.card .card-text .titulo {
  width: 100%;
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  color: var(--color-azul-oscuro);
}

.card .card-text .ubicacion-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-top: 10px;
}

.card .card-text .ubicacion {
  width: 50%;
}

.card .card-text .ubicacion p {
  color: gray;
  font-weight: bold;
  padding: 15px 0;
  text-align: center;
}

.card .card-text .ubicacion-container .precio {
  width: 50%;
  margin: 0 auto;
}

.card .card-text .ubicacion-container .precio p {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  height: 35px;
  width: 100px;
  border: 1px solid #f7931a;
  border-radius: 50px;
  font-size: 20px;
  padding: 10px;
  font-weight: bold;
  color: #f7931a;
}

.card .card-text .detalles ul {
  display: flex;
  list-style: none;
}

.card .card-text .detalles ul li {
  font-size: 20px;
  margin: 10px;
  color: gray;
}

.boton-ver-mas {
  display: block;
  width: 100%;
  text-align: center;
  height: 45px;
  background-color: #f7931a;
  border-radius: 5px;
  text-decoration: none;
  color: white;
  font-weight: bold;
  padding: 12px;
  margin-top: 20px;
}
.casas-container {
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 1200px;
  margin: 40px auto;
}
.our-houses {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  height: 35px;
  width: 170px;
  border-radius: 50px;
  background-color: rgba(247, 147, 26, 0.2);
}

.casas-container h3 {
  font-size: 16px;
  width: 100%;

  color: #f7931a;
}

/* .our-houses-filter {
  display: flex;
  justify-content: space-between;
} */

.casas-container p {
  font-size: 30px;
  width: 40%;
  margin: 20px 0;
}

.casas-container select {
  width: 100%;
  margin-top: 10px;
  font-family: "Lato", sans-serif;
  padding: 10px;
  font-size: 16px;
  text-align: center;
}

.casas-slider {
  /* width: 100%; */
  width: 90%;
  max-width: 1200px;
  margin: 40px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
