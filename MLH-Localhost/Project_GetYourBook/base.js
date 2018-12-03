const express = require('express');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 5070;

app.get('/sem6/IP',(req,res) => {
        
        
        
        var tempFile="ip.pdf";
        fs.readFile(tempFile, function (err,data){
        res.contentType("application/pdf");
        //res.sendFile(tempFile);
        res.send(data);
        });

        
        
})

app.get('/sem6/CN',(req,res) => {
        
        
        
    var tempFile="cn.pdf";
    fs.readFile(tempFile, function (err,data){
    res.contentType("application/pdf");
    //res.sendFile(tempFile);
    res.send(data);
    });

    
    
})


app.get('/sem6/CD',(req,res) => {
        
        
        
    var tempFile="cd.pdf";
    fs.readFile(tempFile, function (err,data){
    res.contentType("application/pdf");
    //res.sendFile(tempFile);
    res.send(data);
    });

    
    
})

app.listen(port, () => {
    console.log('Server started on port $(port)');
})