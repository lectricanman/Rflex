'use strict';
const express = require('express'),
  path = require('path'),
  logger = require('morgan'),
  bodyParser = require('body-parser');
let app = express();

let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/rflex');

let routes = require('./config/routes');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use(routes);

app.listen(3000);
