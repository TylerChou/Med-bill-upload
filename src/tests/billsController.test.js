const { createBill, getBills } = require('./billsController');

describe('billsController', () => {
  describe('createBill', () => {
    it('should create a new bill with a unique id', () => {
      const billData = {
        patientName: 'John Doe',
        patientAddress: '123 Main St.',
        hospitalName: 'Mercy Hospital',
        dateOfService: '2022-01-01',
        billAmount: 1000,
      };
      const newBill = createBill(billData);
      expect(newBill).toEqual({
        ...billData,
        id: expect.any(String),
      });
    });
  });

  describe('getBills', () => {
    it('should return an array of bills', () => {
      const bills = getBills();
      expect(Array.isArray(bills)).toBe(true);
    });
  });
});
