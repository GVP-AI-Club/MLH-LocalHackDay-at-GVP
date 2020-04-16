const axios = require('axios');
let request = require('request');
axios.get('/index',function(req,res){
    var lat1=req.getParams(lat1);
    var long1=req.getParams(long1);
    var lat2=req.getParams(lat2);
    var long2=req.getParams(long2);
})

let apiKey = 'mpwqF1qpTUCPsh1g1S3bWYBV1MwqG3OK';
let url=`http://www.mapquestapi.com/traffic/v2/incidents?key=${apiKey}&boundingBox=${lat1},${long1},${lat2},${long2}&filters=construction,incidents`
request(url, function (err, response, body) {
    if(err){
      console.log('error:', error);
    } else {
      let w = JSON.parse(body)
      response.write(`${w.incidents}`.length)
    }
    
  });

