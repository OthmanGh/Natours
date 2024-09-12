const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
  // 1) Craete transporter
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,

    auth: {
      user: process.env.EMAIL_USERNAME,
      password: process.env.EMAIL_PASSWORD,
    },
  });

  // *2) Define the email options:
  const mailOptions = {
    from: 'Othman Ghandour <othmanghandour@gmail.com>',
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  // *3) Actually send email
  await transporter.sendMail(mailOptions);
};
