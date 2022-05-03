import nodemailer from 'nodemailer';
import sendGridTransport from 'nodemailer-sendgrid-transport';
import { NextApiRequest, NextApiResponse } from 'next';

const email = process.env.MAIL_ADDRESS;

const transporter = nodemailer.createTransport(
  sendGridTransport({
    auth: {
      api_key: process.env.SENDGRID_API_KEY,
    },
  }),
);
export default async (request: NextApiRequest, response: NextApiResponse) => {
  try {
    const { senderMail, name, content } = request.body;
    if (!senderMail.trim() || !name.trim() || !content.trim()) {
      return response.status(403).send('');
    }
    const message = {
      from: email,
      to: email,
      subject: `Nova mensagem de contato - ${name}`,
      html: `<p><b>Email:</b> ${senderMail} <br/><b>Mensagem:</b> ${content}</p>`,
      replyTo: senderMail,
    };
    transporter.sendMail(message, (err, info) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Message sent successfully', info);
      }
    });
    return response.status(200).send({ message: 'Email sent successfully' });
  } catch (err) {
    return response.json({
      message: err.message,
    });
  }
};
