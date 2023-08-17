import City from "../../models/City.js";

export default async (req, res) => {
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
    return res.status(400).json({
      success: false,
      message: "not update",
      response: null,
    });
  }
};
