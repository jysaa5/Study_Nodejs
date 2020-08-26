// express 모듈 가져오기: 서드 파티 모듈이므로 npm으로 따로 설치해야 한다.
const express = require('express')
// express함수를 실행하면 어플리케이션 생성 = app
const app = express()

// 미들웨어는 인터페이스가 3가지로 정해져 있다: request, response, next
// request와 response는 http로 만들었을 때 인터페이스와 거의 같다. (한번 더 추상화 해놓은 것)
// next: 여러 개의 미들웨어가 있을 때, 다음 미들웨어를 실행시켜 주기 위한 callback 함수 이다.
// 미들웨어 안에는 반드시 next() 함수를 호출해야 한다. 이 다음 미들웨어나 어플리케이션의 행동을 실행할 수 있다.
const mw = (req, res, next) => {
    console.log('mw!')
    next()
}

const mw2 = (req, res, next) =>{
    console.log('mw2!')
    next()
}

// use(): 미들웨어를 넣을 수 있다.
// 미들웨어는 순서가 중요하다. 어떤 순서로 하느냐에 따라 서버의 동작이 바뀐다.
//app.use(mw)
//app.use(mw2)

app.use(mw2)
app.use(mw)

// callback 함수로 console.log('running')
// cmd창에 running이 나오면 listen 함수가 실행 되고 실행이 완료되어서 callback 함수가 호출됨.
app.listen(3000, () => console.log('running'))