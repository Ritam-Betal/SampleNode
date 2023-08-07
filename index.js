var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var mongoose = require('mongoose');
mongoose.set('strictQuery', false); // Add this line


require('dotenv').config();

var indexRouter = require('./routes/index');


var app = express();


//Database connect start
mongoose.connect(process.env.DATABASE_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('Database connected');
    })
    .catch((error) => {
        console.log('Error connecting to database',error);
    });

//Database connect end 

app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));


// Get the port number from the .env file
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


app.use('/', indexRouter);

module.exports = app;