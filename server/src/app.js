const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "..", ".env") });
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const serverConfig = require("./configs/serverConfig");
const apiRoutes = require("./routes/api.routes");

serverConfig(app);

app.use("/api", apiRoutes);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
