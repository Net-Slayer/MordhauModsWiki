import autoIndexDirs from './docs/.vitepress/scripts/processFrontmatter.ts'

console.log('Updating index.md files');
autoIndexDirs('docs/');
console.log('test complete');
