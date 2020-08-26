// node 기본 모듈: assert
const assert = require('assert')
const should = require('should')
const request = require('supertest')
// 모듈을 불러올 수 있게 되었다.
const app = require('./index')

// Test 코드: Mocha
// describe: 인자가 2개 들어간다. 첫번째는 무엇을 테스트 할지, 두번째는 함수를 넘겨준다.
describe('GET /users', () => {
    // 테스트 코드 작성
    // done: 모카가 넣어주는 인자
    it('배열을 반환한다.', (done) => {
        // 검증하는 작업을 한다.
        // equal: 두 인자가 같지 않으면 예외를 던진다.
        //assert.equal(1, 1)
        //assert.equal(1, 0)
        //(1).should.equal(1)

        // 서버가 실행됨
        request(app)
        .get('/users')
        // 비동기로 동작
        .end((err, res)=>{
            //if(err) throw err
            console.log(res.body)

            // 배열인지 확인
            res.body.should.be.instanceof(Array)
            // 배열은 name 속성을 가지므로 아래와 같이 검증
            res.body.forEach(user => {
                user.should.have.property('name')
            })
            done()
        })

    })

    // 테스트 코드
    it('최대 limit 갯수만큼 응답한다', done =>{
        request(app)
        .get('/users?limit=2')
        .end((err, res)=>{
            //길이가 2이어야 한다.
            res.body.should.have.lengthof(2)
        })
    })
})
