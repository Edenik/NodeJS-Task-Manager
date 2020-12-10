// CRUD create read update delete

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if(error){
       return console.log('Unable to connect to database!')
    }
    
    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     name:'Esdasdsaden',
    //     age:25
    // }, (error , result) => {
    //     if(error){
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops)
    // })

    // var array = [{
    //     name:'alon',
    //     age:26
    // }, {
    //     name:'daniel',
    //     age:24
    // }];
    // db.collection('users').insertMany(array, (error,result) => {
    //     if(error){
    //         return console.log('Unable to insert documents!')
    //     }

    //     console.log(result.ops)
    // })

    var tasks = [{
        description:'buy shoes',
        completed:false,
    },{
        description:'complete this course',
        completed:false,
    },{
        description:'get a new job',
        completed:false,
    }]

    db.collection('tasks').insertMany(tasks,(error,result) => {
        if(error){
            return console.log('Unable to add tasks')
        }
        
        console.log(result.ops)
    })

})

