const { Router } = require("express");
const router = Router();

router.get("/create", async (req, res) => {
  res.render("content", {
    title: "Создание сайтов",
    path: [
      {
        name: `Главная \u{2192}`,
        path: "/",
      },
      {
        name: "Услуги  \u{2192}",
        path: "/services",
      },
      {
        name: "Главная",
        path: "/content/create",
      },
    ],
  });
});

router.get("/design", async (req, res) => {
  res.render("design", {
    title: "Графический дизайн",
    path: [
      {
        name: `Главная \u{2192}`,
        path: "/",
      },
      {
        name: "Услуги  \u{2192}",
        path: "/services",
      },
      {
        name: "Графический дизайн",
        path: "/content/design",
      },
    ],
  });
});

module.exports = router;
