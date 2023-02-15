const request = require('supertest');
const app = require('./server');
const { createBill } = require('./billsController');

describe('billsRoutes', () => {
  describe('GET /api/items', () => {
    it('should return a list of bills', async () => {
      const billData = {
        patientName: 'John Doe',
        patientAddress: '123 Main St.',
        hospitalName: 'Mercy Hospital',
        dateOfService: '2022-01-01',
        billAmount: 1000,
      };
      createBill(billData);

      const response = await request(app).get('/api/items');
      expect(response.status).toBe(200);
      expect(response.body).toEqual(
        expect.arrayContaining([
          {
            ...billData,
            id: expect.any(String),
          },
        ])
      );
    });
  });

  describe('POST /api/items', () => {
    it('should create a new bill and return it', async () => {
      const billData = {
        patientName: 'Jane Doe',
        patientAddress: '456 Elm St.',
        hospitalName: 'St. Joseph Hospital',
        dateOfService: '2022-01-02',
        billAmount: 2000,
      };

      const response = await request(app)
        .post('/api/items')
        .send(billData);
      expect(response.status).toBe(201);
      expect(response.body).toEqual({
        ...billData,
        id: expect.any(String),
      });

      const getResponse = await request(app).get('/api/items');
      expect(getResponse.body).toContainEqual(response.body);
    });
  });
});