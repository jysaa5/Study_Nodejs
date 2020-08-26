// express 모듈 가져오기: 서드 파티 모듈이므로 npm으로 따로 설치해야 한다.
const express = require('express')
// express함수를 실행하면 어플리케이션 생성 = app
const app = express()

// callback 함수로 console.log('running')
// cmd창에 running이 나오면 listen 함수가 실행 되고 실행이 완료되어서 callback 함수가 호출됨.
app.listen((3000), () => console.log('running'))