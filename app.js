const express = require('express')
const PORT = 3000
const app = express()
const mongoose = require('mongoose')
const path = require('path')
const linkRoute = require('./routes/linkRoute')


mongoose.connect('mongodb://localhost/newlinks')


let db = mongoose.connection

db.on("error", ()=>{ console.log('Houve ERROR') })
db.once("open", ()=>{ console.log('Banco Carregado') })

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'templates'))

app.use('/', linkRoute)

app.listen(PORT,()=>{
    console.log('Server Running on Port:',PORT)
})