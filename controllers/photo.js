import Photo from "../models/Photo.js";

export const getPhoto = async (req, res) => {
  try {
    let photos = await Photo.find();
    res.json(photos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getPhoto = async (req, res) => {
  try {
    const { id } = req.params
    const photo = await Photo.findById(id)

    if (photo) {
      return res.json(photo);
    }

    res.status(404).json({ message: "House not found!" })
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};



export const createPhoto = async (req, res) => {
  const photo = new Photo(req.body)
  await photo.save()
  res.status(201).json(photo);
};

export const updatePhoto = async (req, res) => {
  const { id } = req.params;
  const photo = await Photo.findByIdAndUpdate(id, req.body);
  res.status(201).json(photo);
};

export const deletePhoto = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Photo.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send("Photo Deleted!");
    }

    throw new Error("Photo not found!")
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};