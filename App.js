const express = require('express');
const app = express();

// public folder
app.use(express.static(__dirname + '/views'));

// set the view engine to ejs
app.set('view engine', 'ejs');

app.get('/', function(req, res) {

    res.render('pages/index', {

    });
});

app.listen(3000);