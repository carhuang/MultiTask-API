const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: process.env.EMAIL,
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendGoodbyeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: process.env.EMAIL,
        subject: "I'm sorry to see you go!",
        text: `Goodbye, ${name}. Is there anything that the app could improve on?`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendGoodbyeEmail
}