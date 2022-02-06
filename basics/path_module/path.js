const path = require('path')
console.log(path.sep);

const root = __dirname;

const file_path = path.join(root, '/basics', '/os_module');
const file_name = __filename;
console.log(file_path, file_name);

console.log(path.basename(file_name));
console.log(path.dirname(file_name));