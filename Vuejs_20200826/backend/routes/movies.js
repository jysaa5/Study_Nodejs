// 라우터 설정
var express = require('express');
var router = express.Router();
var movies = require('../movies.json');

// get요청이 오면 모든 영화 리스트를 반환
router.get('/', function (req, res, next) {
 res.send(movies)
});

// 영화 상세 페이지를 위한 코드
// get 요청이 오면 특정 id를 가진 영화의 정보를 반환
router.get('/:id', function (req, res, next) {
 var id = parseInt(req.params.id, 10)
 var movie = movies.filter(function (movie) {
 return movie.id === id
 });
 res.send(movie)
});
module.exports = router;