var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'youremail@gmail.com',
    pass: 'yourpassword'
  }
});
var from_name="mukkapatigopi7@gmail.com";
//var to_name=document.getElementById("name");
var to_name=document.getElementById("");
var mailOptions = {
  from: from_name,
  to: to_name,
  subject: 'Order Summery',
  text: <html><h1>Order Booked</h1>
          </html> 
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
})