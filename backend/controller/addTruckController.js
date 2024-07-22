const newTruck = require("../models/addTruckModel");

const addTruck = async (req, res) => {
  try {
    const {
      name,
      classification,
      subclassification,
      plateinformation,
      RC_No,
      FC,
      Insurance,
    } = req.body;
    const { RC_certificate, Picture_of_vehicle } = req.files;
    const savedTruck = new newTruck({
      name,
      classification,
      subclassification,
      plateinformation,
      RC_certificate: {
        data: RC_certificate[0].buffer, // Buffer containing PDF data
        contentType: RC_certificate[0].mimetype, // MIME type of PDF
      },
      RC_No,
      Picture_of_vehicle: {
        data: Picture_of_vehicle[0].buffer, // Buffer containing image data
        contentType: Picture_of_vehicle[0].mimetype, // MIME type of image
      },
      FC,
      Insurance,
    });
    const addedTruck = await savedTruck.save();
    res.send({
      message: "Truck added successfully",
      success: true,
      data: addedTruck,
    });
  } catch (error) {
    res.send({
      message: error.message,
      success: false,
      data: null,
    });
  }
};

exports.addTruck = addTruck;
