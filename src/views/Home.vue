<template>
  <header>
    <div class="overlay">
      <div class="container-header">
        <Hero />
      </div>
    </div>
  </header>
  <main>
    <section class="container">
      <Casas-container />
    </section>
    <section class="container-section">
      <Benefits />
    </section>
  </main>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import CasasContainer from "@/components/CasasContainer.vue";
import Benefits from "@/components/Benefits.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Hero,
    CasasContainer,
    Benefits,
  },
};
</script>

<style scoped>
header {
  background-image: url("../assets/img/hero1.jpg");
  height: 720px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

header .overlay {
  background-color: rgba(255, 255, 255, 0.3);
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}

header .container-header {
  display: flex;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  flex-direction: column;
}
main .container {
  width: 100%;
}
.container-section {
  width: 90%;
  max-width: 1200px;
  margin: 40px auto;
}
</style>
