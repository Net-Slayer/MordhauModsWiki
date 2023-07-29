import os
import re
import yaml


def update_index_titles(folder_path):
    for root, dirs, files in os.walk(folder_path):
        for filename in files:
            file_path = os.path.join(root, filename)

            # Check if the file is a Markdown file (_index.md)
            if filename.lower() == "_index.md":
                update_index_title(file_path)


def update_index_title(file_path):
    # Read the content of the file
    with open(file_path, 'r') as f:
        content = f.read()

    # Regular expression to find front matter blocks
    front_matter_pattern = r'^---\n(.*?)\n---\n'
    match = re.search(front_matter_pattern, content, re.DOTALL | re.MULTILINE)

    if match:
        front_matter = match.group(1)
        front_matter_data = yaml.safe_load(front_matter)

        # Get the parent folder name
        folder_name = os.path.basename(os.path.dirname(file_path))

        # Update the "title" field in front matter
        front_matter_data['title'] = folder_name

        # Convert front matter data back to YAML
        updated_front_matter = yaml.dump(front_matter_data,
                                         default_flow_style=False)

        # Replace the original front matter with the updated one
        content = content.replace(match.group(),
                                  f'---\n{updated_front_matter}---\n', 1)

        # Rewrite the file with the updated content
        with open(file_path, 'w') as f:
            f.write(content)


if __name__ == "__main__":
    # Provide the path to your folder containing files here
    folder_path = "content/docs"

    if os.path.isdir(folder_path):
        update_index_titles(folder_path)
        print("Index titles updated successfully.")
    else:
        print(f"Error: Folder not found at {folder_path}")
