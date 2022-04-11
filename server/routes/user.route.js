const express = require("express");
const route = express();
const userController = require("../controller/user.controller");

const basePath = "/users";

route.post(`${basePath}/create`, userController.createUser);
route.get(`${basePath}`, userController.findAllUsers);

module.exports = route;
