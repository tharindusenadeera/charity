var express = require('express');
var router = express.Router();

var task = require('../models/model')
//var Model = require('../models/model.js');

/* app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  }); */


router.get('/', function(req, res) {
    
        user.findAll(function(err, rows, fields) {
            if(err) throw err;
            res.json(rows);
        })
    });

router.post('/addTask', function(request, response) {
   // var task = new Model(request.body);
    var task   = request.body;
    task.save(function(err, resource) {
        if (err) {
            response.send(err).status(501);
        } else {
            response.json(resource).status(201);
        }
    });
}); 


module.exports = router;

