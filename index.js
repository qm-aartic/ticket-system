const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const ecSchema = require('./routes/ecSchema');
const issues = require('./routes/issues');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/ecircum',ecSchema);
app.use('/api/issues',issues);



mongoose.connect('mongodb://localhost:27017/playground')
    .then(() => {console.log('connected to MongoDB...')})
    .catch(err => console.error('could not connect to MongoDB',err.message));

const port = process.env.PORT || 3001;

app.listen(port, () => {console.log(`running on port ${port}`)});