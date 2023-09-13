import Itinerary from "../../models/Itinerary.js";

export default async (req, res, next) => {
  try {
    let itinerary = await Itinerary.findOne({ _id: req.params.id }).select("");
    if (itinerary) {
      return res.status(200).json({
        success: true,
        message: "itinerary found",
        response: itinerary,
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
