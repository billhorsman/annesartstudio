<template>
  <div class="">
    <section
      class="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 gap-10 sm:p-10"
    >
      <picture
        v-for="artwork in artworks"
        class="bg-white flex flex-cols items-center p-5 sm:rounded-lg shadow-xl"
        :class="artworkClass(artwork)"
      >
        <img :src="`/art/${artwork.file}`" alt="" />
      </picture>
    </section>
    <p class="my-5 text-center">
      Commissions taken &mdash; please
      <a href="mailto:anne@annesart.studio" class="text-blue-600 underline"
        >get in touch</a
      >
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    artworks() {
      return [
        { file: 'penguins.png', colSpan: 2 },
        { file: 'finlay-the-dog.png' },
        { file: 'albus-the-cat.png' },
        { file: 'curlew.png' },
        { file: 'ollie-the-cat.png' },
        { file: 'puffins.png', colSpan: 2 },
        { file: 'antelope.png' },
        { file: 'bustard.png', rowSpan: 2 },
        { file: 'guinea-pigs.png' },
        { file: 'dog.png', rowSpan: 2 },
        { file: 'snipe.png' },
      ]
    },
  },

  methods: {
    artworkClass(artwork) {
      const list = []
      if (artwork.colSpan) {
        list.push(`col-span-${artwork.colSpan}`)
      }
      if (artwork.rowSpan) {
        list.push(`row-span-${artwork.rowSpan}`)
      }
      return list
    },
  },
}
</script>
