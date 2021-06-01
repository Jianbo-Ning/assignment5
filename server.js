/*******************************
 * Name:Jianbo Ning
 * Email:ningj@oregonstate.edu
********************************/
var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');

const routes = require('./routes');

var app = express();

const hbs = exphbs.create({
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, 'views/layouts'),
  partialsDir: path.join(__dirname, 'views/partials'),

  helpers: {},
});


app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


var port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.static('template'));

app.use('/', routes);

app.get('*', function (req, res) {
  res.render('404', {});
});

app.listen(port, function () {
  console.log('== Server is listening on port', port);
});
