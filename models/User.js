import { model, Schema } from "mongoose";

let collection = "users";

let schema = new Schema({
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  mail: { type: String, required: true, unique: true },
  photo: {
    type: String,
    default: "https://i.im.ge/2022/08/31/OE8vA4.peritoMorenoCalafate.png",
  },
  password: { type: String, required: true },
  country: { type: String, required: true },
});

let User = model(collection, schema);
export default User;
