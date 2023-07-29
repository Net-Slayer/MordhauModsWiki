import re
import os


def remove_duplicate_front_matter_blocks(file_path):
    # Read the content of the file
    with open(file_path, 'r') as f:
        content = f.read()

    # Regular expression to find front matter blocks
    front_matter_pattern = r'^---\n(.*?)\n---\n'
    front_matter_blocks = re.findall(front_matter_pattern, content,
                                     re.DOTALL | re.MULTILINE)

    # Keep only the first occurrence of each front matter block
    unique_front_matter = []
    for block in front_matter_blocks:
        if block not in unique_front_matter:
            unique_front_matter.append(block)

    # Replace the original front matter blocks with the unique ones
    for block in front_matter_blocks:
        content = content.replace(block, '', 1)

    # Remove any leftover empty lines (e.g., `---`)
    content = re.sub(r'^---\n', '', content, flags=re.MULTILINE)

    # Rewrite the file with the updated content
    with open(file_path, 'w') as f:
        f.write(content)


def process_folder(folder_path):
    # Loop through all the items in the folder
    for root, dirs, files in os.walk(folder_path):
        for filename in files:
            file_path = os.path.join(root, filename)
            # Check if the file is a Markdown file (.md)
            if file_path.lower().endswith(".md"):
                remove_duplicate_front_matter_blocks(file_path)
                print(
                    f"Duplicate front matter blocks removed from {file_path}")


if __name__ == "__main__":
    # Provide the path to your folder containing .md files here
    folder_path = "content/docs"

    if os.path.isdir(folder_path):
        process_folder(folder_path)
    else:
        print(f"Error: Folder not found at {folder_path}")
