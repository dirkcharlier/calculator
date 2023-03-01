const express = require('express');
const bodyParser = require ('body-parser');
const app = express();

app.use(express.urlencoded({extended:true}));

app.listen(process.env.PORT || 3000,function(){
    console.log("Server started on port: "+ process.env.PORT);
});

app.get("/", function (req, res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
    var number1=Number(req.body.num1);
    var number2=Number(req.body.num2);
    var result=number1+number2;
    res.send("the result is: " + result);

});



/* 
const express = require('express');
const bodyParser = require ('body-parser');
const app = express();

app.use(express.urlencoded({extended:true}));

app.listen(3000,function(){
    console.log("Server started on port 3001");
});

app.get("/", function (req, res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
    var number1=Number(req.body.num1);
    var number2=Number(req.body.num2);
    var result=number1+number2;
    res.send("the result is: " + result);

});

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator</title>
</head>
<body>
    <h1>Calculator</h1>
    <form action="/" method="post">
        <input type="text" name="num1" placeholder="First Number">
        <input type="text" name="num2" placeholder="Second Number">
        <button type="submit" name="submit">Calculate</button>
    </form>
</body>
</html> 
*/