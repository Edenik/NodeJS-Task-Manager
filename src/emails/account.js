require('dotenv').config()
const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

sgMail.send({
    from:process.env.EMAIL,
    to:process.env.EMAIL,
    subject:'This is my first creation',
    text:'I hope this one actually get to you.'
}).then(() => {
    console.log('Email sent')
}).catch((e) => {
    console.log('Error:' , e)
})