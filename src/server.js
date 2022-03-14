const app = require('./app');
const http = require('http');

const PORT = process.env.PORT || 8000;

//create http server
const server = http.createServer(app);


function startServer() {

  server.listen(PORT, () => {
    console.log(`listening on PORT ${PORT}...`)
  })
}

startServer()
