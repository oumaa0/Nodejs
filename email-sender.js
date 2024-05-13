const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your_email@gmail.com',
    pass: 'your_password',
  },
});

const mailOptions = {
  from: 'your_email@gmail.com',
  to: 'recipient_email@example.com',
  subject: 'Test Email',
  text: 'This is a test email from Node.js',
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error sending email:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
