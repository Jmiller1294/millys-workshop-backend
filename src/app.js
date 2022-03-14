const express = require('express');
const app = express();
const morgan = require('morgan');
const port = 8000;
const api = require('./routes/api');

//middleware

//logs middleware
app.use(morgan('combined'));

//json middleware
app.use(express.json());

//versioning middleware
app.use('/v1', api);

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(port, () => console.log(`listening on port ${port}`));

module.exports = app;