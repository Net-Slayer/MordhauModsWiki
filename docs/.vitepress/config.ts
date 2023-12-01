import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar'
import mergeConfigs from './scripts/mergeConfigs'
// import autoIndexDirs from './scripts/processFrontmatter.ts'

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
	logo: '/images/MordhauModsLogo_Small.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Play', link: '/playing/' },
      { text: 'Host', link: '/hosting/' },
      { text: 'Mod', link: '/modding/introduction/mordhau' },
      { text: 'Login', link: '/admin/index.html', target: '_self' }
    ],
	outline: { level: 'deep' },
	footer: {
      message: 'Released under the GNU General Public License v3.0',
      copyright: 'Copyright © 2022-2023 https://github.com/Net-Slayer'
    },
	editLink: {
      pattern: 'https://github.com/Net-Slayer/MordhauModsWiki/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Net-Slayer/MordhauModsWiki' }
    ],
	externalLinkIcon: true,
	lastUpdated: true,
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
  },

  async buildEnd(siteConfig) {
    // Define the file names
    const fileNames = [
      'config_backend.yml',
      'config_cms.yml',
      'config_collections.yml',
      'config_dev.yml'
    ]

    // Call the function and pass the file names
    mergeConfigs(fileNames)
	  // autoIndexDirs('./docs')
  }


})
