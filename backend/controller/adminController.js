const admin = require("../models/adminModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const adminRegister = async (req, res) => {
  try {
    const existEmail = await admin.findOne({ email: req.body.email });
    if (existEmail) {
      return res.send({
        message: "Email already exists",
        success: false,
        data: null,
      });
    }
    if (!req.body.password) {
      return res.send({
        message: "Password is required",
        success: false,
        data: null,
      });
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    req.body.password = hashedPassword;
    const newAdmin = new admin(req.body);
    await newAdmin.save();
    res.send({
      message: "Account created Successfully",
      success: true,
      data: null,
    });
  } catch (error) {
    res.send({
      message: error.message,
      success: false,
      data: null,
    });
  }
};

const adminLogin = async (req, res) => {
  try {
    const existEmail = await admin.findOne({ email: req.body.email });
    if (!existEmail) {
      return res.send({
        message: "Invalid Email",
        success: false,
        data: null,
      });
    }
    const matchedPassword = await bcrypt.compare(
      req.body.password,
      existEmail.password
    );
    if (!matchedPassword) {
      return res.send({
        message: "Incorrect password",
        success: false,
        data: null,
      });
    }
    const token = jwt.sign(
      { adminId: existEmail._id },
      process.env.JSON_WEB_TOKEN,
      { expiresIn: "1d" }
    );
    res.send({
      message: "Logged In Successfully",
      success: true,
      data: token,
    });
  } catch (error) {
    res.send({
      message: error.message,
      success: false,
      data: null,
    });
  }
};

exports.adminRegister = adminRegister;
exports.adminLogin = adminLogin;
