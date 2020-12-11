const mongoose = require('mongoose')
const validator = require('validator')

const connectionURL = 'mongodb://127.0.0.1:27017/task-manager-api'
mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
})

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        minlength: 7,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes("password")) {
                throw new Error('Users Password cant be: ' + value)
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be positive number')
            }
        }
    }
})

const me = new User({
    name: "   John Doe           ",
    email: ' John@gmail.com    ',
    password: '   passWord    '
})

me.save().then((me) => {
    console.log(me)
}).catch((error) => {
    console.log('Error!', error)
})

const Task = mongoose.model('Task', {
    description: {
        type: String,
        trim:true,
        required: true
    },
    completed: {
        type: Boolean,
        default: false,
    }
})


// const newTask = new Task({
//     description : "Get a job!",
// })

// newTask.save().then(() => {
//     console.log(newTask)
// }).catch((error) => {
//     console.log('Error!', error)
// })
