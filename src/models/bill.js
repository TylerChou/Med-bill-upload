class Bill{
    constructor(patientName, patientAddress, hospitalName, dateOfService, billAmount){
        this.patientName = patientName;
        this.patientAddress = patientAddress;
        this.hospitalName = hospitalName;
        this.dateOfService = dateOfService;
        this.billAmount = billAmount;
    }
}

module.exports = Bill;