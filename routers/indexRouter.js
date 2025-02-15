const { Router } = require("express");
const {
  getAllUsersMessages,
  getAllUserMessagesById,
} = require("../controllers/indexControllers");

const indexRouter = Router();

indexRouter.get("/", getAllUsersMessages);

indexRouter.get("/messages/:id", getAllUserMessagesById);

module.exports = indexRouter;
