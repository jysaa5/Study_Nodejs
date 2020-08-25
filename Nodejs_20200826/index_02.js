
const fs = require('fs')

// 인터페이스: err 객체, file 객체
const callback = (err, file) => {
    console.log(file)
}

fs.readFile('./test.txt', 'utf8', callback);