import City from "../../models/City.js";

export default async (req, res, next) => {
  try {
    let updateCity = await City.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    }).select("name photo mail");
    if (updateCity) {
      return res.status(200).json({
        success: true,
        message: "city updated",
        response: updateCity,
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
