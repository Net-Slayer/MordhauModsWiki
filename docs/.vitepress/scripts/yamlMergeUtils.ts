import * as fs from 'fs'
// @ts-ignore
import * as yaml from 'js-yaml'

export default function mergeYamlFiles(files: string[]): any {
  let mergedData = {};

  for (const file of files) {
    const data = yaml.load(fs.readFileSync(file, 'utf8'));
    mergedData = { ...mergedData, ...data };
  }

  return mergedData
}