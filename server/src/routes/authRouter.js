const authRouter = require('express').Router();
const AuthController = require('../controllers/AuthController');
const { verifyRefreshToken } = require('../middlewares/verifyTokens');

authRouter.post("/signup", AuthController.signUp);
authRouter.post("/login", AuthController.login);
authRouter.get("/logout", AuthController.logout);
authRouter.get('/refreshTokens', verifyRefreshToken, AuthController.refreshTokens);  // тайное окно))

module.exports = authRouter;