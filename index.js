const express = require('express');
const app = express();
const port=9000;


app.get('/sendmail',(req,res)=>{
    
    res.send("hai welcome to home directory");
    var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mukkapatigopi7@gmail.com',
    pass: 'computers567585'
  }
});
var from_name="mukkapatigopi7@gmail.com";
//var from_name="mukkapatigopi7@gmail.com";
var to_name="guntukujayanth999@gmail.com";
//var to_name=document.getElementById("name");
var order_name="Table book in NewYork city , malena hotel."
var order_id="10012"
var mailOptions = {
  from: from_name,
  to: to_name,
  subject: 'Order Summery From: Book YOUR spacE',
  text: "order bookes successfully",
  html: `<h1 style='color:green'> Order Booked Successfully</h1>
         <h3 style='color:brown'>Order details :${order_name} ,Order Id:${order_id}
         <h2 style='color:gree'>Thank You ! for ordering !</h3>` 
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
     
    console.log('Email sent: ' + info.response + `document.getElementById("name");`);
    res.send(`info.html`)
    
  }
})
})
app.listen(port,()=>{
    console.log(`server started on port ${port}`);
})
