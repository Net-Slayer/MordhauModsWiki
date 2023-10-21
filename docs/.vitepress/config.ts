import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar'


// https://vitepress.dev/reference/site-config
export default ({
  title: "Mordhau Mods Wiki",
  description: "A community modding wiki for mordhau",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: 'modding/introduction/mordhau' },
      { text: 'Portal', link: 'admin/' }
    ],
	editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Net-Slayer/MordhauModsWiki' }
    ],
	lastUpdated: 'Last Updated',
	search: {
		provider: 'local'
	},
    sidebar: generateSidebar({
		documentRootPath: '/docs',
		collapseDepth: 2,
		hyphenToSpace: true,
		capitalizeFirst: true,
    excludeFiles: ["README.md", "SUMMARY.md"],
		manualSortFileNameByPriority: [
			"introduction",
			"getting-started",
			"maps",
			"gamemodes",
			"custom-content",
			"advanced-topics",
			"community-resources"
		]
		}),
  }

})
