const express = require('express');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors')
const noteRoute = require('./routs/noteRoute');
const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/v1/', noteRoute);

app.get('/', (req, res) => res.send('Hello World!'));
app.listen(process.env.PORT || 4000, () => console.log(`Note app listening on port ${process.env.PORT}!`));