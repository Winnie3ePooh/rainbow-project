const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const bodyParser = require('body-parser')

//routes
const api = require('./api/api');
// Run the app by serving the static files
// in the dist directory
app.use(cors());
app.use(express.static(__dirname + '/dist'));
// Start the app by listening on the default
// Heroku port
const forceSSL = function() {
  return function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(
       ['https://', req.get('Host'), req.url].join('')
      );
    }
    next();
  }
}

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/api/v1', api);
//app.use(forceSSL());

// app.get('/*', function(req, res) {
//   res.sendFile(path.join(__dirname + '/dist/index.html'));
// });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
