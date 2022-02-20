<template>
  <footer class="flex justify-between items-center px-2 md:px-5">
    <aside class="whitespace-nowrap">&copy; Anne Elsom {{ year }}</aside>
    <nav class="flex">
      <a href="mailto:hi@annesart.studio" class="mail p-1 md:p-2">
        <i class="far fa-fw fa-envelope" />
        <span class="hidden lg:inline-block">hi@annesart.studio</span>
      </a>
      <a href="https://twitter.com/annesartstudio" class="twitter p-1 md:p-2">
        <i class="fab fa-fw fa-twitter" />
        <span class="hidden lg:inline-block">@annesartstudio</span>
      </a>
      <a
        href="https://www.instagram.com/annesartstudio"
        class="instagram p-1 md:p-2"
      >
        <i class="fab fa-fw fa-instagram" />
        <span class="hidden lg:inline-block">@annesartstudio</span>
      </a>
      <a
        href="https://www.facebook.com/AnnesArt.studio/"
        class="facebook p-1 md:p-2"
      >
        <i class="fab fa-fw fa-facebook" />
        <span class="hidden lg:inline-block">AnnesArt.studio</span>
      </a>
    </nav>
  </footer>
</template>
<script>
export default {
  computed: {
    year() {
      return new Date().getFullYear()
    },
  },
}
</script>
<style scoped lang="scss">
a {
  border-radius: 0.5rem;
  display: block;
  text-decoration: none;
  transition: all 0.3s;
  white-space: nowrap;
  i {
    margin-right: 0.5rem;
  }
  &:hover {
    background: #222;
    color: white;
  }
  &.twitter {
    i {
      color: #4c9fec;
    }
  }
  &.instagram {
    i {
      color: #ed4a55;
    }
  }
  &.facebook {
    i {
      color: #4a66ad;
    }
  }
}
</style>
