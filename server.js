var express    = require('express');
var morgan     = require('morgan');
var bodyParser = require('body-parser');
var mysql      = require('mysql');
var path       = require('path');

var mainRouter = require('./routes/index');
var apiRouter = require('./routes/api');


var app = express();
app.use(morgan('dev'));






app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((express.static(path.join(__dirname, 'src'))));

app.use('/', mainRouter);
app.use('/api', apiRouter);


port = process.env.PORT || 8000;

app.listen(port, function() {
	console.log("listening to port " + port);
})
