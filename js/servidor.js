const envioemail = require('envioemail');

const transporter = envioemail.createTransport({
    services : 'gmail',
    auth:{
        user: 'kasakorova23@gmail.com',
        pass: 'dazr uvrw uesp jnbd'
    }
})

const mailOptions = {
    from : 'kasakorova23@gmail.com',
    to : 'servipcpal@gmail.com',
    subject : 'Solicitud Pagina Web',
    Text : 'Hola, estoy interesado en adquirir boletas de ingreso'
}
transporter.SendMail(mailOptions,(error,info)=>{
    if(error){
        return console.log(error)
    }
console.log('Correo Enviado',info.response)
})