export default defineAppConfig({
  docus: {
    title: 'Presswind, WordPress Starter Theme TailwindCSS and ViteJS',
    description:
      'Presswind is a WordPress Starter Theme based on TailwindCSS and ViteJS.',
    url: 'https://presswind-doc.wp-performance.com',
    image: '/screenshot.png',
    socials: {
      github: 'wpperformance',
    },
    github: {
      dir: undefined,
      branch: 'main',
      repo: 'press-wind',
      owner: 'wpperformance',
      edit: true,
    },
    header: {
      title: 'PressWind',
      logo: true,
      showLinkIcon: true,
    },
    footer: {
      credits: {
        text: 'wp-performance.com',
        icon: '',
        href: 'https://wp-performance.com',
      },
      icons: [],
    },
  },
})
