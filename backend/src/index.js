// backend/src/index.js
require('dotenv').config();
const express      = require('express');
const cors         = require('cors');
const contactRoute = require('./routes/contact');
const serverless   = require('serverless-http');

const app = express();
app.use(cors());
app.use(express.json());

// mount your contact router
app.use('/api/contact', contactRoute);

// export as a serverless function
module.exports = serverless(app);
