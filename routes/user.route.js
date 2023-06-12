const { signup, login, logout, refreshTokens } = require("../controller/user.control")


const userRouter = require("express").Router()

userRouter.post("/register",signup);
userRouter.post("/login",login);
userRouter.get("/logout",logout);
userRouter.get("/refresh-token",refreshTokens);

module.exports = {
    userRouter
}