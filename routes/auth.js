import { Router } from "express";
import passport from "../middlewares/passport.js";
import register from "../controllers/auth/register.js";
import signIn from "../controllers/auth/signIn.js";
import token from "../controllers/auth/token.js";
import signOut from "../controllers/auth/signOut.js";
import isValidToken from "../middlewares/isValidToken.js";
import isPassOk from "../middlewares/isPassOk.js";
import notExistsUser from "../middlewares/notExistsUser.js";
import isValidPass from "../middlewares/isValidPass.js";
import existsUser from "../middlewares/existsUser.js";
import validator from "../middlewares/validator.js";
import registerSchema from "../schemas/register.js";
import signInSchema from "../schemas/signIn.js";
import updatePassHash from "../middlewares/updatePassHash.js";

let authRouter = Router();

authRouter.post(
  "/register",
  validator(registerSchema),
  existsUser,
  updatePassHash,
  register
);
authRouter.post(
  "/signin",
  validator(signInSchema),
  notExistsUser,
  isPassOk,
  isValidToken,
  signIn
);
authRouter.post(
  "/token",
  passport.authenticate("jwt", { session: false }),
  isValidToken,
  token
);
authRouter.post(
  "/signout",
  passport.authenticate("jwt", { session: false }),
  signOut
);

export default authRouter;
