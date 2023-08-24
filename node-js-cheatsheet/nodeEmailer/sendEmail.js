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

  res.send("i am sending email");
};

module.exports = sendEmail;
