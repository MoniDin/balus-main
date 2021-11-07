const express = require('express')
//const fs = require('fs')
const app = express()
const routes = require('./routes.js')
const PORT = process.env.PORT || 8000
//var https = require('https'); // usually at top of file
//var options = {
//key: fs.readFileSync(__dirname + '/ssl/meadowlark.pem'),
//cert: fs.readFileSync(__dirname + '/ssl/meadowlark.crt')
//};

const path = require('path');
app.use(express.json())

app.use(express.static(path.join(__dirname , 'build')))

app.use(express.urlencoded())
 
app.use(routes)

//https.createServer(options, app).listen(app.get('port'), function(){
//    console.log('Express started in ' + app.get('env') +
//    ' mode on port ' + app.get('port') + '.');
//    });
app.listen(PORT)
console.log('http://localhost:' + PORT)