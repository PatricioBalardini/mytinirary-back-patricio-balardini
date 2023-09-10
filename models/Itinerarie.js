import { model, Schema, Types } from "mongoose";

let collection = "itineraries";

let schema = new Schema({
  name: { type: String, required: true },
  city_id: {
    type: Types.ObjectId,
    required: true,
    ref: "cities",
  },
  price: { type: Number, required: true, min: 1, max: 5 },
  duration: { type: Number, required: true },
  likes: { type: Number, required: true, default: 0 },
  tags: [String],
  user_id: {
    type: Types.ObjectId,
    required: true,
    ref: "users",
  },
});

let Itinerarie = model(collection, schema);
export default Itinerarie;
