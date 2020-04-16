const request = require('request-promise');
const express = require('express')
const app = express()

app.use(express.json())
app.post('/form', (req, res) => {
    const name = req.body.name
})
const argv = require('yargs').argv;

let apiKey = '507363c4cf1a1bc71398764f11c934a3';
let city = argv.c || 'portland';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`


app.get('/', (req, res) => {
    request(url, function (err, response) {
        if (err) {
            console.log('error:', err);
        } else {
            let weather = JSON.parse(response.body)
            let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
            res.send(message);
        }
    });
    
})



let url1 = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=7ddaca90a2b54d218c5b95ce74a38533';
app.get('/data',(req,res) => {
    request(url1, function (err, response) {
        if (err) {
            console.log('error:', err);
        } else {
            res.send(response);
        }
    });

});



app.listen(8081, () => {
    console.log('Hello world')
})