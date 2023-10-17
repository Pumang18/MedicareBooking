import Doctor from "../models/DoctorSchema.js";

export const updateDoctor = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedDoctor = await Doctor.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Succesfully Updated",
      data: updatedDoctor,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Updation Unsuccessful" });
  }
};

export const deleteDoctor = async (req, res) => {
  const id = req.params.id;
  try {
    await Doctor.findOneAndDelete(id);

    res.status(200).json({ success: true, message: "Succesfully Deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to Delete" });
  }
};

export const getSingleDoctor = async (req, res) => {
  const id = req.params.id;
  try {
    const doctor = await Doctor.findById(id)
      .populate("reviews")
      .select("-password");

    res
      .status(200)
      .json({ success: true, message: "Doctor Found", data: doctor });
  } catch (error) {
    res.status(404).json({ success: false, message: "No Doctor found" });
  }
};

export const getAllDoctor = async (req, res) => {
  try {
    const { query } = req.query;
    let doctors;

    if (query) {
      doctors = await Doctor.find({
        isApproved: "approved",
        $or: [
          { name: { $regex: query, $options: "i" } },
          { specialization: { $regex: query, $options: "i" } },
        ],
      }).select("-password");
    } else {
      doctors = await Doctor.find({ isApproved: "approved" }).select(
        "-password"
      );
    }

    // const Doctors=await Doctor.find({})

    res
      .status(200)
      .json({ success: true, message: "Doctors Found", data: doctors });
  } catch (error) {
    res.status(404).json({ success: false, message: "Not found" });
  }
};