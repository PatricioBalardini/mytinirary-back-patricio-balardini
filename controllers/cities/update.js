import City from "../../models/City.js";

export default async (req, res, next) => {
  try {
    let updateCity = await City.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    }).select("name photo ");
    return res.status(200).json({
      success: true,
      message: "City updated",
      response: updateCity,
    });
  } catch (err) {
    next(err);
  }
};
