const fs = require('fs');
const path = require('path');

// file paths
const base_dir = __dirname;
const file_path = path.join(base_dir, 'dummy.txt');
const file2_path = path.join(base_dir, 'dummy2.txt');
console.log(base_dir);

// read files synchronously
var content = fs.readFileSync(file_path, 'utf-8');
console.log(content);

// writing a file synchronously - overwrites previous file
var result = fs.writeFileSync(file2_path, content);
console.log('printed');

// appending mode 
fs.writeFileSync(file2_path, "\n" + content, { flag: 'a' })