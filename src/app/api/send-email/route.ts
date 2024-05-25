import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import z from 'zod';

const bodySchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  subject: z.string().min(1),
  message: z.string().min(1)
});

export async function POST(request: NextRequest) {
  const parseResult = await bodySchema.safeParseAsync(await request.json());
  if (!parseResult.success) {
    return new NextResponse(null, {
      status: 400
    });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    from: process.env.MAIL_FROM,
    secure: false,
    ignoreTLS: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD
    }
  });

  await transporter.verify();

  // await transporter.sendMail({
  //   from: process.env.MAIL_FROM,
  //   to: [process.env.NEXT_PUBLIC_MAIL_TO!],
  //   subject: `Via formulario de contato: ${body.subject}`,
  //   text: `
  //     Nome: ${body.name}
  //     E-mail: ${body.email}
  //     Telefone: ${body.phone}
  //     Assunto: ${body.subject}
  //     Mensagem:
  //     ${body.message}
  //   `,
  //   replyTo: body.email
  // });
  //
  // await transporter.sendMail({
  //   from: process.env.MAIL_FROM,
  //   to: [body.email],
  //   subject: `Sua mensagem foi enviada, logo responderemos`,
  //   text: `
  //     Nome: ${body.name}
  //     E-mail: ${body.email}
  //     Telefone: ${body.phone}
  //     Assunto: ${body.subject}
  //     Mensagem:
  //     ${body.message}
  //   `,
  //   replyTo: process.env.MAIL_FROM
  // });

  return new NextResponse(null, {
    status: 201
  });
}
