//Getting dotenv
require('dotenv').config()

//Getting required middlewares modules
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')

//Getting express
const express = require('express')
const app = express()

//Getting Routes
const budgetRoutes = require('./routes/budget')

//Getting mongoose and conencting DB
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.DATABASE).then(() => {
      console.log("DB CONNECTED")
  });
}

// Middlewares
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())


//Actual Routes
app.use("/api", budgetRoutes);



// test route
app.get("/test", (req, res) => {
    res.json({
        message: 'I am here'
    })
})


//Creating port and listening to server
const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`app is running at ${port}`)
})
