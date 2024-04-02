import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
const { PASS } = process.env;

export async function POST(req) {
  try {
    const { data } = await req.json();
    const smtpTransport = nodemailer.createTransport(
      {
        host: "smtp.timeweb.ru",
        port: 465,
        secure: true,
        auth: {
          user: "info@orggrant.ru",
          pass: PASS,
        },
        tls: { rejectUnauthorized: false },
      },
      {
        from: "orggrant <orggrant@yandex.ru",
      }
    );

    const mailOption = {
      from: "info@orggrant.ru",
      to: "info@orggrant.ru",
      subject: `Заявка с сайта orggrant.ru от ${data.name}`,
      text: `
      Имя: ${data.name},
      Телефон: ${data.phone},
      E-mail: ${data.email},
    `,
    };

    const messageClient = {
      from: "info@orggrant.ru",
      to: `${data.email}`,
      subject: `Спасибо, что обратились на orggrant.ru`,
      text: `
      Мы получили вашу заявку. Наш менеджер с Вами свяжеться в ближайшее время для уточнения информации.
    `,
    };
    
    
    //smtpTransport.sendMail(mailOption);
    smtpTransport.sendMail(messageClient);
   

    return NextResponse.json(
      { message: "Email Sent Successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to Send Email" },
      { status: 500 }
    );
  }
}
