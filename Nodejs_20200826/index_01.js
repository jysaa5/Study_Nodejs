const fs = require('fs')

// 아래와 같이 하면 파일을 다 읽지 않고 console.log(file) 결과를 출력함.
const file = fs.readFile('./test.txt', 'utf8'/*, callback*/);
// readFile은 3번째 인자로 callback 함수 받고 이것은 파일을 읽고 나서 callback 함수 호출.
// worker가 callback 함수를 호출해서 파일을 다 읽었다는 것을 event loop에게 알린다.

// undefine로 결과 출력
console.log(file);