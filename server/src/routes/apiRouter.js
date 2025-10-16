const router = require("express").Router();
const authRouter = require("./authRouter");
const contensRouter = require("./contentRouter");
const tagRouter = require("./tagRouter");

router.use("/contents", contensRouter);
router.use("/tags", tagRouter);
router.use("/auth", authRouter);

router.use((req, res) => {
  res.status(404).json({ message: "Маршрут не найден" });
});

module.exports = router;
