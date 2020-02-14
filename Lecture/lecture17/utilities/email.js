const nodemailer=require("nodemailer");
const {MAILTRAP_PASSWORD,MAILTRAP_USERNAME} = require("../configs/config")
module.exports =async function(options){
    //transport
    var transport=nodemailer.createTransport({
        host:"smtp.mailtrap.io",
        port:2525,
        auth:{
            user:MAILTRAP_USERNAME,
            pass:MAILTRAP_PASSWORD
        }
    })
}

await transport.sendMail(options)
//dummy email from mailtrap.io gives you all details        