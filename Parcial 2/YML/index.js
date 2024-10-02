const fs = require('fs');
const yaml = require('yaml');
const path = require('path');

const archivo = fs.readFileSync(path.join(__dirname, "./file.yaml"), 'utf-8');
const estYAML = yaml.parse(archivo);
console.log(estYAML);
console.log(typeof estYAML);
console.table(estYAML);