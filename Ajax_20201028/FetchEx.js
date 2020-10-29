const fetch = require('node-fetch');

// GET
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(res => {
    // response 처리
    console.log(res)
    // 응답을 JSON 형태로 파싱
    return res.json();
  })
  .then(data => {
    // json 출력
    console.log('data>>>>>>>>>>',data)
  })
  .catch(err => {
    // error 처리
    console.log('Fetch Error', err)
  });

// POST
  fetch('https://jsonplaceholder.typicode.com/todos/', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    userId: 1,
    id: 101,
    title: 'test content',
    completed: false
    })
  })
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data)
  });