const path = require("node:path");
const express = require("express");
const app = express();

require("dotenv").config();

const indexRouter = require("./routers/indexRouter");
const newUserRouter = require("./routers/newUserRouter");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use("/", indexRouter);
app.use("/new", newUserRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log("App is listening on PORT", PORT);
});
