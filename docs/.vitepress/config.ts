import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar'


// https://vitepress.dev/reference/site-config
export default ({
  title: "Mordhau Mods Wiki",
  description: "A community modding wiki for mordhau",
    // ssr: {
      // noExternal: ['vitepress-sidebar']

    // },  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/getting-started/installation' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    sidebar: generateSidebar({
		documentRootPath: '/docs',
		collapseDepth: 2,
		hyphenToSpace: true,
		capitalizeFirst: true,
		sortByFileName: [
			"Introduction", 
			"Getting Started"
		]
		}),
  }
})
