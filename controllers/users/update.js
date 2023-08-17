import User from "../../models/User.js";

export default async (req, res) => {
  try {
    let updateUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    }).select("name mail photo ");
    return res.status(200).json({
      success: true,
      message: "user updated",
      response: updateUser,
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: "not update",
      response: null,
    });
  }
};
