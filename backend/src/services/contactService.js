const nodemailer = require('nodemailer');

exports.sendMail = async ({ name, email, subject, message }) => {

  const transporter = nodemailer.createTransport({
    service: 'gmail',       
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to:   process.env.EMAIL_USER,
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
