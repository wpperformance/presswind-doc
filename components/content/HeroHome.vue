<script setup lang="ts">
defineProps<{
  cta: string[]
  secondary: string[]
}>()

const { data: repoInfos, pending: repoPending } = useAsyncData(
  'repoInfos',
  async () => {
    const response: { stargazers_count: number } = await $fetch(
      'https://api.github.com/repos/wpperformance/press-wind',
    )
    return response
  },
)

const { data: tagInfos, pending: tagPending } = useAsyncData(
  'tagInfos',
  async () => {
    const response: { name: string; zipball_url: string }[] = await $fetch(
      'https://api.github.com/repos/wpperformance/press-wind/tags',
    )
    return response
  },
)
</script>

<template>
  <div class="hero-home">
    <h1 v-if="$slots.title" class="title">
      <ContentSlot :use="$slots.title" unwrap="p" />
    </h1>
    <h2 v-if="$slots.subtitle" class="subtitle">
      <ContentSlot :use="$slots.subtitle" unwrap="p" />
    </h2>
    <div class="action">
      <ButtonLink
        v-if="cta"
        class="cta"
        bold
        size="large"
        :href="(cta[1] as any)"
      >
        {{ cta[0] }}
      </ButtonLink>
      <a v-if="secondary" :href="(secondary[1] as any)" class="secondary">
        {{ secondary[0] }}
      </a>
    </div>
    <div class="githubInfo">
      <div v-if="!repoPending && repoInfos">
        <Icon name="mdi:star" size="24" />
        {{ repoInfos.stargazers_count }}
      </div>
      <div v-if="!tagPending && tagInfos">
        <a :href="tagInfos[0]?.zipball_url" target="_blank">
          <Icon name="mdi:download-box" size="24" />
          Download the latest version {{ tagInfos[0]?.name }}
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="ts">
css({
    '.hero-home': {
        padding: '{space.20} 0',
        textAlign: 'center'
    },
    '.title': {
        fontSize: 'clamp(4rem, 8vw, 5.75rem)',
        color: 'transparent',
        backgroundClip: 'text',
        backgroundImage: 'linear-gradient(to right, #bd34fe, #41d1ff)',
        fontWeight: 'bold'
    },
    '.subtitle': {
        fontSize: 'clamp(3rem, 6vw, 4.2rem)',
        color: '{colors.black}',
        lineHeight: 'clamp(3rem, 7vw, 3.9rem)',
        fontWeight: 'bold',
        maxWidth: '80%',
        margin: '0 auto',
        '@dark': {
            color: '{colors.gray.300}',
        }
    },
    '.action': {
        padding: '{space.20} 0',
    },
    '.cta': {
        marginRight: '{space.4}'
    },
    '.githubInfo': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'column',
        '@lg': {
            flexDirection: 'row',
        }
    },
    '.githubInfo > div': {
        display: 'flex',
        alignItems: 'center',
        border: '1px {colors.gray.600} solid',
        margin: '{space.2} auto',
        padding: '{space.1} {space.2}',
        borderRadius: '{space.2}',
        backgroundColor: '{colors.gray.100}',
        fontSize: '{text.lg.fontSize}',
        whiteSpace: 'nowrap',
        '@dark': {
            border: '1px {colors.gray.400} solid',
            color: '{colors.gray.300}',
            backgroundColor: '{colors.gray.800}',
        },
        '@lg': {
            margin: '0 {space.2}',
        },
    },
    '.githubInfo > div a': {
        borderRadius: '{space.1-5}',
        'display': 'block',
        padding: '{space.1} {space.2}',
        '&:hover': {
            backgroundColor: '{colors.gray.200}',
            '@dark': {
                backgroundColor: '{colors.gray.600}',
            }
        },
    },
    '.githubInfo > div:last-child': {
        padding: '0'
    },
    '.githubInfo > div:first-child svg': {
        color: '{colors.yellow.500}',
        marginRight: '{space.1}'
    }
});
</style>
