const supertest = require('supertest');
const request = require('supertest');

const app = require('../server.js');
const bill = require("../models/bill");

const test_bill = new bill ("Tyler", "1065 Kings Court", "John Hospital" , "2/14/2023", 1000);
const test_wrong_bill = new bill();

describe(
    "Test bill controller GET/POST",
    ()=>{

it("GET empty /api/bills", async()=>{
    const response = await request(app).get('/api/bills');
    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual([]);
});

it("POST /api/bills incorrect bill", async()=>{
    const response = await request(app).post('/api/bills').send(test_wrong_bill);
    expect(response.statusCode).toEqual(400);
    expect(response.body).toEqual({
        status: "unsuccessful", 
        message: 'Please include all required fields: patientName, patientAddress, hospitalName, dateOfService, billAmount'});
});

it("POST /api/bills", async()=>{
    const response = await request(app).post('/api/bills').send(test_bill);
    expect(response.statusCode).toEqual(201);
    expect(response.body).toEqual({"bill":test_bill});
});


it("GET 1 Object", async()=>{
    const response = await request(app).get('/api/bills');
    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual([test_bill]);
});

})
describe("Test invalid link",()=>{
    it("GET incorrect link", async()=>{
        const response = await request(app).get('/incorrect_link');
        expect(response.statusCode).toEqual(404);
        expect(response.body).toEqual({ message: 'Route Not Found, please navigate to /api/bills' });
    });
})