const express = require('express')
const path = require('path')
const mail = require('./mail')
const app = express()

const port = process.env.PORT || 8080

app.use(express.static('static'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.post('/email', mail,  (req,res)=>{
    res.json('Email sent')
})

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(port, ()=>{
    console.log('Server running')
})