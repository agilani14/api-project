import mongoose from "mongoose";
const { Schema } = mongoose;

let Photo = new Schema({
  "full_name": { type: String },
  "earth_date": { type: String },
  "rover_name": { type: String },
  "photo": { type: String }
});


export default mongoose.model("photos", Photo);