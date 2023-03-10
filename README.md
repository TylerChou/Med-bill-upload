# Medical Bill Upload Service

This is a simple medical bill upload service using Node and Express.

## Getting Started

1. Install Node.js (v14 or later) from [https://nodejs.org/](https://nodejs.org/).

2. Clone this repository and navigate to the project directory:

   ```sh
   git clone https://github.com/YOUR-USERNAME/medical-bill-upload-service.git
   cd medical-bill-upload-service

3. Install the dependencies

    ```sh
    npm install

4. To start the application, run the command: 
    ```sh
    npm start
    ```
   The application will start on  `http://localhost:3000`.

5. To test the API, run the command: 
    ```sh
    npm test
    ```

## API Endpoints

### GET /api/bills

Returns a list of medical bills.

### POST /api/bills

Creates a new medical bill.

A medical bill should be in JSON format and have the following properties:

- `patientName`: a string representing the name of the patient
- `patientAddress`: a string representing the address of the patient
- `hospitalName`: a string representing the name of the hospital
- `dateOfService`: a string representing the date of the medical service in `YYYY-MM-DD` format
- `billAmount`: a number representing the amount of the medical bill
