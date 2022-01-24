const express = require("express");
const router = express();

const userController = require("../controller/userController");
const taskController = require("../controller/taskController");

// User Routes
router.post("/user/register", userController.register);
router.post("/user/login", userController.login);
router.get("/users", userController.users);

//To Do Routes
router.post("/task/add", taskController.add);
router.get("/task/get/:userID", taskController.get);
router.post("/task/remove/:taskID", taskController.remove);

module.exports = router;
