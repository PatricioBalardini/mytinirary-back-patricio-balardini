import Itinerary from "../../models/Itinerary.js";

export default async (req, res, next) => {
  try {
    let queries = {};
    console.log(req.query);
    if (req.query.city_id) {
      queries.city_id = req.query.city_id;
    }
    let all = await Itinerary.find(
      { city_id: req.query.city_id }
    ).populate({
      path: "city_id",
      select: "city photo admin_id",
      populate: {
        path: "admin_id",
        select: "name",
      },
    });
    return res.status(200).json({
      success: true,
      message: "itineraries found",
      response: all,
    });
  } catch (error) {
    next(error);
  }
};
