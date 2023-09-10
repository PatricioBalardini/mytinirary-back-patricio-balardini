import City from "../../models/City.js";

export default async (req, res, next) => {
  try {
    let city = await City.findOne({ _id: req.params.id }).select("");
    return res.status(200).json({
      success: true,
      message: "city found",
      response: city,
    }
    );
  } catch (error) {
    next(error);
  }
};

