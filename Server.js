var express=require('express');
var nodemailer = require("nodemailer");
var app=express();
var port = process.env.PORT||3000

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'nodemailersri@gmail.com',
    pass: 'password@123'
  }
});


/*------------------Routing Started ------------------------*/

app.get('/',function(req,res){
	res.sendfile('index.html');
});
app.get('/send',function(req,res){
  console.log('req ',req.query);
  var subject='We are So Glad !!';
  var text='Thanks for choosing insource tech solutions. We will get back to you soon.';
	var mailOptions={		
		to : req.query.to,
		subject : subject,
		text : text
	}
	console.log('**123 ',mailOptions);
	transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    
    console.log('Email sent: ' + info.response);

  }
});
});

/*--------------------Routing Over----------------------------*/

app.listen(port,function(){
	console.log("Express Started on Port "+port);
});
