// express 모듈 가져오기: 서드 파티 모듈이므로 npm으로 따로 설치해야 한다.
const express = require('express')
// logging 기능 미들웨어
const logger = require('morgan')
// express함수를 실행하면 어플리케이션 생성 = app
const app = express()

// 일반적인 미들웨어
const mw = (req, res, next) => {
    // throw Error('error!')
    next() // 에러 미들웨어를 실행하지 않고 skip한다.
}

// 에러 미들웨어: 항상 실행되지 않는다.
// 미들웨어 수행 도중에 에러가 발생하면 실행된다.
// err: 에러 객체
const errorMw = (err, req, res, next) => {
    console.log(err.message)
}

// 개발환경 로그를 찍을 때: dev
app.use(logger('dev'))
app.use(mw)
app.use(errorMw)

// callback 함수로 console.log('running')
// cmd창에 running이 나오면 listen 함수가 실행 되고 실행이 완료되어서 callback 함수가 호출됨.
app.listen(3000, () => console.log('running'))