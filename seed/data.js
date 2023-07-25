import db from "../db/connection.js"
import Photo from "../models/Photo.js"
import space from "./space.json" assert { type: "json"}

let updatedData = space.map((photo) => {
  return {
    full_name: photo.camera.full_name,
    earth_date: photo.earth_date,
    rover_name: photo.rover.name,
    photo: photo.img_src
  }
})




const insertData = async () => {
  //Reset the database
  await db.dropDatabase();

  //Insert Data
  await Photo.create(updatedData);

  console.log("Photos created!");

  //Close the DB
  await db.close();



}

insertData()