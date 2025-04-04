import express from 'express';
import ServerlessHttp from 'serverless-http'; 
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const router = express.Router();

router.get('/', (req, res) => {
    res.send('App is running...');
});

router.post('/sendMail', async (req, res) => {
    try{
        const { name, phoneNum, email, date, file, gender, treated, service, comment } = req.body;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: `[예약문의] Booking Appoinment from ${name}`,
            text: `Name: ${name}\nPhone Number: ${phoneNum}\nEmail: ${email}\nText`
        };

        const info = await transporter.sendMail(mailOptions);
    }
});

app.use('/api/', router);

const handler = ServerlessHttp(app);

module.exports.handler = async(event, content) => {
    const result = await handler(event, content);
    return result;
};
