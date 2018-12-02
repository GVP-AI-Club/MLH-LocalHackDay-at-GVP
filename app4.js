let request = require('request');
const argv = require('yargs').argv;
let apiKey = 'mpwqF1qpTUCPsh1g1S3bWYBV1MwqG3OK';
let lat = argv.c || 39.95;
let url = `http://www.mapquestapi.com/traffic/v2/incidents?key=mpwqF1qpTUCPsh1g1S3bWYBV1MwqG3OK&boundingBox=${lat},-118.25,40.52,-114.71&filters=construction`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    let weather = JSON.parse(body)
    let i=0;
    let c=0;
    console.log(`${weather.construction}`.length)
  }
  
});