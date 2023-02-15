const express = require('express');
const billsRoutes = require('./routes/billsRoutes');

const app = express();

//parse JSON (application/json content-type)
app.use(express.json());

app.use('/api/bills', billsRoutes);

const PORT = process.env.PORT || 3000;
console.log(`process.env.PORT: ${process.env.PORT}`);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});