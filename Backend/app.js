const express = require("express");
const ErrorHandler = require('./middleware/error.js');
const cookieParser = require("cookie-parser"); 
const bodyParser = require("body-parser"); 
const cors= require("cors");


const app = express()


app.use(bodyParser.json({ limit: '50mb' }));
app.use(cookieParser()); 

app.use(cors({
    origin: 'http://localhost:3000', // Update this to match your frontend URL
    credentials: true
  }));



app.get('/', (req, res) => {
    res.send('Hello World!');
  });


const user = require("./controller/user");
const order = require("./controller/order");
  app.use("/api/v2/user",user)
  app.use("/api/v2/order",order)
  
// Error handling middleware
app.use(ErrorHandler); 

// Export the app
module.exports = app;