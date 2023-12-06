import * as fs from 'fs/promises';
import * as path from 'path';
import updateFrontmatter from './frontMatterUtils.ts';

const ignoreDirs = ['.vitepress', 'public', 'typings'];


const formatName = (directoryName: string): string => {
  const formattedName = directoryName
    .replace(/-/g, ' ') // Replace dashes with spaces
    .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize the first letter of each word
  return formattedName;
};

const extractTitle = (content: string): string | null => {
  const match = content.match(/^#\s+(.+)$/m); // Match the first level 1 heading
  return match ? match[1] : null;
};

const autoIndexDirs = async (folderPath: string): Promise<void> => {
  try {
    const files = await fs.readdir(folderPath);

    for (const file of files) {
      const filePath = path.join(folderPath, file);
      const isDirectory = (await fs.stat(filePath)).isDirectory();
      const isMarkdownFile = !isDirectory && filePath.extension
      if (isDirectory && !ignoreDirs.includes(file)) {
        const indexPath = path.join(filePath, 'index.md');
        const hasIndexMd = await fs.access(indexPath).then(() => true).catch(() => false);

        const directoryName = formatName(path.basename(filePath));
        if (hasIndexMd) {
          // Check if index.md has frontmatter
          const fileContent = await fs.readFile(indexPath, 'utf-8');
          let { frontmatter, updatedContent } = updateFrontmatter(fileContent, 'title', directoryName );
          // Update cmsvisible frontmatter
          ({ frontmatter, updatedContent } = updateFrontmatter(updatedContent, 'cmsvisible', false));
          await fs.writeFile(indexPath, updatedContent);

          // Recursively update subdirectories
          await autoIndexDirs(filePath);
        } else {
          // Create index.md with the name of the directory

          const newIndexContent = '---' +
          `\ntitle: ${directoryName}` +
          '\ncmsvisible: false' +
          '\n---';

          await fs.writeFile(indexPath, newIndexContent);
          console.log(`Created ${indexPath} with title: ${directoryName} and cmsvisible: false`);

          // Recursively update subdirectories
          await autoIndexDirs(filePath);
        }

      } else if(path.extname(filePath).toLowerCase() === '.md' && path.basename(filePath) !== 'index.md') {
        if (!ignoreDirs.some((ignoredDir) => filePath.includes(ignoredDir))) {
        // check for non-index
          const fileContent = await fs.readFile(filePath, 'utf-8');
          const newTitle = extractTitle(fileContent) || formatName(path.parse(filePath).name)
          let { frontmatter, updatedContent } = updateFrontmatter(
            fileContent,
             'title',
              newTitle,
              true);
          await fs.writeFile(filePath, updatedContent);
          console.log(`updated ${filePath} title to ${newTitle}`)

        }
      }
    }


  } catch (error) {
    console.error(`Error processing ${folderPath}: ${error.message}`);
  }
};

export default autoIndexDirs;
