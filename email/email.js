module.exports = function (email, phone, message, name) {
  return {
    subject: "Клиент",
    html: `
      <h1>Новая заявка</h1>
      <p>имя - ${name}</p>
      <hr />
      <p>email - ${email}</p>
      <hr />
      <p>номер телефона - ${phone}</p>
      <hr />
      <p>коментарии</p>
      <p>${message}</p>

    `,
  };
};
