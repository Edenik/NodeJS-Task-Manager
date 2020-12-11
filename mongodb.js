// CRUD create read update delete

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'


MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

    // db.collection('users').findOne({_id : new ObjectID("5fd2983cf979f023546352d8")}, (error,user) => {
    //     if(error){
    //         return console.log('Unable to fetch')
    //     } else if(!user){
    //         return console.log('No user found')
    //     }
    //     console.log(user)
    // })

    // db.collection('users').find({age:25}).toArray((error,users) =>{
    //     console.log(users)
    // })

    // db.collection('users').find({age:25}).count((error,count) =>{
    //     console.log(count)
    // })

    // db.collection('tasks').findOne({_id : new ObjectID("5fd295b3c28cd003fcd38fee")}, (error, task) => {
    //     if(error){
    //        return console.log('Unable to fetch task')
    //     } else if(!task){
    //         return console.log('There is no task with this id')
    //     }

    //     console.log(task)
    // })

    db.collection('tasks').find({completed: false}).toArray((error,tasks) => {
        if(error){
            return console.log('Unable to fetch tasks')
        } else if(tasks.length ===0){
            return console.log('No tasks found')
        } 
        console.log(tasks)
    })
})

