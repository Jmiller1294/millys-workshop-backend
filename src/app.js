const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const port = 8000;
const api = require('./routes/api');

//--middleware--

//cors middleware
app.use(cors({
  origin: 'http://localhost:3000'
}));

//logs middleware
app.use(morgan('combined'));

//json middleware
app.use(express.json());

//versioning middleware
app.use('/v1', api);

app.get('/', (req, res) => {
  res.send('Hello World!');
})

module.exports = app;