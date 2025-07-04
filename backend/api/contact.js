require('dotenv').config();
const nodemailer = require('nodemailer');
const { rules, IDS_OPTIONS } = require('../ids.config');
const fetch = require('node-fetch'); // if you plan to alert via webhook

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
    const { name = '', email = '', subject = '', message = '' } = req.body;
    console.log('📬 payload:', req.body);

    // IDS scan
    const payload = `${name}${subject}${message}`;
    for (const { id, name: ruleName, regex } of rules) {
      if (regex.test(payload)) {
        const snippet = payload.slice(0, IDS_OPTIONS.logSnippetLen);
        console.warn(`🛡️ [IDS:${id}] ${ruleName}`, {
          ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
          snippet,
        });

        if (process.env.IDS_ALERT_WEBHOOK) {
          fetch(process.env.IDS_ALERT_WEBHOOK, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ruleId: id, ruleName, ip: req.headers['x-forwarded-for'], snippet }),
          }).catch(console.error);
        }

        const shouldBlock = process.env.IDS_BLOCK === 'true' || IDS_OPTIONS.blockOnMatch;
        if (shouldBlock) {
          return res.status(400).json({ success: false, error: `Blocked by IDS rule: ${ruleName}` });
        }
      }
    }

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
