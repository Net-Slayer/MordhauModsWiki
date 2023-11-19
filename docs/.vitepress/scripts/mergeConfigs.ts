import mergeYamlFiles from './yamlMergeUtils'
import * as fs from 'fs'
import * as path from 'path';
import * as yaml from 'js-yaml'

export default function mergeConfigs(fileNames: string[]): void {
  console.log("Searching config files...")

  // Get the root directory of your project
  const baseDir = path.resolve(__dirname, '../../..')
  console.log("Project Folder found: ", baseDir)
  const adminConfigDir = path.join(baseDir, '/docs/public/admin')
  console.log("Admin Config Folder found: ", adminConfigDir)
  
  console.log("Checking file paths...")
  
  const filePaths = fileNames.map(fileName => path.join(adminConfigDir, fileName))
  console.log("File paths used: ", filePaths)
  
  console.log("Merging data...")
  const mergedData = mergeYamlFiles(filePaths)
  // Convert the merged data to YAML format and write out
  const mergedDataYaml = yaml.dump(mergedData)
  console.log(mergedData)
  
  console.log("Writing data to file...")
  fs.writeFileSync(path.join(adminConfigDir, '/merged.yml'), mergedDataYaml)
	
  
}
