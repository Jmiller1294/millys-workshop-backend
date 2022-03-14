const express = require('express');
const app = express();
const morgan = require('morgan');
const port = 8000;

//middleware

//logs middleware
app.use(morgan('combined'));
//json middleware
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(port, () => console.log(`listening on port ${port}`));

module.exports = app;