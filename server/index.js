require('dotenv').config()
const express = require('express')
const app = express()
const helmet = require('helmet')
const cors = require('cors')
const mongoose = require('mongoose')

// middlewares
app.use(cors())
app.use(express.json())
app.use(helmet())


// server and database connection
mongoose.connect(process.env.ATLAS_URI)
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`http://localhost:${process.env.PORT}`)
    })
}).catch(error => console.log(error))