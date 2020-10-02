const nodemailer = require('nodemailer')
const mailGun = require('nodemailer-mailgun-transport')
require('dotenv').config()

const sendMail = (req,res,next)=>{
    const auth = {
        auth:{
            api_key: process.env.API_KEY,
            domain: process.env.DOMAIN
        }
    }
    
    const transporter = nodemailer.createTransport(mailGun(auth))
    
    const mailOptions = {
        from: 'drelaing8762@gmail.com',
        to:'drelaing876@gmail.com',
        subject:'Email from Portfolio site',
        text: req.body.text
    }
    
    transporter.sendMail(mailOptions, (err, data)=>{
        if(err){
            console.log('Message not sent')
            // res.json('Message not sent')
            console.log(err)
        }
        else{
            console.log('Message sent')
        }
    })
    next()
}

module.exports = sendMail