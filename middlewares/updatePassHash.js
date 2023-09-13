import { hashSync } from "bcrypt";

export default (req, res, next) => {
  try {
    console.log(req.body);
    if (req.body.password) {
      let hashPassword = hashSync(req.body.password, 10);
      req.body.password = hashPassword;
    }
    return next();
  } catch (error) {
    return next(error);
  }
};