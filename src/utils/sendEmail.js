import { Resend } from 'resend';
import emailTemplate from './emailTemplate.js';
import dotenv from 'dotenv';
dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async ({ to, subject }) => {
    await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: to,
        subject: subject,
        html: emailTemplate(),
    });
    console.log('Email sent successfully');
};

export default sendEmail;