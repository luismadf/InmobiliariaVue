<template>
  <nav>
    <div class="container">
      <div class="logo">
        <h1><span>In</span>mobiliaria</h1>
      </div>
      <div class="menu">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Acerca de</a></li>
          <li><a href="#">Casas</a></li>
        </ul>
        <a href="#" class="boton">Contactanos!</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
nav .container {
  width: 90%;
  height: 80px;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px auto;
}

nav .container .logo span {
  color: #f7931a;
}

nav .container .logo {
  font-family: "Pacifico", cursive;
  font-size: 25px;
  color: #0e0651;
}

nav .container .menu {
  display: flex;
  align-items: center;
}

nav .container .menu ul {
  display: flex;
  list-style: none;
  align-items: center;
}

nav .container .menu ul li {
  margin-right: 30px;
}

nav .container .menu ul li a {
  text-decoration: none;
  font-weight: bold;
  color: #0e0651;
}

nav .container .menu .boton {
  display: inline-block;
  height: 45px;
  width: 130px;
  text-align: center;
  background-color: #f7931a;
  border-radius: 50px;
  text-decoration: none;
  color: white;
  font-weight: bold;
  padding: 12px;
}
</style>
