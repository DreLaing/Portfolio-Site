const nodemailer = require('nodemailer')
const mailGun = require('nodemailer-mailgun-transport')

const sendMail = (req,res,next)=>{
    const auth = {
        auth:{
            api_key: '3ec45f47d56478181e50c1de94cd061b-aff2d1b9-7222624b',
            domain: 'sandbox3fb00d2a46ae4c18bdc587fa9f7e42e5.mailgun.org'
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