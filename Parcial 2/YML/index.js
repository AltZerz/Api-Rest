const fs = require('fs');
const yaml = require('yaml');
const path = require('path');

const archivo = fs.readFileSync(path.join(__dirname, "./file.yaml"), 'utf-8');
const estyaml = yaml.parse(archivo);
console.log(estyaml);