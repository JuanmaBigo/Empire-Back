import 'dotenv/config.js'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'projectempire9@gmail.com',
    pass: 'oqayfrznxrxnqqfh'
  },
  tls:{
    rejectUnauthorized: false
  }
})

export default transporter
