import os
import re

rootdir = r'content/docs'  # provide the path to your docs folder

# Regular expression to match the YAML frontmatter block
frontmatter_regex = re.compile(r'^---.*?---\s*$', re.DOTALL)

for foldername, subfolders, filenames in os.walk(rootdir):
    for filename in filenames:
        if filename.endswith('.md'):
            filepath = os.path.join(foldername, filename)
            try:
                with open(filepath, 'r+', encoding='utf8') as file:
                    content = file.read()

                    existing_frontmatter_blocks = frontmatter_regex.findall(
                        content)
                    if not existing_frontmatter_blocks:  # no frontmatter found, add new one
                        # move the file cursor to beginning of file
                        file.seek(0)
                        file.write('---\n')
                        file.write(
                            'title: ' + filename[:-3] +
                            '\n')  # Remove '.md' extension from the file name
                        file.write('---\n\n')
                        file.write(content)
                    elif len(
                            existing_frontmatter_blocks
                    ) > 1:  # multiple frontmatter found, remove duplicates
                        # move the file cursor to beginning of file
                        file.seek(0)
                        # replace multiple frontmatter blocks with the first one
                        new_content = frontmatter_regex.sub(
                            existing_frontmatter_blocks[0], content,
                            len(existing_frontmatter_blocks) - 1)
                        file.write(new_content)
            except UnicodeDecodeError:
                print(f'Error decoding {filepath}, skipped the file.')
