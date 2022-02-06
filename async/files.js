const path = require('path')
const fs = require('fs')

const base = __dirname;
const file_ = path.join(base, '/dummy.txt');
const file_1 = path.join(base, '/dummy1.txt');

// var content = fs.readFileSync(file_, (err, result) => {
//  returns buffer instead of content if we dont provide format of conversion - utf-8
var content = fs.readFile(file_, 'utf-8', (err, result) => {
    if (err) {
        console.debug(err);
        return;
    }
    return result;
})

console.log(content)



// 2. handling multiple files one after the other async

content = fs.readFile(file_, 'utf-8', (err, result) => {
    if (err) {
        console.debug(err);
        return;
    }
    var content2 = fs.writeFile(file_1, result, (err1, res1) => {
        if (err1) {
            console.log(err1);
            return err1;
        }
        return res1;
    });
    return result;
})