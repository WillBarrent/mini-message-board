const { createMessage } = require("../db/db");

async function newUserGet(req, res) {
  res.render("form");
}

async function newUserPost(req, res) {
  const reqBody = req.body;

  const username = req.body.author;
  const text = req.body.message;
  const added = (new Date()).toDateString();

  await createMessage(username, text, added);

  res.redirect("/");
}

module.exports = {
  newUserGet,
  newUserPost,
};
