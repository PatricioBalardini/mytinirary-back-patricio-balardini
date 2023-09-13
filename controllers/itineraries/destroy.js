import Itinerary from "../../models/Itinerary.js";

export default async (req, res, next) => {
  try {
    let deleteItinerary = await Itinerary.findByIdAndDelete(req.params.id);
    if (deleteItinerary) {
      return res.status(200).json({
        success: true,
        message: "itinerary deleted",
        response: deleteItinerary._id,
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
