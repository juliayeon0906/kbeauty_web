import nodemailer from 'nodemailer'

require('dotenv').config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
})

async function main() {
    const {}

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: `[예약문의] Booking Appoinment from ${}`
    }

    const info = await transporter.sendMail(mailOptions);

    console.log("Message sent: %s", info.messageId);
}

main().catch(console.error);
