const express = require('express');
const billsRoutes = require('./routes/billsRoutes');

const app = express();

//parse JSON
app.use(express.json());

app.use('/api/bills', billsRoutes);

// 404 handler
app.get('*', (req, res) => {
    res.status(404).json({ message: 'Route Not Found, please navigate to /api/bills' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = app;