require('../src/db/mongoose')
const Task = require('../src/models/task')


Task.findByIdAndDelete('5fd3619d4e580e41b0b5d1c3').then((task) => {
    console.log(task)
    return Task.countDocuments({completed:false})
}).then((result) => {
    console.log(`There are ${result} incompleted tasks`)
}).catch((e) => {
    console.log(e)
})