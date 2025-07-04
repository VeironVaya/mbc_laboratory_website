const nodemailer = require('nodemailer');

exports.sendMail = async ({ name, email, subject, message }) => {


  const transporter = nodemailer.createTransport({
    service: 'gmail',       
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to:   process.env.SMTP_USER,
    subject: subject || 'New message from contact form',
    text: `
Name: ${name}
Email: ${email}

Message:
${message}
`
  };

  return transporter.sendMail(mailOptions);
};
