const UserDetail = require("../mongoSchema/UserDetailSchema.js");

const getUserDetailById = (filter) => {
  return UserDetail.findOne(filter)
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
};

const addUserDetail = (row) => {
  return new UserDetail(row).save();
};

module.exports = {
  getUserDetailById: getUserDetailById,
  addUserDetail: addUserDetail,
};
