const UserDetail = require("../dal/UserDetailDAL.js");

const getUserDetailById = (filter) => {
  return UserDetail.getUserDetailById(filter)
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
};

const addUserDetail = (row) => {
  return UserDetail.addUserDetail(row);
};

module.exports = {
  getUserDetailById: getUserDetailById,
  addUserDetail: addUserDetail,
};
