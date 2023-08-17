import City from "../../models/City.js";

export default async (req, res) => {
  try {
    let newCity = await City.create(req.body);
    return res.status(201).json({
      success: true,
      message: "city crated",
      response: newCity._id,
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: "not create",
      response: null,
    });
  }
};