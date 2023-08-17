import User from "../../models/User.js";

export default async (req, res) => {
  try {
    let oneUser = await User.findOne({ _id: req.params.id }).select(
      "mail photo -_id"
    );
    return res.status(200).json({
      success: true,
      message: "user found",
      response: oneUser,
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: "not found",
      response: null,
    });
  }
};
