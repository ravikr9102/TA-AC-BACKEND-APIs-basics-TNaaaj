var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');


// connect to database
mongoose.connect("mongodb://localhost:27017/bookStoreApi",(err) => {
    console.log(err ? err : "Connected to database" );
});


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const booksRouter = require("./routes/books");
const booksv2Router = require("./routes/bookv2");

var app = express();



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/api/books", booksRouter);
app.use("/api/v2/books", booksv2Router);


module.exports = app;
