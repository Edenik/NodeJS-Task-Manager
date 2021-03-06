
const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// CRUD With mongoDB

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)
    
    // CRUD create read update delete

    // ********Create********

    // db.collection('users').insertOne({
    //     name:"John Doe",
    //     age: 30
    // }).then((result) =>{
    //     console.log(result.insertedCount)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // const users = [{
    //     name:"Ayala",
    //     age: 27
    // }, { 
    //     name: "Vadim",
    //     age: 40
    // }, {
    //     name: "Britney",
    //     age: 45
    // }]

    // db.collection('users').insertMany(users).then((result) =>{
    //     console.log(result.insertedCount)
    // }).catch((error) => {
    //     console.log(error)
    // })


    // ********Read********

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

    // db.collection('tasks').find({completed: false}).toArray((error,tasks) => {
    //     if(error){
    //         return console.log('Unable to fetch tasks')
    //     } else if(tasks.length ===0){
    //         return console.log('No tasks found')
    //     } 
    //     console.log(tasks)
    // })


    // ********Update********

    // const updatePromise = db.collection('users').updateOne({ 
    //     _id :new ObjectID("5fd290f135aebc0448945726")
    // }, {
    //     $set:{
    //         name: "Eden Nahum"
    //     }
    // })

    // updatePromise.then((result)=> {
    //     console.log(result)
    // }).catch((error)=> {
    //     console.log(error)
    // })

    // db.collection('users').updateOne({ 
    //     _id :new ObjectID("5fd290f135aebc0448945726")
    // }, {
    //     // $set:{
    //     //     name: "Edenik"
    //     // }
    //     $inc:{
    //         age:1
    //     }
    // }).then((result)=> {
    //     console.log(result)
    // }).catch((error)=> {
    //     console.log(error)
    // })

    // db.collection('tasks').updateMany({
    //     completed:true
    // }, {
    //     $set:{
    //         completed: false
    //     }
    // }).then((result) =>{
        // console.log(result.modifiedCount)
    // }).catch((error) => {
    //     console.log(error)
    // })


    // ********Delete********

    // db.collection('users').deleteOne({
    //     _id :new ObjectID("5fd290f135aebc0448945726")
    // }).then((result) => {
    //     console.log(result.deletedCount)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('users').deleteMany({
    //     age:25
    // }).then((result) => {
    //     console.log(result.deletedCount)
    // }).catch((error) =>{
    //     console.log(error)
    // })
})

