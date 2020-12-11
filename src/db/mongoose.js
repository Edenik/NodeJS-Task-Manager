const mongoose = require('mongoose')


const connectionURL = 'mongodb://127.0.0.1:27017/task-manager-api'
mongoose.connect(connectionURL, {
    useNewUrlParser: true, 
    useCreateIndex: true,
})

const User = mongoose.model('User' ,{
    name: {
        type: String,
    },
    age: {
        type:Number,
    }
})

// const me = new User({
//     name:"Alon",
//     age:27
// })

// me.save().then((me) =>{
//     console.log(me)
// }).catch((error)=> {
//     console.log('Error!' , error)
// })

const Task = mongoose.model('Task' , {
    description : {
        type:String
    }, 
    completed: {
        type:Boolean
    }
})


const newTask = new Task({
    description : "Get a job!",
    completed:false
})

newTask.save().then(() => {
    console.log(newTask)
}).catch((error) => {
    console.log('Error!', error)
})
