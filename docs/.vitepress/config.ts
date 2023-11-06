import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar'


// https://vitepress.dev/reference/site-config
export default ({
  title: "Mordhau Mods Wiki",
  description: "A community modding wiki for mordhau",
  titleTemplate: ':title - Mordhau Mods Wiki',
  appearance: 'dark',
  lastUpdated: true,
  rewrites: { 'admin/': 'admin/index.html' },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/modding/introduction/mordhau' },
      { text: 'Login', link: '/admin/index.html', target: '_self' }
    ],
	editLink: {
      pattern: 'https://github.com/Net-Slayer/MordhauModsWiki/edit/main/docs/:path',
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
		sortMenusByFrontmatterOrder: true,
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
