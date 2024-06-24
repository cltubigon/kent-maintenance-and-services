'use server'
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
  host: 'smtp.resend.com',
  port: '465',
  secure: true,
  auth: {
    user: 'resend',
    pass: process.env.RESEND_API_KEY,
  },
})

export const sendEmail = async ({ data }) => {
  const { email, firstName, lastName, phoneNumber, postCode } = data
  await transport.sendMail({
    from: {
      name: `${firstName} ${lastName}`,
      address: 'website@kentmaintenance.co.uk',
    },
    to: 'info@kentmaintenance.co.uk',
    subject: 'Kent maintenance website new contact',
    html: `
    <!DOCTYPE html>
    <html>
      <body>
        <p>Name: ${firstName} ${lastName}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phoneNumber}</p>
        <p>Postal code: ${postCode}</p>
      </body>
    </html>`,
  })
}
