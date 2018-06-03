<template>
  <section class="container">
    <div>
      <h1 class="title">
        Anne's Art Studio
      </h1>
      <h2 class="subtitle">
        Print <span>&amp;</span> Glass
      </h2>
      <p>
        <a href="mailto:hi@annesart.studio" class="mail">
          <i class="far fa-envelope"/>
          hi@annesart.studio
        </a>
      </p>
    </div>
  </section>
</template>

<script>

export default {
  components: {
  }
}
</script>

<style lang="scss">
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

h1 {
  font-size: 3rem;
  font-weight: 600;
  padding: 0 1rem;
}
h2 {
  font-size: 3rem;
  font-weight: 100;
  padding: 0 1rem;
  text-transform: uppercase;
  span {
    font-weight: normal;
    opacity: .4;
    vertical-align: top;
  }
}
@media (max-width: 550px) {
  h1 {
    font-size: 1.8rem;
  }
  h2 {
    font-size: 1.8rem;
  }
}

.mail {
  border-radius: .5rem;
  color: #eee;
  display: inline-block;
  margin-top: 2rem;
  padding: 1rem;
  text-decoration: none;
  transition: all .3s;
  i {
    margin-right: .5rem;
  }
  &:hover {
    background: #222;
    color: white;
  }
}
</style>
