const express= require('express')
const dotenv= require('dotenv').config()
const colors= require('colors')
const connectDB= require('./config/db')

const port= process.env.SERVER_PORT
const app= express()

connectDB()
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/api/contacts', require('./routes/contactRoutes'))

app.listen(port, () => console.log(`Server open on port ${port}`))
