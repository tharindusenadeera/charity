var mysql = require('mysql');
/* var Schema= mysql.Schema;

var CharitySchema = new Schema({
    fname   : String,
    lname   : String,
    age     : String,
    address : String,
    city    : String
});

var Model = mysql.Model('task',CharitySchema);

module.exports = Model; */

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

module.exports.addTask = function(tasks, callback) {
	connection.query("INSERT INTO registration SET ?", tasks, callback);
}