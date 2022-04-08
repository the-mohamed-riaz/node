const { readFile } = require('fs');
const http = require('http');

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf-8', (err, data) => {
            if (err) {
                reject(err);
            }
            resolve(data);
        })
    })
}


const waiter = async() => {
    try {
        const file_ = await getText('./sync/dummy.txt');
        const file_2 = await getText('./sync/dummy2.txt');
        console.log("WAITER: ", file_);
        console.log("WAITER: ", file_2);
    } catch (error) {
        console.error("my errors: \n", error);
    }
};
waiter()
const file_content = getText('./sync/dummy.txt');
console.log(file_content);
console.log("I am executed");
setTimeout(() => console.log("I am from 0th interval"), 0)
setTimeout(() => console.log("I am from interval"), 1000)
setTimeout(() => console.log("CONT FROM TIMEOUT", file_content), 3000)