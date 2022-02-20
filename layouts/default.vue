<template>
  <div class="flex flex-col justify-between h-screen">
    <page-header />
    <nuxt />
    <page-footer />
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Overlock:400,700|Ubuntu+Mono');
html {
  background: #f6f3f0;
  font-family: 'Overlock', Arial, sans-serif;
  font-size: 18px;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
