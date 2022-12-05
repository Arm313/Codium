const { Router } = require("express");
const dotenv = require("dotenv");
const mg = require("mailgun-js");
const form = require("../email/email");
const router = Router();

dotenv.config();
router.get("/", async (req, res) => {
  res.render("index", {
    title: "Главная страница",
    isHome: true,
  });
});

router.post("/", async (req, res) => {
  try {
    const { email, phone, message, name } = req.body;

    const mailgun = () => {
      return mg({
        apiKey: process.env.MAILGUN_API_KEY,
        domain: process.env.MAILGUN_DOMAIN,
      });
    };

    const emailBody = form(email, phone, message, name);
    mailgun()
      .messages()
      .send(
        {
          from: "codiumcontact@gmail.com",
          to: `codiumcontact@gmail.com`,
          subject: `${emailBody.subject}`,
          html: `${emailBody.html}`,
        },
        (err, body) => {
          if (err) {
            console.log({ err });
            res.status(500).send({ message: "Mail failed" });
          } else {
            res.redirect("/");
          }
        }
      );
  } catch (error) {
    console.log({ error });
  }
});

module.exports = router;
