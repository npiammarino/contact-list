const express= require('express')
const dotenv= require('dotenv').config()

const port= process.env.PORT
const app= express()

app.use('/api/contacts', require('./routes/contactRoutes'))

app.listen(port, () => console.log(`Server open on port ${port}`))
