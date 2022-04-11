const userService = require("../services/user.service");

const createUser = async (req, res, next) => {
  try {
    const userBody = req.body;
    const user = await userService.createUser(userBody);

    res.status(201).json(user);
  } catch (error) {
    console.log(error);
  }
};

const findAllUsers = async (req, res, next) => {
  try {
    const users = await userService.findAllUsers();
    console.log(users);
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createUser, findAllUsers };
