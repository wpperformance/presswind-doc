<template>
  <div class="screen-block">
    <div>
      <img :src="(screen[0] as any)" loading="lazy" :alt="screen[1] || ''" />
    </div>
    <div>
      <h2 v-if="$slots.title" class="title">
        <ContentSlot :use="$slots.title" unwrap="p" />
      </h2>
      <ContentSlot :use="$slots.text" />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  screen: string[]
}>()
</script>

<style scoped lang="ts">
css({
    '.screen-block': {
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        margin: '8rem 0',
        '@lg': {
            flexDirection: 'row',
            gap: '4rem',
            margin: '10rem 0'
        }
    },
    'img': {
        borderRadius: '1rem',
        // maxWidth:
        filter: 'drop-shadow(0 0 0.75rem {colors.gray.600})',
        '@dark': {
            filter: 'drop-shadow(0 0 1.25rem {colors.primary.300})',
        }
    },
    '.screen-block > div': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    '.screen-block > div:first-child': {
        minWidth: 'auto',
        '@lg': {
            minWidth: '53%'
        }
    },
    '.screen-block > div:last-child': {
        padding: '1rem'
    },
    'h2': {
        fontSize: 'clamp(2.2rem, 4vw, 2.8rem)',
        fontWeight: 'bold',
        lineHeight: 'clamp(2rem, 4vw, 2.9rem)',
        color: '{colors.primary.500}'
    },
    'p': {
        fontSize: '1.3rem',
    }
})
</style>
