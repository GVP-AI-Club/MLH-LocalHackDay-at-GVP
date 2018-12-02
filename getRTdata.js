var uH=5;
var uL=3;
var veg='yes';
var fs=require("fs");
var express=require('express');
var app=express();
var bodyparser=require('body-parser');

var data=fs.readFileSync('restaurents.JSON','utf-8');
var words=JSON.parse(data);
for (i in words.restaurents){
    //console.log(words.restaurents);
    if(words.restaurents['i']=="yes" && words.restaurents['i'].rating <= uH && words.restaurents['i'].rating >= uL)
    {
        console.log(words.restaurents['i'].name +" ");
        console.log(words.restaurents['i'].type);
    }
    else{
        console.log("non veg" + words.restaurents[i].name);
    }

}
