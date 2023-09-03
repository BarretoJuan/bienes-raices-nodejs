import nodemailer from "nodemailer"
import dotenv from 'dotenv';
dotenv.config({path: '.env'})

const emailRegistro = async (data) => {
    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD
        }
      });

      await transport.sendMail({ 
        from: 'bienesraices@gmail.com',
        to: data.email,
        subject: 'Confirma tu cuenta en bienesraices.com',
        text: 'Confirma tu cuenta en bienesraices.com',
        html: `
        <p> Hola ${data.nombre}, confirma tu cuenta, solo debes confirmarla en el siguiente enlace</p>
        <a href='${process.env.BACKEND_URL}:${process.env.PORT ?? 3000}/auth/verify-email/${data.token}'>Confirmar cuenta</a>
        <p>Si no creaste esta cuenta, puedes ignorar este mensaje</p>
        `
      })
} 

export {
    emailRegistro
}