// backend/api/contact.js
require('dotenv').config();
const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  // CORS preflight
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(204).end();
  }
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST,OPTIONS');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
  res.setHeader('Access-Control-Allow-Origin', '*');

  try {
    const { name, email, subject, message } = req.body;
    console.log('📬 payload:', req.body);

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    console.log('📨 sending mail…');
    const info = await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to:   process.env.TO_EMAIL || process.env.SMTP_USER,
      subject: subject || 'New message',
      text: `
Name: ${name}
Email: ${email}

${message}
      `,
    });
    console.log('✅ mail sent:', info.messageId);

    transporter.close();
    console.log('🔌 transporter closed');

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('❌ sendMail error:', err);
    return res.status(500).json({ success: false, error: err.message });
  }
};
