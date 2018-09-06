/**
 * Web Serivce to get mock data
 */

 var express = require('express');
let app = express();
var port = 8000;

app.get('/', function(req, res){
    res.json({
        "name" : "Aman",
        "lastName"  : "Abhishek"
    })
});

app.get('/hari', function(req, res){
    res.json({
        "name" : "Hari",
        "lastName"  : "Upadhyay"
    })
});

app.listen(port, function(){
    console.log("Listening on " + port);
})