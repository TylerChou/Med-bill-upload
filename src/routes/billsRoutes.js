const express = require('express');
const { getBills, createBill } = require('../controllers/billsController');

const router = express.Router();

router.route('/').get(getBills).post(createBill);

module.exports = router;