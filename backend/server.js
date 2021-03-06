const express= require('express')
const dotenv= require('dotenv').config()
const colors= require('colors')
const connectDB= require('./config/db')
const errorHandler= require('./middleware/errorHandler')
const cors= require('cors')

const port= process.env.SERVER_PORT
const app= express()

connectDB()

//these execute in order
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(cors())
app.use('/api/contacts', require('./routes/contactRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server open on port ${port}`.cyan))
