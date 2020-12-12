const mongoose = require('mongoose')
require('dotenv').config()

const connectionURL = process.env.MONGODB_URL
mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify:false,
    useUnifiedTopology:true,
})



