require('dotenv').config()
const express = require('express')
const app = express()
const routes = require('./routes/loginRoute.js')
const port = 3030;
const connectDB = require('./database/database.js')
const cors = require('cors')

app.use(express.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/',routes)
const start = async() => {
  try {
    await connectDB()
    app.listen(port , console.log('server is connceted'))
  } catch (error) {
    console.log(error)
  }
}

start()