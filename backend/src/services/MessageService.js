const mongoose = require("mongoose");
const DAL = require("../dal/MessageDAL.js");

const getAllMessages = () => {
  return DAL.getAllMessage()
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
};

const addMessage = (message) => {
  return DAL.addMessage(message)
    .then((data) => {
      return true;
    })
    .catch((error) => {
      return error;
    });
};

module.exports = {
  getAllMessages: getAllMessages,
  addMessage: addMessage,
};
