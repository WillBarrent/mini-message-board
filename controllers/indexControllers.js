const { getAllMessages, getMessageById } = require("../db/db");

async function getAllUsersMessages(req, res) {
  const messages = await getAllMessages();
  res.render("index", { messages: messages });
}

async function getAllUserMessagesById(req, res) {
  const params = req.params;
  const id = params.id;
  const message = await getMessageById(id);

  const messageAuthor = message.username;
  const messageText = message.text;
  const messageTime = message.added;

  res.render("messageDetails", {
    author: messageAuthor,
    text: messageText,
    time: messageTime,
  });
}

module.exports = {
  getAllUsersMessages,
  getAllUserMessagesById,
};
