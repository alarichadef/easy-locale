const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const countries = require('./routes/countries');
const locales = require('./routes/locales');
const currencies = require('./routes/currencies');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true,limit:'10mb' }));
app.use(cors());

app.use('/countries', countries);
app.use('/locales', locales);
app.use('/currencies', currencies);

const port = process.env.PORT || 5001;

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});

app.get('/', function (req, res) {
    res.send('Currently working!');
});
