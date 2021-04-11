// Path Module
const path = require('path')
console.log(path.sep); // separator property
const filepath = path.join('/path','subpath','text.txt')
console.log(filepath);
const base = path.basename(filepath)
console.log(base);
// absolute path path.resolve
const absolute = path.resolve(__dirname, 'path','subpath','text.txt')
console.log(absolute);
