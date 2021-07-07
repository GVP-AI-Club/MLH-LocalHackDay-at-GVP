const express = require('express'),
      router  = express.Router(),
      parseIt = require('../utils/parseIt'),
      multer  = require('multer'),
      crypto  = require('crypto'),
      mime    = require('mime'),
      upload  = multer({
        storage: multer.diskStorage({
          destination: function (req, file, cb) {
            cb(null, './uploads/')
          },
          filename: function (req, file, cb) {
            crypto.pseudoRandomBytes(16, function (err, raw) {
              cb(null, raw.toString('hex') + Date.now() + '.' + mime.extension(file.mimetype));
            });
          }
        })
      });



/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {title: 'Express'});
});


router.post('/', upload.single('upl'), function (req, res, next) {
  console.log("success");
  //res.render("Complete");
  //reading
  var fs = require('fs');
const dirname='./compiled';
function readFiles(dirname, onFileContent, onError) {
  fs.readdir(dirname, function(err, filenames) {
    if (err) {
      onError(err);
      return;
    }
    filenames.forEach(function(filename) {
      fs.readFile(dirname +"/"+ filename, 'utf-8', function(err, content) {
        if (err) {
          onError(err);
          return;
        }
        onFileContent(filename, content);
      });
    });
  });
}
//storing to obj
var data = {};
readFiles('compiled', function(filename, content) {
  data= JSON.parse(content);
  //console.log(data.name);
  var name=data.name;
  var email=data.email;
  // var objective=data.objective;
  var technology=data.technology;
  var skills=data.skills;
  //writing
  const fs = require('fs');
 fs.writeFile("./new/op", "NAME :"+name+"\n"+"\nE-MAIL: "+email +"\n" + "\nSKILLS:\n" +skills +"\n" +"\nTECHNOLOGIES:\n" +technology, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});


}, function(err) {
  throw err;
});

  console.log(req.file.path);
  parseIt.parseResume(req.file.path, './compiled');
  res.status(204).end();

});




module.exports = router;
