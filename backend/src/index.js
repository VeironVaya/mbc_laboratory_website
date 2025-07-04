// backend/src/index.js
require('dotenv').config();
const express = require('express');
const cors    = require('cors');
const contactRoute = require('./routes/contact');

const app = express();
app.use(cors());
app.use(express.json());

// this line now receives a valid Express.Router()
app.use('/api/contact', contactRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
