require('dotenv').config();

const express = require('express')
const cors = require('cors')
const users = require('./routes/userRoute')
// const projects = require('./routes/projectRoute')
const app = express()
const dbConn = require('./config/db')
const Books = require('./routes/BookRoute')


const port = process.env.PORT || 3000

app.use(express.json())
// app.use(cors())

app.use(cors({
    origin:'http://localhost:5173',
    methods: ['GET','POST','PUT','DELETE'],
    Credentials:true
}));


app.use('/user',users);
// app.use('/projects',projects);
app.use('/books',Books)



app.listen(port, () => {
    console.log(`Server running in : ${port}`)
})