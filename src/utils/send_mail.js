'use strict';
import nodemailer from 'nodemailer';

export default async (req, res) => {
  const { fName, lName, email, description } = req.body;

  const smtpConfig = {
    service: 'gmail',
    auth: {
      user: 're@incubo.ca',
      pass: process.env.MAILPASS
    }
  };

  // if(req.body['g-recaptcha-response'] === undefined ||
  //   req.body['g-recaptcha-response'] === '' ||
  //   req.body['g-recaptcha-response'] === null) {
  //   return res.send({ error: 'Please check the captcha' });
  // }

  const transporter = nodemailer.createTransport(smtpConfig);

  try {
    await transporter.sendMail({
      from: email,
      to: 'Incubo Development Inquiry development@incubo.ca',
      subject: 'Test Incubo',
      html: `
      <p>From: ${fName} ${lName}</p>
      <p>${description}</p>
    `
    });

    res.send({ ok: 'Your email was sent' });
  } catch (err) {
    logger.error(err);
    res.send({ error: 'There was a problem sending your email. Please try again later.' });
  }
};