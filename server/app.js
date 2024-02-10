const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const Routes = require("./routes/route.js")
require('dotenv').config();

const app = express();

mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}`, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB', err));

app.use(express.json({ limit: '10mb' }))
app.use(cors())

app.use('/placementpilot', Routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

module.exports = app;
