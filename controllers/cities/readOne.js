import City from "../../models/City.js";

export default async (req, res, next) => {
  try {
    let city = await City.findOne({ _id: req.params.id }).select("");
    if (city) {
      return res.status(200).json({
        success: true,
        message: "city found",
        response: city,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "city not found",
        response: null,
      });
    }
  } catch (error) {
    next(error);
  }
};
