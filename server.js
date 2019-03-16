var express = require('express');
var app = express()
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Define a port to listen for incoming requests
var PORT = process.env.PORT || 8080;

// app.get('/', function (req, res) {
//     res.render('index');
// });

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var routes =  require("./controllers/burgers_controller.js");

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
    console.log(`Listening on port: ${PORT}`)
})
