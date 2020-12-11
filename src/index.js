const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())


// Users endpoints
app.post('/users', (req,res) =>{
    const user = new User(req.body)

    user.save().then((result) => {
        res.status(201).send(user)
    }).catch((error) => {
        res.status(400).send(error)
    })
})

app.get('/users', (req, res) => {
    User.find({}).then((users) =>{
        res.send(users)
    }).catch((error) =>{
        res.status(500).send()
    })
})

app.get('/users/:id', (req, res) => {
    const _id = req.params.id;

    User.findById(_id).then((user) => {
        if(!user){
            return res.status(404).send()
        }

        res.send(user)
    }).catch((error) => {
        res.status(500).send()
    })
})

// Tasks endpoints
app.post('/tasks', (req, res) => {
  const task = new Task(req.body)

  task.save().then((result) => {
      res.status(201).send(result)
  }).catch((error) => {
      res.status(400).send(error)
  })
})


app.get('/tasks', (req, res) => {
  Task.find({}).then((tasks) => {
      res.send(tasks)
  }).catch((error) =>{
      res.status(500).send()
  })
})

app.get('/tasks/:id', (req, res) => {
    const _id = req.params.id

    Task.findById(_id).then((task) => {
        if(!task){
            res.status(404).send()
        }
        res.send(task)
    }).catch((error)=>{
        res.status(500).send()
    })

})

app.listen(port, () => `Server running on port ${port}`);

