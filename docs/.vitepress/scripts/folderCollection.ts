import * as fs from 'fs';
import * as path from 'path';
import * as yaml from 'js-yaml';

export default function generateCollections() {
 // Define the root directory
 const rootDir = './docs';

 // Define the directories to ignore
 const ignoreDirs = ['.vitepress', 'public'];

 // Function to scan the directory
 function scanDir(dir: string): string[] {
 const files = fs.readdirSync(dir);
 return files.map((file : string) => path.join(dir, file))
            .filter(file => !ignoreDirs.includes(path.basename(file)));
 }

 // Function to scan the subdirectories
 function scanSubDirs(dir: string): string[] {
 const files = scanDir(dir);
 const subDirs = files.filter(file => fs.statSync(file).isDirectory());
 return subDirs.flatMap((subDir: string) => scanDir(subDir));
 }

 // Get the paths of all directories in the root directory and its subdirectories
 const allDirs = scanSubDirs(rootDir);

 // Create the collections for Decap CMS
 const collections = allDirs.map(dir => ({
 name: path.basename(dir),
 label: 'Path',
 files: [dir],
 subCollections: allDirs.filter(subDir => subDir.startsWith(dir)).map(subDir => ({
  name: path.basename(subDir),
  label: 'Path',
  files: [subDir],
 })),
 }));

 // Write the collections to a YAML file
 const yamlData = yaml.dump({ collections });
 fs.writeFileSync('test.yml', yamlData);
 console.log(yamlData);
 console.log('test.yaml saved');
}