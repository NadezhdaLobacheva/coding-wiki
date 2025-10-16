const router = require("express").Router();
const authRouter = require("./authRouter");
const contensRoutes = require("./content.routes");
const tagRoutes = require("./tag.routes");

router.use("/contents", contensRoutes);
router.use("/tags", tagRoutes);
router.use("/auth", authRouter);


router.use((req, res) => {
  res.status(404).json({ message: "Маршрут не найден" });
});

module.exports = router;
