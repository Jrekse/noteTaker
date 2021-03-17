//defines express
const express = require('express');
const app = express();
const apiroutes = require('./Routes/apiroute')
const htmlroutes = require('./Routes/contentrout')
//defines the port
const PORT = process.env.PORT || 3000;

//Gives the server access to the public folder's static files
app.use(express.static('public'));

//allows the app to use JSON parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//this part is a problem
app.use('/', htmlroutes)
app.use('/api', apiroutes)

//listens for the port
app.listen(PORT, () =>
    console.log(`Listening on Port: ${PORT}`))