const path = require("node:path");
const express = require("express");
const app = express();

require("dotenv").config();

const indexRouter = require('./routers/indexRouter');

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use('/', indexRouter);

const PORT = 3000;

app.listen(PORT, () => {
    console.log("App is listening on PORT", PORT);
});
