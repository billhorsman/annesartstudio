<template>
  <footer class="flex justify-between items-center px-5">
    &copy; Anne Elsom {{ year }}
    <nav class="flex">
      <a href="mailto:hi@annesart.studio" class="mail">
        <i class="far fa-fw fa-envelope" />
        <span class="hidden lg:inline-block">hi@annesart.studio</span>
      </a>
      <a href="https://twitter.com/annesartstudio" class="twitter">
        <i class="fab fa-fw fa-twitter" />
        <span class="hidden lg:inline-block">@annesartstudio</span>
      </a>
      <a href="https://www.instagram.com/annesartstudio" class="instagram">
        <i class="fab fa-fw fa-instagram" />
        <span class="hidden lg:inline-block">@annesartstudio</span>
      </a>
      <a href="https://www.facebook.com/AnnesArt.studio/" class="facebook">
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
  @apply p-2;
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
