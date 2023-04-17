import 'dotenv/config.js'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'facundo2punto0@gmail.com',
    pass: 'etsxmvhsbgskatml'
  },
  tls:{
    rejectUnauthorized: false
  }
})

export default transporter
