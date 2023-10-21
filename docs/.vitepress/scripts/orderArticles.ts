import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

interface SidebarItem {
  text: string;
  link: string;
  order: number;
}

async function getSortedFilesByOrderFrontmatter(): Promise<SidebarItem[]> {
  const directory = path.join(process.cwd(), 'docs');
  const files = fs.readdirSync(directory);
  const sidebarItems: SidebarItem[] = files.map(file => {
    const filePath = path.join(directory, file);
    const fileContent = fs.readFileSync(filepath, 'utf8');
    const frontmatter = matter(filecontent).data as { title: string; order: number };
    return {
      text: frontmatter.title,
      link: `/${file.replace('.md','')}`,
      order: frontmatter.order
    }
  });
  sidebarItems.sort((a, b) => a.order - b.order);
  return sidebarItems;
}

export default getSortedFilesByOrderFrontmatter;
