import User from "../../models/User.js";

export default async (req, res) => {
  try {
    let newUser = await User.create(req.body);
    return res.status(201).json({
      success: true,
      message: "user crated",
      response: newUser._id,
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: "not create",
      response: null,
    });
  }
};