import nodemailer from 'nodemailer';
import { NextApiRequest, NextApiResponse } from 'next';
import sendGridTransport from 'nodemailer-sendgrid-transport';
const email = process.env.MAIL_ADDRESS;
const transporter = nodemailer.createTransport(
  sendGridTransport({ auth: { api_key: process.env.SENDGRID_API_KEY } }),
);
// eslint-disable-next-line import/no-anonymous-default-export
export default async (request: NextApiRequest, response: NextApiResponse) => {
  try {
    const { senderMail, name, content } = request.body;
    if (!senderMail.trim() || !name.trim() || !content.trim())
      return response.status(403).send('');
    const message = {
      from: email,
      to: email,
      subject: `Nova mensagem de contato - ${name}`,
      html: `<p><b>Nome:</b> ${name} <br/><b>Email:</b> ${senderMail} <br/><b>Mensagem:</b> ${content}</p>`,
      replyTo: senderMail,
    };
    transporter.sendMail(message);
    return response.status(200).send('');
  } catch (err: unknown) {
    if (err instanceof Error) {
      return response.json({
        message: err.message,
      });
    }
  }
};
