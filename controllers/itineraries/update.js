import Itinerary from "../../models/Itinerary.js";

export default async (req, res, next) => {
  try {
    let updateItinerary = await Itinerary.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    ).select("name photo mail");
    if (updateItinerary) {
      return res.status(200).json({
        success: true,
        message: "itinerary updated",
        response: updateItinerary,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "itinerary not found",
        response: null,
      });
    }
  } catch (error) {
    next(error);
  }
};
