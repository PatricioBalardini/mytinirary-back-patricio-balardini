import { model, Schema, Types } from "mongoose";

let collection = "cities";

let schema = new Schema({
  country: { type: String, required: true },
  fundation: { type: Date, required: false },
  population: { type: Number },
  photo: { type: String, required: false },
  city: { type: String, required: true },
  description: { type: String, default: "edit later", required: false },
  smalldescription: { type: String, default: "edit later", required: false },
  featuredLocation: { type: String, default: "edit later", required: false },
  admin_id: {
    type: Types.ObjectId,
    required: false,
    ref: "users",
  },
});

let City = model(collection, schema);
export default City;
