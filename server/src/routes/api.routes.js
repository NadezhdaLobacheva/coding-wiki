const router = require("express").Router();
const contensRoutes = require("./content.routes");
const tagRoutes = require("./tag.routes");

router.use("/contents", contensRoutes);
router.use("/tags", tagRoutes);

router.use((req, res) => {
  res.status(404).json({ message: "Маршрут не найден" });
});

module.exports = router;
