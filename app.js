var express = require("express");
var app = express();


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!");
});

app.get("*", function(req, res){
    res.send("Connected.");
});