<template>
  <div class="title-section">
    <div class="our-houses">
      <h3>Nuestro Trabajo.</h3>
    </div>
    <p>¿Porque trabajar con nosotros?</p>
  </div>
  <div class="option-one">
    <i class="fas fa-route"></i>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores quis,
      facilis et cum assumenda iusto perferendis nobis minus, voluptatum
      laudantium, rem voluptates provident laborum beatae quasi libero?
      Reiciendis, quibusdam aspernatur?
    </p>
  </div>
  <div class="option-two">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, rem
      consequuntur laudantium quam non repellendus animi facilis, veritatis
      molestias voluptatibus quod libero suscipit id dolor delectus aliquid, nam
      quaerat iusto?
    </p>
    <i class="fas fa-users"></i>
  </div>

  <div class="option-three">
    <i class="fas fa-sort-amount-up"></i>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, minima
      aperiam incidunt consequatur rem ducimus itaque reprehenderit
      exercitationem accusamus cumque quis dolor. Aliquam facere expedita odit
      libero ex. Unde, molestias.
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.title-section .our-houses h3 {
  font-size: 16px;
  color: var(--color-naranja);
}
.title-section p {
  font-size: 30px;
  width: 40%;
  margin: 20px 0;
}

.option-one {
  width: 100%;
  height: 150px;
  display: flex;
  font-size: 16px;
  color: gray;
  margin: 50px 0;
}

.option-one i {
  font-size: 50px;
  margin-right: 40px;
}
.option-two {
  width: 100%;
  height: 150px;
  display: flex;
  font-size: 16px;
  color: gray;
  margin: 50px 0;
}

.option-two i {
  font-size: 50px;
  margin-left: 40px;
}
.option-three {
  width: 100%;
  height: 150px;
  display: flex;
  font-size: 16px;
  color: gray;
  margin: 50px 0;
}

.option-three i {
  font-size: 50px;
  margin-right: 40px;
}
</style>
