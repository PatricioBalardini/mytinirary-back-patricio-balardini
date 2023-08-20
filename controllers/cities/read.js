import City from "../../models/City.js";

export default async (req, res, next) => {
  try {
    let searchObject = {};
    let orderingObject = {};
    if (req.query.admin_id) {
      searchObject.admin_id = req.query.admin_id;
    }
    if (req.query.city) {
      searchObject.city = new RegExp(req.query.city, "i");
    }
    if (req.query.sort) {
      orderingObject.city = req.query.sort;
    }
    let allCities = await City.find(
      searchObject,
      "-_id"
    )
      .populate("admin_id", "name mail photo -_id")
      .sort(orderingObject);
    if (allCities.length > 0) {
      return res.status(200).json({
        success: true,
        message: "cities found",
        response: allCities,
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "not found",
        response: null,
      });
    }
  } catch (err) {
    next(err);
  }
};
