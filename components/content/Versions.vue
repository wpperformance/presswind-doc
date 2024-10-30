<script setup lang="ts">
const { data, pending } = useAsyncData('lastReleases', async () => {
  const response: {
    body: string
    html_url: string
    tag_name: string
    published_at: string
  }[] = await $fetch(
    'https://api.github.com/repos/wpperformance/press-wind/releases',
  )
  return response
})
</script>

<template>
  <ul>
    <li v-for="release of data" :key="release.tag_name">
      <h2>
        <a :href="release.html_url">{{ release.tag_name }}</a>
      </h2>
      <span>{{ release.published_at }}</span>
      <div v-html="release.body" />
      <a :href="release.html_url">See more</a>
    </li>
  </ul>
</template>

<style scoped lang="ts">
css({
    'li': {
        textAlign: 'left',
        margin: '2rem 0'
    },
    'h2': {
        display: 'flex',
        fontSize: '2rem',
        textAlign: 'center'
    },
    'span': {
        color: '{color.gray.500}',
        fontSize: '0.9rem'
    },
    'div': {
        margin: '1rem 0'
    },
    'li > a:last-child': {
        textDecoration: 'underline'
    }
})
</style>
