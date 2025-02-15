const { Router } = require("express");
const {
  newUserGet,
  newUserPost,
} = require("../controllers/newUserControllers");
const newUserRouter = Router();

newUserRouter.get("/", newUserGet);

newUserRouter.post("/", newUserPost);

module.exports = newUserRouter;