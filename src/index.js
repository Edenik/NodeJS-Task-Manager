const express = require('express')
require('./db/mongoose')
require('dotenv').config()

const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.use(userRouter)
app.use(taskRouter)


app.listen(port, () => `Server running on port ${port}`);

const jwt = require('jsonwebtoken')

const myFunction = async () => {
    console.log(process.env.SECRET_JWT_KEY)
    const token = jwt.sign({ _id: 'abc123' }, process.env.SECRET_JWT_KEY, { expiresIn: '7 days'})
    console.log(token)

    const data=  jwt.verify(token, process.env.SECRET_JWT_KEY)
    console.log(data)
}

myFunction()