// server/controllers/contactController.js
require('dotenv').config();
const nodemailer = require('nodemailer');

exports.sendContactEmail = async (req, res) => {
  const { name, email, message } = req.body;
  
  // Simple validation
  if (!name || !email || !message) {
    return res.status(400).json({ msg: 'All fields are required' });
  }

  try {
    // Transporter for Gmail
    let transporter = nodemailer.createTransport({
      service: 'gmail', 
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // Email options
    let mailOptions = {
      from: email, // from user input
      to: process.env.EMAIL_USER, // your own email to receive
      subject: `Portfolio Contact from ${name}`,
      text: `Email: ${email}\n\nMessage:\n${message}`
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ msg: 'Email sent successfully' });
  } catch (err) {
    console.error('Error sending email:', err);
    return res.status(500).json({ msg: 'Something went wrong...' });
  }
};
