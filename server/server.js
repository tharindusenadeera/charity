const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = require('./server/routes/app');
const app = require('./server/routes/index');

//var port = 3000;
const app = express();
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(express.static(path.join(__dirname, 'src'))); // Point static path to src
 
app.use('/api', app); // Set our app routes 
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/index.html'));
}); //Catch all other routes and return the index file
 
app.use('/',index);
app.use('/api',app);

const port = process.env.PORT || '3000';  //port setting
app.set('port', port);
app.listen(port, ()=> console.log(`Listening at localhost:${port}`));