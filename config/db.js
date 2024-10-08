require('dotenv').config();
const mongoose = require('mongoose')

// mongoose.connect('mongodb://localhost:27017/Users')
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const connection = mongoose.connection;
connection.on('connected', () => {
    console.log("DB Connected")
})
connection.on('error', () => {
    console.log("DB Error")
})

// module.exports = mongoose