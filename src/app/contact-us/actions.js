'use server'
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
  host: 'smtp.resend.com',
  port: '465',
  secure: true,
  auth: {
    user: 'resend',
    pass: '',
  },
})

export const sendEmail = () => {
  console.log('nodemailer', nodemailer)
}
