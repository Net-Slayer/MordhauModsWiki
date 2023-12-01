import matter from 'gray-matter';

const updateFrontmatter = (
  fileContent: string,
  frontmatterKey: string,
  frontmatterValue: any,
  overwrite: boolean = false
): {
  frontmatter: Record<string, any>;
  updatedContent: string } => {

  const { data: frontmatter, content } = matter(fileContent);

  if (!frontmatter[frontmatterKey] || overwrite) {
    const updatedFrontmatter = { ...frontmatter, [frontmatterKey]: frontmatterValue };
    const updatedContent = matter.stringify(content, updatedFrontmatter);
    return { frontmatter: updatedFrontmatter, updatedContent };
  }

  return { frontmatter, updatedContent: fileContent };
};

export default updateFrontmatter
