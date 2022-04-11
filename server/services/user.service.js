const userModel = require("../models/user.model");

const createUser = async (userBody) => {
  const user = await userModel.create(userBody);
  return user;
};

const findAllUsers = async () => {
  const users = await userModel.find();
  return users;
};

module.exports = { createUser, findAllUsers };
