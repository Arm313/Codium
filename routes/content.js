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
router.get("/management", async (req, res) => {
  res.render("management", {
    title: "Management of web projectss",
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
        name: "Management of web projects",
        path: "/content/management",
      },
    ],
  });
});
router.get("/maintenance", async (req, res) => {
  res.render("maintenance", {
    title: "Обслуживание веб-сайтов",
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
        name: "Обслуживание веб-сайтов",
        path: "/content/maintenance",
      },
    ],
  });
});

module.exports = router;
