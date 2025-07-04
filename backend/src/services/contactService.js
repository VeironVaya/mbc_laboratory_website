// backend/services/contactService.js
const nodemailer = require('nodemailer');

exports.sendMail = async ({ name, email, subject, message }) => {
  console.log('📨 [sendMail] creating transporter…');
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  console.log('📨 [sendMail] sending mail…');
  const info = await transporter.sendMail({
    from: `"${name}" <${email}>`,
    to: process.env.SMTP_USER,              // or process.env.TO_EMAIL
    subject: subject || 'New message from contact form',
    text: `
Name: ${name}
Email: ${email}

Message:
${message}
    `,
  });
  console.log('✅ [sendMail] mail sent:', info.messageId);

  // Explicitly close the connection so the Lambda can terminate
  transporter.close();
  console.log('🔌 [sendMail] transporter closed');

  return info;
};
