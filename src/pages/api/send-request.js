import sendEmail from "../../lib/mail"

export default function handler (req, res) {

  const message ={
    to: 'orggrant@yandex.ru', 
    subject: `Заявка с сайта orggrant.ru от ${req.body.name}`,
    text: `
      Имя: ${req.body.name},
      Телефон: ${req.body.phone},
      E-mail: ${req.body.email},
    `,
  };
  // const messageClient ={
  //   to: `${req.body.email}`,
  //   subject: `Ваша заявка принтята `,
  //   text: `
  //      hi!
  //  `,
  //   attachments: [
  //     {
  //         filename: 'Frame.png',
  //         path: __dirname + '/Frame.png',
  //         cid: 'uniq-Frame.png'
  //     }
  // ]
  // };
  sendEmail(message);
  // sendEmail(messageClient);
  res.send(`Спасибо за обращение ${req.body.name}`)
}

