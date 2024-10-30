<script setup lang="ts">
const brands = [
  {
    src: '/tailwind.webp',
    width: 244,
    height: 173,
    name: 'tailwindCSS',
  },
  {
    src: '/vitejs.webp',
    width: 300,
    height: 300,
    name: 'ViteJS',
  },
  {
    src: '/gutenberg.webp',
    width: 150,
    height: 150,
    name: 'Gutenberg',
  },
]
</script>

<template>
  <div class="brand">
    <div v-for="brand of brands">
      <figure>
        <img
          :src="brand.src"
          :width="brand.width"
          :height="brand.height"
          loading="lazy"
          :alt="brand.name"
        />
        <figcaption style="text-align: center; padding-top: 1rem">
          {{ brand.name }}
        </figcaption>
      </figure>
    </div>
  </div>
</template>

<style scoped lang="ts">
css({
    '.brand': {
        display: 'flex',
        item: 'center',
        margin: '0 auto',
        '@lg': {
            maxWidth: '50rem'
        }
    },
    '.brand > div': {
        flex: 1,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'column'
    },
    '.brand > div > img': {
        maxWidth: '100px',
        width: '100%',
        height: 'auto',
        marginBottom: '1rem',
        '@lg': {
            maxWidth: '130px'
        }
    },
    '.brand > div:last-child > img': {
        maxWidth: '80px',
        width: '100%',
        height: 'auto',
        marginBottom: '1rem',
        '@lg': {
            maxWidth: '105px'
        }
    }
    })
</style>
