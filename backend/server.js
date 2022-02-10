const express= require('express')
const dotenv= require('dotenv').config()

const port= process.env.SERVER_PORT
const app= express()

app.use('/contacts', require('./routes/contactRoutes'))

app.listen(port, () => console.log(`Server open on port ${port}`))
