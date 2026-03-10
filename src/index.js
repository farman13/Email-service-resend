import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import sendEmail from './utils/sendEmail.js';

const app = express();
app.use(express.json());
console.log('Environment variables loaded:', process.env.RESEND_API_KEY)

app.post('/send-email', async (req, res) => {
    const { to, subject } = req.body;

    try {
        await sendEmail({ to, subject });
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Failed to send email' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
