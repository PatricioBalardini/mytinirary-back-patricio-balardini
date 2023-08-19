import City from "../../models/City.js";

export default async (req, res, next) => {
  try {
    let oneCity = await City.findOne({ _id: req.params.id }).select(
      "name photo -_id"
    );
    return res.status(200).json({
      success: true,
      message: "city found",
      response: oneCity,
    });
  } catch (err) {
    next(err)
  }
};
