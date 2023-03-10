const Bill = require('../models/bill');

const bills = [];

exports.getBills = (req, res) => {
  res.json(bills);
};

exports.createBill = (req, res) => {
  const { patientName, patientAddress, hospitalName, dateOfService, billAmount } = req.body;
  if(!patientName || !patientAddress || !hospitalName || !dateOfService || !billAmount){
    return res.status(400).json({
        status: "unsuccessful", 
        message: 'Please include all required fields: patientName, patientAddress, hospitalName, dateOfService, billAmount'})
    };

  const bill = new Bill(patientName, patientAddress, hospitalName, dateOfService, billAmount);
  bills.push(bill);

  res.status(201).json({bill});
};