var express = require('express');

var app = express();
//Respond with "hello world" for requests that hit our root "/"
app.get('/', (req, res) => {
 res.send('Hello from node');
});
//listen to port 3000 by default
app.listen(3000);
