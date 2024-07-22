const express = require('express')
const app = express()
const env = require('dotenv')
const connectDB = require('./config/config')
const admin = require('./routes/adminRouter')
const truck = require('./routes/truckRouter')
const cors = require('cors')

//environment variables
env.config();

//Databse Connection
connectDB();

app.use(express.json())
app.use(cors())

app.use('/api',admin)
app.use('/api/truck',truck)

app.listen(process.env.PORT, () => console.log(`Server is connected at port ${process.env.PORT}`))