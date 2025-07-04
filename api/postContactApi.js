// api/send-email.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST allowed' });
  }

  const { name, email, subject, message } = req.body;
  if (!email || !message) {
    return res.status(400).json({ error: 'Missing fields' });
  }

  // configure via ENV
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: +process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name || 'No‑Reply'}" <${process.env.SMTP_FROM}>`,
      to: process.env.TO_EMAIL,
      subject: subject || `Message from ${email}`,
      text: message,
    });
    res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Email failed:', err);
    res.status(500).json({ error: 'Failed to send email' });
  }
}
