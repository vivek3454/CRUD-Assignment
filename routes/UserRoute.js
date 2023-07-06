const express =  require("express");
const { getUser, registerUser, loginUser } = require("../controllers/userController");
const registerDataValidate = require("../middlewares/registerDataValidate");
const loginDataValidate = require("../middlewares/loginDataValidate");

const userRoute = express.Router();


userRoute.post("/register", registerDataValidate, registerUser) // to register user 

userRoute.post("/login", loginDataValidate, loginUser) // to login user  



module.exports = userRoute;