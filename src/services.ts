import { promises as fs } from 'fs';
import { parseDTOString } from './implementation';

export const readFileLines = (path: string) =>
  fs
    .readFile(path, { encoding: 'utf-8' })
    .then(str => str.split('\n').slice(1, -1))
    .then(lines => lines.map(line => parseDTOString(line)));
