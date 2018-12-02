const request = require('request');
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
    var data = request(url, function (err, response) {
        if (err) {
            console.log('error:', error);
        } else {
            console.log(response)
            let weather = JSON.parse(response.body)
            let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
            return response.body;
        }
    });
    res.send(data);
})

app.listen(8081)