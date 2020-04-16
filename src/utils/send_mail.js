'use strict';
import nodemailer from 'nodemailer';

export default async (req, res) => {
  const { name, email, message, captchaToken } = req.body;

  const smtpConfig = {
    service: 'gmail',
    auth: {
      user: 're@incubo.ca',
      pass: process.env.MAILPASS
    }
  };

  if(!captchaToken) {
    return res.send({ error: 'Please check the captcha' });
  }

  const transporter = nodemailer.createTransport(smtpConfig);

  try {
    await transporter.sendMail({
      to: 'development@incubo.ca',
      subject: 'Incubo Development Inquiry',
      html: `
      <p>From: ${name} - ${email}</p>
      <p>${message}</p>
    `
    });

    res.send({ ok: 'Thanks got it!' });
  } catch (err) {
    logger.error(err.message);
    res.send({ error: 'There was a problem sending your email. Please try again later.' });
  }
};
