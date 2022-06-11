const express = require('express');
const app = express();
const convert = require('../backend/Routes/convert');

// configuration
app.use(express.static(__dirname + '/public'));                
app.use('/public/uploads',express.static(__dirname + '/public/uploads'));       

app.use('/', convert);

app.listen(3000)