const { Router, text } = require("express");
const indexRouter = Router();

const messages = [
  {
    id: 0,
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    id: 1,
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

indexRouter.get("/", (req, res) => {
  res.render("index", { messages: messages });
});

indexRouter.get("/messages/:id", (req, res) => {
  const params = req.params;
  const id = params.id;
  const message = messages[id];

  const messageAuthor = message.user;
  const messageText = message.text;
  const messageTime = message.added;

  res.render("messageDetails", {
    author: messageAuthor,
    text: messageText,
    time: messageTime,
  });
});

indexRouter.get("/new", (req, res) => {
  res.render("form");
});

indexRouter.post("/new", (req, res) => {
  const reqBody = req.body;

  const messageText = req.body.message;
  const messageAuthor = req.body.author;

  messages.push({
    id: messages.length,
    text: messageText,
    user: messageAuthor,
    added: new Date(),
  });

  res.redirect("/");
});

module.exports = indexRouter;
