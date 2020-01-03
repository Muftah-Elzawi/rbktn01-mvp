const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')


const items = require('./routes/api/items.js')

const app = express()

app.use(bodyParser.json())

// DB Config


// Connect to Mongo 
mongoose.connect('mongodb+srv://muftah:12345@cluster0-9n7rl.gcp.mongodb.net/test',{ useUnifiedTopology: true , useNewUrlParser: true }  )
.then(()=> console.log('db connected.....'))
.catch(err => console.log('errore',err))

//Use Routes
app.use('/api/items', items)

const port = process.env.PORT || 7000;

app.listen(port,()=>console.log(`server running on ${port}....`))
