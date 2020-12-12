require('dotenv').config()
const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        from: process.env.EMAIL,
        to: email,
        subject: 'Welcome To Task Manager App!',
        text: `Hi ${name}, Welcome to the Task Manager app. Let us know how you get along with the app!`
    }).then(() => {
        console.log('Email sent')
    }).catch((e) => {
        console.log('Error:', e)
    })
}

const sendCencelationEmail = (email, name) => {
    sgMail.send({
        from: process.env.EMAIL,
        to: email,
        subject: 'It hurts to say goodbye!',
        text: `Hi ${name}, we are sorry to hear that you deleted your account at Task Manager App.
        We hope to see you back soon.`
    }).then(() => {
        console.log('Email sent')
    }).catch((e) => {
        console.log('Error:', e)
    })
}


module.exports = {
    sendWelcomeEmail,
    sendCencelationEmail
}