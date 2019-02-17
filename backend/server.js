// grab the packages we need
var express = require('express');
const bodyParser = require('body-parser')
var app = express();
var cors = require('cors')
var path = require('path')
var port = process.env.PORT || 8080;

// routes will go here

// start the server
app.listen(port);
app.use(bodyParser.json());
console.log('Server started! At http://localhost:' + port);


app.use(cors());

app.get('/api/allusers', function(req, res) {
    const fs = require('fs');

fs.readFile('db/users.json', (err, data) => {  
    if (err) throw err;
    let users = JSON.parse(data);
    res.send(users)
});
  
    // res.send(user_id + ' ' + token + ' ' + geo);
  });

  app.get('/api/allorganization', function(req, res) {
    const fs = require('fs');

fs.readFile('db/organization.json', (err, data) => {  
    if (err) throw err;
    let organization = JSON.parse(data);
    res.send(organization)
});
  
    // res.send(user_id + ' ' + token + ' ' + geo);
  });
  // POST http://localhost:8080/api/users
// parameters sent with 
app.post('/registration', function(req, res) {

    // var user_id = req.body.id;
    // var token = req.body.token;
    // var geo = req.body.geo;
    


    // res.send(user_id + ' ' + token + ' ' + geo);
});


