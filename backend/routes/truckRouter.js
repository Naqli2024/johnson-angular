const express = require("express");
const router = express.Router();
const multer = require("multer");
const addTruck = require("../controller/addTruckController");

// Multer setup for file uploads with disk storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === "RC_certificate") {
      cb(null, "uploads/pdf");
    } else if (file.fieldname === "Picture_of_vehicle") {
      cb(null, "uploads/images");
    } else {
      cb(new Error("Invalid fieldname"));
    }
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); // Keep original file name
  },
});
const upload = multer({ storage: storage });

router.post(
  "/add-truck",
  upload.fields([
    { name: "RC_certificate", maxCount: 1 },
    { name: "Picture_of_vehicle", maxCount: 1 },
  ]),
  addTruck.addTruck
);

module.exports = router;
