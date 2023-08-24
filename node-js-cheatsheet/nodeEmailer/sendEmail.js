const nodemailer = require("nodemailer");

const sendEmail = async (req, res) => {
  const testAccount = await nodemailer.createTestAccount();

  // connect with smtp server
  const transporter = await nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "reese.schumm@ethereal.email", // obtained my creating account on ethereal
      pass: "yA1u1KXDF3qBUPMj3w", // obtained my creating account on ethereal
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Ridsa Shabbir 👻" <reese.schumm@ethereal.email>', // sender address
    to: "ridsashabbir123@gmail.com", // list of receivers
    subject: "Hello Ridsa", // Subject line
    text: "Hello Ridsa, how are you?", // plain text body
    html: "<b>first email sent</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);

  res.send("i am sending email");
};

module.exports = sendEmail;
