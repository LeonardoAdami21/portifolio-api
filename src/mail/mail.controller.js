import nodemailer from "nodemailer";
import {
  mailerHost,
  mailerPass,
  mailerPort,
  mailerUser,
} from "../env/envoriment.js";
const sendEmail = async (req, res) => {
  try {
    const transporter = await nodemailer.createTransport({
      host: mailerHost,
      port: Number(mailerPort),
      secure: false,
      auth: {
        user: mailerUser,
        pass: mailerPass,
      },
    });
    await transporter.verify((err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Server is ready to take our messages");
      }
    });

    const name = req.body.firstName + "" + req.body.lastName;
    const email = req.body.email;
    const phone = req.body.phone;
    const message = req.body.message;
    const mailOptions = {
      from: name,
      to: "from@example.com",
      subject: `Contato Portifolio`,
      html: `<h1>Contato Portifolio</h1>
        <p>Nome: ${name}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Mensagem: ${message}</p>
      `,
      text: `Nome: ${name}\nEmail: ${email}\nPhone: ${phone}\nMensagem: ${message}`,
    };

    await transporter.sendMail(mailOptions)
      .then(() => {
        return res.status(201).json({ message: "Email enviado com sucesso!" });
      })
      .catch((error) => {
        return res
          .status(400)
          .json({ message: "Erro ao enviar email!" + error });
      });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const mailController = {
  sendEmail,
};
