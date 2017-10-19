var express = require("express");
//var app = express();
var bodyParser = require("body-parser");
var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'charity_project'
});

connection.connect(function(err){
    if(!err) {
        console.log("Database is connected ... nn");    
    } else {
        console.log("Error connecting database ... nn");    
    }
});

/* connection.query('SELECT * from registration', function(err, rows, fields) {
  if (!err)
    console.log('The solution is: ', rows);
  else
    console.log('Error while performing Query.');
}); */



app.post('/api/app', function(req, res, next){
    var cope = req.body.params;
    var query = connection.query('insert into cope set ?', cope, function(err, result) {
      if (err) {
        console.error(err);
        return res.send(err);
      } else {
        return res.send('Ok');
      }
 });
});


 app.listen(8080);