const Message = require("../mongoSchema/MessageSchema.js");

const getAllMessage = () => {
  return Message.find({}).sort("-_id");
};

const addMessage = (message) => {
  return new Message(message).save();
};

module.exports = {
  getAllMessage: getAllMessage,
  addMessage: addMessage,
};
