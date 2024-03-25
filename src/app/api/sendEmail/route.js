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

  //   await new Promise((resolve, reject) => {
  //     // verify connection configuration
  //     transporter.verify(function (error, success) {
  //         if (error) {
  //             console.log(error);
  //             reject(error);
  //         } else {
  //             console.log("Server is ready to take our messages");
  //             resolve(success);
  //         }
  //     });
  // });

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

    await new Promise((resolve, reject) => {
      // send mail
      smtpTransport.sendMail(mailOption, (err, info) => {
          if (err) {
              console.error(err);
              reject(err);
          } else {
              console.log(info);
              resolve(info);
          }
      });
  });

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
