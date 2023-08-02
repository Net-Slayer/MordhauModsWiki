import { defineConfig } from 'vitepress'
//import { generateSidebar } from 'vitepress-sidebar'

// https://vitepress.dev/reference/site-config
export default ({
  title: "Mordhau Mods Wiki",
  description: "A community modding wiki for mordhau",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    // sidebar: generateSidebar({
		// documentRootPath: '/docs',
		// collapseDepth: 2,
		// hyphenToSpace: true,
		// capitalizeFirst: true,
		// sortByFileName: [
			// "Introduction", 
			// "Getting Started", 
			// "Maps", 
			// "Gamemodes", 
			// "Custom Content",
			// "Advanced topics",
			// "Community Resources"
		// ]
		// }),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
