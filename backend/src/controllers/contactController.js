
const { sendMail } = require('../services/contactService');

exports.submitContactForm = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    await sendMail({ name, email, subject, message });
    return res
      .status(200)
      .json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error in submitContactForm:', error);
    return res
      .status(500)
      .json({ success: false, message: 'Failed to send email' });
  }
};
