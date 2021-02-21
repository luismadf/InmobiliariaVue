<template>
  <Navbar />
  <router-view />
  <Footer />
</template>

<script>
import "./assets/css/style.css";
import Footer from "@/components/Footer.vue";
import Navbar from "./components/Navbar";
export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>
