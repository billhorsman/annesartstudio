<template>
  <section class="container">
    <div>
      <h1 class="title">
        Anne's Art Studio
      </h1>
      <h2 class="subtitle">
        Print <span>&amp;</span> Glass
      </h2>
      <ul>
        <li>
          <a href="mailto:hi@annesart.studio" class="mail">
            <i class="far fa-envelope"/>
            hi@annesart.studio
          </a>
        </li>
        <li>
          <a href="https://twitter.com/annesartstudio" class="twitter">
            <i class="fab fa-twitter"/>
            @annesartstudio
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/annesartstudio" class="instagram">
            <i class="fab fa-instagram"/>
            @annesartstudio
          </a>
        </li>
      </ul>
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

ul {
  margin: 2rem 0 0;
  padding: 0;
  > li {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  a {
    border-radius: .5rem;
    color: #eee;
    display: inline-block;
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
    &.twitter {
      i {
        color: #4C9FEC;
      }
    }
    &.instagram {
      i {
        color: #ED4A55;
      }
    }
  }
}
</style>
