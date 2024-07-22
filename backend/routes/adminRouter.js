const express = require('express');
const router = express.Router();
const adminRegister = require('../controller/adminController');

router.post('/register',adminRegister.adminRegister)
router.post('/login', adminRegister.adminLogin)

module.exports = router;