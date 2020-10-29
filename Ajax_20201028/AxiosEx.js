const axios = require('axios');

// GET
axios({
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/todos/1',
    responseType: 'stream'
})
.then(function(res) {
    console.log(res);
    console.log('data>>>>>>>>>>>', res.data);
    console.log('status>>>>>>>>>', res.status);
    console.log('statusText>>>>>', res.statusText);
    console.log('headers>>>>>>>>', res.headers);
    console.log('config>>>>>>>>>', res.config);
})
.catch(function(err){
    console.log(err);
});

// GET
axios.get('https://jsonplaceholder.typicode.com/todos/1', {})
.then(function(res){
    console.log(res);
    console.log('data>>>>>>>>>>>', res.data);
    console.log('status>>>>>>>>>', res.status);
    console.log('statusText>>>>>', res.statusText);
    console.log('headers>>>>>>>>', res.headers);
    console.log('config>>>>>>>>>', res.config);
})
.catch(function(err){
    console.log(err);
})
.finally(function(){

});

// POST
axios({
    method: 'post',
    url: 'https://jsonplaceholder.typicode.com/todos/',
    data: {
        serId: 1,
        id: 101,
        title: 'test content',
        completed: false
    }
})
.then(function(res){
    console.log(res);
    console.log('data>>>>>>>>>>>', res.data);
    console.log('status>>>>>>>>>', res.status);
    console.log('statusText>>>>>', res.statusText);
    console.log('headers>>>>>>>>', res.headers);
    console.log('config>>>>>>>>>', res.config);
})
.then(function(err){
    console.log(err);
});


// POST
axios.post('https://jsonplaceholder.typicode.com/todos/', {
    serId: 1,
    id: 101,
    title: 'test content',
    completed: false
})
.then(function(res){
    console.log(res);
    console.log('data>>>>>>>>>>>', res.data);
    console.log('status>>>>>>>>>', res.status);
    console.log('statusText>>>>>', res.statusText);
    console.log('headers>>>>>>>>', res.headers);
    console.log('config>>>>>>>>>', res.config);
})
.then(function(err){
    console.log(err);
})