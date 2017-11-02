var express = require('express');
var router = express.Router();

 app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
}); 

router.get('/', function(request, response) {
    response.render('index.html');
});

module.exports = router;