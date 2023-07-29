import os
import re

rootdir = r'/path/to/docs/folder'  # provide the path to your docs folder

# Regular expression to match the YAML frontmatter block
frontmatter_regex = re.compile(r'^---.*?---\s*$', re.DOTALL)

for foldername, subfolders, filenames in os.walk(rootdir):
    for filename in filenames:
        if filename.endswith('.md'):
            filepath = os.path.join(foldername, filename)
            try:
                with open(filepath, 'r+', encoding='utf8') as file:
                    content = file.read()
                    # only write frontmatter if it does not exist
                    if not frontmatter_regex.match(content):
                        # move the file cursor to beginning of file
                        file.seek(0)
                        file.write('---\n')
                        file.write(
                            'title: ' + filename[:-3] +
                            '\n')  # Remove '.md' extension from the file name
                        file.write('---\n\n')
                        file.write(content)
                        print(f'{filepath} succeeded')
            except UnicodeDecodeError:
                print(f'Error decoding {filepath}, skipped the file.')
