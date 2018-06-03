<template>
  <section class="container">
    <div>
      <h1 class="title">
        Anne's Art Studio
      </h1>
      <h2 class="subtitle">
        Print and Glass
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
  font-weight: normal;
}
h2 {
  font-size: 2.8rem;
  font-weight: 100;
  text-transform: uppercase;
}

.mail {
  border-radius: .5rem;
  color: #eee;
  display: inline-block;
  padding: 1rem;
  text-decoration: none;
  transition: all .3s;
  i {
    transition: all .3s;
  }
  &:hover {
    background: #222;
    color: white;
  }
}
</style>
