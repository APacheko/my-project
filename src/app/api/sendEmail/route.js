import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export default async function POST(req) {
  try {
    const { data } = await req.json();
    const smtpTransport = nodemailer.createTransport(
      {
        host: "smtp.yandex.ru",
        port: 465,
        secure: true,
        auth: {
          user: "orggrant@yandex.ru",
          pass: "vylfbattkgsddaaz",
        },
        tls: { rejectUnauthorized: false },
      },
      {
        from: "orggrant <orggrant@yandex.ru",
      }
    );

    const mailOption = {
      from: "orggrant@yandex.ru",
      to: "orggrant@yandex.ru",
      subject: `Заявка с сайта orggrant.ru от ${data.name}`,
      text: `
      Имя: ${data.name},
      Телефон: ${data.phone},
      E-mail: ${data.email},
    `,
    };

    smtpTransport.sendMail(mailOption);
    

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
