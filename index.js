require('dotenv').config();

const express = require('express')
const cors = require('cors')
const users = require('./routes/userRoute')
const app = express()
const dbConn = require('./config/db')
const Books = require('./routes/BookRoute')
const cookieparser=require("cookie-parser")

const port = process.env.PORT || 3000

app.use(express.json())

app.use(cookieparser())

app.use(cors({
    origin:'http://localhost:5173',
    methods: ['GET','POST','PUT','DELETE'],
    credentials:true
}));


app.use('/user',users);
app.use('/books',Books)


app.listen(port, () => {
    console.log(`Server running in : ${port}`)
})