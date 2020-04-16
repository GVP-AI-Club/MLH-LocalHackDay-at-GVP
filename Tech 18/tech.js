const request = require('request-promise');
const express = require('express');
const app = express()

app.use(express.json())


let url1 = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=7ddaca90a2b54d218c5b95ce74a38533';
const options =  {
    method: 'GET',
    uri: url1
}

request(options)
.then((res) =>{
    // var count = Object.keys(res).length;
    // console.log(res.body)
    // for (var i=0;i<count;i++){
    //     console.log(res["articles"]);
    // }
   console.log(JSON.stringify(res,4))
})
.catch((err) => {
    console.log(err);
});

app.listen(8081, () => {
    // console.log('Hello world')
})