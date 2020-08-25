// http 모듈: 노드에서 기본적으로 제공해줌
const http = require('http');

// 내 컴퓨터 IP: hostname
const hostname = '127.0.0.1';
// 어떤 포트로 띄울 건지
// 보통 http 포트는 80이다
const port = 3000;

// http.createServer으로 server 객체 생성
// 서버가 다 생성되면 callback 함수로 화살표 다음의 명령어에 따라 동작 한다.
// req: 요청 객체, res: 응답 객체
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  // end: 응답을 이것으로 끝내겠다는 의미
  // 문자열로 주면 응답 body에 포함되어서 응답이 된다.
  res.end('Hello World!\n');
});

// listen 함수: 서버를 요청 대기 상태로 만든다.
// 클라이언트로 부터 요청을 받을 상태가 되었다는 의미.
// 비동기로 처리 된다.
// 세번째 인자는 함수를 넘겨주었다.
// => : 화살표 함수 (ES6)
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});