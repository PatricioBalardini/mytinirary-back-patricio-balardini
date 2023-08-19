import User from "../../models/User.js";

export default async (req, res, next) => {
  try {
    let oneUser = await User.findOne({ _id: req.params.id }).select(
      "name mail photo -_id"
    );
    if (oneUser) {
      return res.status(200).json({
        success: true,
        message: "user found",
        response: oneUser,
      });
    } else{
      return res.status(404).json({
        success: false,
        message: "user not found",
        response: null
      })
    }
  } catch (err) {
    next(err);
  }
};
