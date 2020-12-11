require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate('5fd3662835acf83a2c8d2c7c', { age: 1}).then((user) => {
//     console.log(user)
//     return User.countDocuments({age:1})
// }).then((result) =>{
//     console.log(`There is ${result} users with the age of 1`)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id,age) => {
    const user = await User.findByIdAndUpdate(id, {age})
    const count = await User.countDocuments({age})
    return {user,count}
}

updateAgeAndCount('5fd36cd19a312d0de09eccfe', 1).then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})
